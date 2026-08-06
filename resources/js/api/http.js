import axios from 'axios';
import { API_BASE_URL, API_VERSION, TOKEN_STORAGE_KEY, HTTP_STATUS } from '@constants';
import { useAuthStore } from '@store';

/**
 * Centralized Axios instance with:
 * - Base URL + API version
 * - Request interceptor to attach the Bearer token
 * - Response interceptor to auto-logout on 401 (session expiry)
 */

const http = axios.create({
    baseURL: `${API_BASE_URL}/${API_VERSION}`,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: true, // Required for Sanctum SPA cookie-based auth
});

// Attach the Bearer token from the auth store on every request.
http.interceptors.request.use(
    (config) => {
        const token = useAuthStore.getState().token ?? localStorage.getItem(TOKEN_STORAGE_KEY);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// On a 401 response or 503 maintenance mode, clear the persisted session and redirect to /login.
http.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error;

        if (response) {
            const currentUser = useAuthStore.getState().user;
            const isUserAdmin = currentUser?.role === 'admin';

            // 401 Unauthorized (session expired or token revoked)
            if (response.status === HTTP_STATUS.UNAUTHORIZED) {
                useAuthStore.getState().clearSession();
                localStorage.removeItem(TOKEN_STORAGE_KEY);
                localStorage.removeItem('cpwb_user');

                if (!window.location.pathname.startsWith('/login')) {
                    window.location.href = '/login';
                }
            }

            // 503 Service Unavailable / Maintenance Mode for non-admins
            if ((response.status === 503 || response.data?.errors?.maintenance) && !isUserAdmin) {
                useAuthStore.getState().clearSession();
                localStorage.removeItem(TOKEN_STORAGE_KEY);
                localStorage.removeItem('cpwb_user');

                sessionStorage.setItem(
                    'maintenance_logout_notice',
                    'Sistem sedang dalam pemeliharaan (maintenance mode). Anda telah dikeluarkan otomatis oleh Administrator.'
                );

                if (!window.location.pathname.startsWith('/login')) {
                    window.location.href = '/login';
                }
            }
        }

        return Promise.reject(error);
    }
);


export default http;
