import { authApi } from '@api';
import { useAuthStore } from '@store';

/**
 * Auth service — thin facade over the auth API and auth store.
 * Keeps the UI layer decoupled from HTTP + persistence details.
 */
export const authService = {
    async login(credentials) {
        const session = await authApi.login(credentials);
        useAuthStore.getState().setSession(session);
        return session;
    },

    async register(payload) {
        // Spec: registration redirects to /login — do NOT auto-authenticate.
        return authApi.register(payload);
    },

    async logout() {
        await authApi.logout();
        useAuthStore.getState().clearSession();
    },

    async fetchUser() {
        const user = await authApi.me();
        useAuthStore.getState().setUser(user);
        return user;
    },

    getStoredUser() {
        return useAuthStore.getState().getUser();
    },
};
