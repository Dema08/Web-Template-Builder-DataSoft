import { websiteApi } from '@api';
import { useWebsiteStore } from '@store';

/**
 * Website service — facade over the website API and website store.
 */
export const websiteService = {
    async getWebsite() {
        const website = await websiteApi.getWebsite();
        useWebsiteStore.getState().setWebsite(website);
        return website;
    },

    async saveContent(content) {
        const saved = await websiteApi.saveContent(content);
        useWebsiteStore.getState().markSaved();
        return saved;
    },

    markDirty() {
        useWebsiteStore.getState().markDirty();
    },

    isDirty() {
        return useWebsiteStore.getState().isDirty;
    },
};
