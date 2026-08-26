import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const STORE_KEY = 'cpwb-auth-store';
const TOKEN_KEY = 'cpwb_access_token';
const USER_KEY = 'cpwb_user';
const KIND_KEY = 'cpwb-auth-storage-kind';

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

const read = (s, k) => { try { return s.getItem(k); } catch { return null; } };
const write = (s, k, v) => { try { s.setItem(k, v); } catch {} };
const remove = (s, k) => { try { s.removeItem(k); } catch {} };

/**
 * Auth Zustand store.
 *
 * Persists the authenticated user + token so the user stays logged in on the
 * admin/dashboard pages after a page refresh.
 *
 * IMPORTANT (the refresh bug):
 *   Zustand v5's `persist` middleware calls `storage.setItem(name,
 *   { state, version })` passing a real JavaScript object, NOT a string.
 *   The old code passed a bare `localStorage` object straight into `persist`,
 *   so that object was coerced to the literal string "[object Object]" and
 *   the session could never be rehydrated — the app then redirected back to
 *   /login on every refresh.
 *
 *   Fix: wrap our raw storage with `createJSONStorage()` (it applies the
 *   required JSON.stringify / JSON.parse) and store the session in the
 *   storage chosen by the "Remember me" checkbox:
 *     - remember = true  -> localStorage  (survives browser restarts)
 *     - remember = false -> sessionStorage (survives in-tab refreshes)
 *   Both survive a simple page refresh, which fixes the bug.
 */

/** Resolve which storage the current session lives in (after a refresh). */
function resolveStorage() {
    if (typeof window === 'undefined') return null;
    const kind = read(window.localStorage, KIND_KEY) || read(window.sessionStorage, KIND_KEY);
    if (kind === 'local') return window.localStorage;
    if (kind === 'session') return window.sessionStorage;
    return window.localStorage;
}

let activeStorage = resolveStorage();

function setActiveStorage(remember) {
    const target = remember ? window.localStorage : window.sessionStorage;
    const other = remember ? window.sessionStorage : window.localStorage;
    activeStorage = target;
    // Remember the choice across an in-tab refresh so an ordinary (non
    // remember-me) session stays in sessionStorage and is not migrated to
    // localStorage (which would outlive the browser session).
    try {
        target.setItem(KIND_KEY, remember ? 'local' : 'session');
        remove(other, KIND_KEY);
    } catch { /* ignore */ }
}

function clearStorageKind() {
    if (typeof window === 'undefined') return;
    remove(window.localStorage, KIND_KEY);
    remove(window.sessionStorage, KIND_KEY);
}

/**
 * Raw string-based storage adapter.
 *
 * - getItem: reads from BOTH localStorage and sessionStorage so a session
 *   written to either storage is found after a refresh. For the persisted
 *   auth state it returns only a *valid* serialized value (legacy / corrupted
 *   values, e.g. the old "[object Object]", are skipped).
 * - setItem: writes to whichever storage is active (remember-me choice).
 * - removeItem: removes from both storages so logout always wipes everything.
 */
const rawStorage = () => {
    const validPersist = () => {
        for (const s of [window.localStorage, window.sessionStorage]) {
            const raw = read(s, STORE_KEY);
            if (!raw) continue;
            try {
                const p = JSON.parse(raw);
                if (p && typeof p === 'object' && 'state' in p && 'version' in p) {
                    return raw;
                }
            } catch { /* corrupted/legacy - skip */ }
        }
        return null;
    };

    return {
        getItem: (name) =>
            name === STORE_KEY
                ? validPersist()
                : (read(window.localStorage, name) || read(window.sessionStorage, name)),
        setItem: (name, value) => write(activeStorage || window.localStorage, name, value),
        removeItem: (name) => {
            remove(window.localStorage, name);
            remove(window.sessionStorage, name);
        },
    };
};
export const useAuthStore = create(
    persist(
        (set, get) => ({
            ...initialState,

            /**
             * Set the authenticated session (user + token).
             * @param {Object} session - { user, token }
             * @param {boolean} remember - true => localStorage, false => sessionStorage
             */
            setSession: (session, remember = false) => {
                const target = remember ? window.localStorage : window.sessionStorage;
                const other = remember ? window.sessionStorage : window.localStorage;

                setActiveStorage(remember);

                // Keep low-level token/user keys in sync for code that reads
                // them directly (e.g. the axios request interceptor fallback).
                if (session?.token) write(target, TOKEN_KEY, session.token);
                if (session?.user) write(target, USER_KEY, JSON.stringify(session.user));

                // Avoid stale data leaking between storages.
                [STORE_KEY, TOKEN_KEY, USER_KEY].forEach((k) => remove(other, k));

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
                remove(window.localStorage, TOKEN_KEY);
                remove(window.localStorage, USER_KEY);
                remove(window.sessionStorage, TOKEN_KEY);
                remove(window.sessionStorage, USER_KEY);
                clearStorageKind();

                activeStorage = window.localStorage;

                set(initialState);

                // Ensure a prior session can never be rehydrated after logout.
                remove(window.localStorage, STORE_KEY);
                remove(window.sessionStorage, STORE_KEY);
            },

            /**
             * Convenience getter for the current user.
             */
            getUser: () => get().user,
        }),
        {
            name: STORE_KEY,
            // createJSONStorage adds the JSON (de)serialization so zustand's
            // `{ state, version }` object is stored as real JSON instead of
            // being coerced to "[object Object]".
            storage: createJSONStorage(rawStorage),
            partialize: (state) => ({
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
            }),
        }
    )
);