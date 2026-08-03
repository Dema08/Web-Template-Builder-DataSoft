/**
 * Validation helpers for use with react-hook-form / custom logic.
 */
export const validators = {
    required: (value) => {
        if (value === undefined || value === null || value === '') return false;
        if (typeof value === 'string' && value.trim() === '') return false;
        if (Array.isArray(value) && value.length === 0) return false;
        return true;
    },

    email: (value) => {
        if (!value) return true; // allowed empty; use required() separately
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },

    minLength: (min) => (value) => {
        if (!value) return true;
        return String(value).length >= min;
    },

    maxLength: (max) => (value) => {
        if (!value) return true;
        return String(value).length <= max;
    },

    password: (value) => {
        if (!value) return true;
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(value);
    },

    url: (value) => {
        if (!value) return true;
        try {
            new URL(value);
            return true;
        } catch {
            return false;
        }
    },
};
