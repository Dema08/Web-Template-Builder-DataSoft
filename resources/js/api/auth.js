import http from './http';
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from '@constants';

/**
 * Authentication API client.
 * Handles login, registration, logout, and fetching the authenticated user.
 */
const authApi = {
    /**
     * Register a new user.
     * @param {Object} payload - { name, email, password, password_confirmation }
     */
    async register(payload) {
        const { data } = await http.post('/auth/register', payload);
        // Registration returns a token but the flow redirects to /login,
        // so we do NOT persist a session here.
        return data.data;
    },

    /**
     * Log the user in.
     * @param {Object} credentials - { email, password }
     */
    async login(credentials) {
        const { data } = await http.post('/auth/login', credentials);
        this._persistSession(data.data);
        return data.data;
    },

    /**
     * Log the user out.
     */
    async logout() {
        try {
            await http.post('/auth/logout');
        } finally {
            this._clearSession();
        }
    },

    /**
     * Fetch the currently authenticated user.
     */
    async me() {
        const { data } = await http.get('/auth/me');
        return data.data;
    },

    _persistSession(session) {
        if (session?.token) {
            localStorage.setItem(TOKEN_STORAGE_KEY, session.token);
        }
        if (session?.user) {
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(session.user));
        }
    },

    _clearSession() {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        localStorage.removeItem(USER_STORAGE_KEY);
    },
};

export default authApi;
