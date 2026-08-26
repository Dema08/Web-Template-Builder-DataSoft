import { create } from 'zustand';

/**
 * Website builder Zustand store.
 * Holds transient builder state (not persisted) such as:
 * - The GrapesJS editor instance
 * - Dirty state (unsaved changes)
 * - The last save timestamp
 * - Publish status
 */
export const useWebsiteStore = create((set, get) => ({
    editor: null,
    isDirty: false,
    lastSavedAt: null,
    isPublishing: false,
    website: null,

    /**
     * Register the GrapesJS editor instance.
     */
    setEditor: (editor) => set({ editor }),

    /**
     * Mark the builder as having unsaved changes.
     */
    markDirty: () => set({ isDirty: true }),

    /**
     * Mark the builder as saved.
     */
    markSaved: () => set({ isDirty: false, lastSavedAt: new Date().toISOString() }),

    /**
     * Set the website metadata (settings + status).
     */
    setWebsite: (website) => set({ website }),

    /**
     * Set the publishing status.
     */
    setPublishing: (isPublishing) => set({ isPublishing }),

    /**
     * Reset the entire builder store.
     */
    reset: () => set({ editor: null, isDirty: false, lastSavedAt: null, isPublishing: false, website: null }),
}));
