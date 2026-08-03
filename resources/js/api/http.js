import axios from 'axios';
import { API_BASE_URL, TOKEN_STORAGE_KEY, HTTP_STATUS } from '@constants';
import { useAuthStore } from '@store';

/**
 * Centralized Axios instance with:
 * - Base URL + API version
 * - Request interceptor to attach the Bearer token
 * - Response interceptor to auto-logout on 401 (session expiry)
 */

const http = axios.create({
    baseURL: `${API_BASE_URL}/${import.meta.env.VITE_API_VERSION || 'v1'}`,
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

// On a 401 response, clear the persisted session and redirect to /login.
http.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error;

        if (response && response.status === HTTP_STATUS.UNAUTHORIZED) {
            useAuthStore.getState().clearSession();
            localStorage.removeItem(TOKEN_STORAGE_KEY);
            localStorage.removeItem('cpwb_user');

            if (!window.location.pathname.startsWith('/login')) {
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    }
);

export default http;
