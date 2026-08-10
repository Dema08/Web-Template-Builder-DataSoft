import http from './http';

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
        // Registration does NOT auto-authenticate — user must login manually.
        return data.data;
    },

    /**
     * Log the user in.
     * @param {Object} credentials - { email, password, remember }
     */
    async login(credentials) {
        const { data } = await http.post('/auth/login', credentials);
        return data.data;
    },

    /**
     * Log the user out.
     */
    async logout() {
        try {
            await http.post('/auth/logout');
        } finally {
            // Session clearing is handled by the auth store
        }
    },

    /**
     * Fetch the currently authenticated user.
     */
    async me() {
        const { data } = await http.get('/auth/me');
        return data.data;
    },

    /**
     * Alias for me() to prevent TypeError in hooks.
     */
    async user() {
        return this.me();
    },

};

export default authApi;
