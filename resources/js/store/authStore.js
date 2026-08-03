import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Auth Zustand store.
 * Manages the authenticated user and token, persisted to localStorage.
 */
const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

export const useAuthStore = create(
    persist(
        (set, get) => ({
            ...initialState,

            /**
             * Set the authenticated session (user + token).
             */
            setSession: (session) =>
                set({
                    user: session?.user || null,
                    token: session?.token || null,
                    isAuthenticated: Boolean(session?.token || session?.user),
                }),

            /**
             * Set just the user object (e.g. after fetching `/auth/user`).
             */
            setUser: (user) => set({ user, isAuthenticated: Boolean(user) }),

            /**
             * Clear the session (logout).
             */
            clearSession: () => set(initialState),

            /**
             * Convenience getter for the current user.
             */
            getUser: () => get().user,
        }),
        {
            name: 'cpwb-auth-store',
            storage: {
                getItem: (name) => {
                    const value = localStorage.getItem(name);
                    return value ? JSON.parse(value) : null;
                },
                setItem: (name, value) => {
                    localStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: (name) => localStorage.removeItem(name),
            },
            partialize: (state) => ({
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
