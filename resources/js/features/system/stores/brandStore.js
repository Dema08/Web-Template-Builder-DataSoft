import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Brand Zustand store.
 * Manages the platform brand identity (name, badge text, logo color).
 * Persisted to localStorage so Admin changes are reflected instantly
 * across both Admin and User panels without requiring a page reload.
 */
const initialState = {
    brandName: 'DataSoft',
    brandBadge: 'DS',
    brandColor: '#2563eb', // blue-600
    logoUrl: null,         // Custom logo URL (null = use text badge)
    planLabel: 'Premium Plan',
};

export const useBrandStore = create(
    persist(
        (set) => ({
            ...initialState,

            /**
             * Update one or more brand settings at once.
             */
            setBrand: (settings) => set((state) => ({ ...state, ...settings })),

            /**
             * Reset brand to factory defaults.
             */
            resetBrand: () => set(initialState),
        }),
        {
            name: 'cpwb-brand-store',
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
                brandName: state.brandName,
                brandBadge: state.brandBadge,
                brandColor: state.brandColor,
                logoUrl: state.logoUrl,
                planLabel: state.planLabel,
            }),
        }
    )
);
