/**
 * Safe localStorage wrapper with JSON serialization.
 * Guards against SSR and storage quota errors.
 */
export const storage = {
    get(key, fallback = null) {
        try {
            const raw = window.localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch {
            return fallback;
        }
    },

    set(key, value) {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // Storage full or unavailable — fail silently in non-critical paths.
        }
    },

    remove(key) {
        try {
            window.localStorage.removeItem(key);
        } catch {
            // ignore
        }
    },

    clear() {
        try {
            window.localStorage.clear();
        } catch {
            // ignore
        }
    },
};
