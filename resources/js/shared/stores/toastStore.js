import { create } from 'zustand';

let nextId = 1;

/**
 * Toast Zustand store.
 * Lightweight global toast notifications (success/error/info).
 */
export const useToastStore = create((set, get) => ({
    toasts: [],

    /**
     * Push a toast.
     * @param {Object} toast - { type: 'success'|'error'|'info', message, title? }
     */
    add: (toast) => {
        const id = nextId++;
        const entry = { id, type: 'info', ...toast };

        set((state) => ({ toasts: [...state.toasts, entry] }));

        // Auto-dismiss after 4 seconds.
        setTimeout(() => get().remove(id), 4000);

        return id;
    },

    /**
     * Remove a toast by id.
     */
    remove: (id) => {
        set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    },

    /**
     * Clear all toasts.
     */
    clear: () => set({ toasts: [] }),
}));

/**
 * Convenience helpers.
 */
export const toast = {
    success: (message, title) => useToastStore.getState().add({ type: 'success', message, title }),
    error: (message, title) => useToastStore.getState().add({ type: 'error', message, title }),
    info: (message, title) => useToastStore.getState().add({ type: 'info', message, title }),
};
