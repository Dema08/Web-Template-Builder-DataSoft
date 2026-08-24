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
             * @param {Object} session - { user, token }
             * @param {boolean} remember - If true, persist to localStorage; otherwise sessionStorage
             */
            setSession: (session, remember = false) => {
                const storage = remember ? localStorage : sessionStorage;
                
                // Persist to the chosen storage
                if (session?.token) {
                    storage.setItem('cpwb_access_token', session.token);
                }
                if (session?.user) {
                    storage.setItem('cpwb_user', JSON.stringify(session.user));
                }

                return set({
                    user: session?.user || null,
                    token: session?.token || null,
                    isAuthenticated: Boolean(session?.token || session?.user),
                });
            },

            /**
             * Set just the user object (e.g. after fetching `/auth/user`).
             */
            setUser: (user) => set({ user, isAuthenticated: Boolean(user) }),

            /**
             * Clear the session (logout).
             */
            clearSession: () => {
                localStorage.removeItem('cpwb_access_token');
                localStorage.removeItem('cpwb_user');
                sessionStorage.removeItem('cpwb_access_token');
                sessionStorage.removeItem('cpwb_user');
                set(initialState);
            },

            /**
             * Convenience getter for the current user.
             */
            getUser: () => get().user,
        }),
        {
            name: 'cpwb-auth-store',
            // Zustand persist serialises/deserialises state itself — the custom
            // storage adapter must be a pass-through (return/accept raw strings).
            storage: {
                getItem: (name) => {
                    return localStorage.getItem(name) || sessionStorage.getItem(name);
                },
                setItem: (name, value) => {
                    localStorage.setItem(name, value);
                },
                removeItem: (name) => {
                    localStorage.removeItem(name);
                    sessionStorage.removeItem(name);
                },
            },
            partialize: (state) => ({
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);
