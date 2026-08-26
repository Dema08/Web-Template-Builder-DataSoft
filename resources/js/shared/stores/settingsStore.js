import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Global Settings Zustand store.
 *
 * This is the SINGLE SOURCE OF TRUTH for all client-side settings.
 * Every page (admin/user sidebar, login, dashboard, builder, public site)
 * reads brand identity and platform flags from this store.
 *
 * The store is populated:
 *   - On app mount via SettingsHydrator (fetches public settings)
 *   - After login via useLogin (fetches full admin settings)
 *   - After admin changes via useSettings hooks (instant updates, no reload)
 *
 * Keys use snake_case to match the API response shape.
 */
const initialState = {
    brand_name: 'DataSoft',
    brand_badge: 'DS',
    brand_color: '#2563eb', // blue-600
    plan_label: 'Premium Plan',
    logo_path: null,        // Full storage URL, e.g. "/storage/settings/logo.png"
    maintenance_mode: false,
    allow_registration: true,
    default_storage_limit: 100,
};

export const useSettingsStore = create(
    persist(
        (set) => ({
            ...initialState,

            /**
             * Merge a full settings object into the store.
             * Accepts the flat object returned by GET /admin/settings or
             * GET /public/settings.
             */
            setSettings: (settings) =>
                set((state) => ({ ...state, ...settings })),

            /**
             * Update a single setting by key.
             */
            updateSetting: (key, value) =>
                set((state) => ({ [key]: value })),

            /**
             * Merge partial settings (alias of setSettings).
             */
            updateSettings: (settings) =>
                set((state) => ({ ...state, ...settings })),

            /**
             * Load public (unauthenticated) settings into the store.
             * Only affects brand-related keys.
             */
            loadPublicSettings: (settings) =>
                set((state) => ({ ...state, ...settings })),

            /**
             * Load full admin settings into the store.
             */
            loadSettings: (settings) =>
                set((state) => ({ ...state, ...settings })),

            /**
             * Reset to factory defaults.
             */
            resetSettings: () => set(initialState),
        }),
        {
            name: 'cpwb-settings-store',
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
            // Only persist brand-related settings; system flags are
            // fetched fresh after login to avoid stale state.
            partialize: (state) => ({
                brand_name: state.brand_name,
                brand_badge: state.brand_badge,
                brand_color: state.brand_color,
                plan_label: state.plan_label,
                logo_path: state.logo_path,
                allow_registration: state.allow_registration,
            }),
        }
    )
);
