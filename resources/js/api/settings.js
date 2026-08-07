import http from './http';

/**
 * Settings API client.
 *
 * Endpoints:
 *   GET   /admin/settings      — flat settings object (auth required)
 *   PUT   /admin/settings      — update settings by key (auth required, admin)
 *   POST  /admin/settings/logo — upload logo image (auth required, admin)
 *   DELETE /admin/settings/logo— remove logo image (auth required, admin)
 *   GET   /public/settings     — public brand settings (no auth)
 */
const settingsApi = {
    /**
     * Fetch all settings as a flat object (admin, authenticated).
     * @returns {Promise<Object>} e.g. { brand_name, brand_badge, ... }
     */
    async getSettings() {
        const { data } = await http.get('/admin/settings');
        return data.data;
    },

    /**
     * Fetch public settings (brand identity only, no auth required).
     * @returns {Promise<Object>} e.g. { brand_name, brand_badge, ... }
     */
    async getPublicSettings() {
        const { data } = await http.get('/public/settings');
        return data.data;
    },

    /**
     * Update one or more settings by key.
     * @param {Object} payload - flat object, e.g. { brand_name: "NewCo" }
     */
    async updateSettings(payload) {
        const { data } = await http.put('/admin/settings', payload);
        return data.data;
    },

    /**
     * Upload a new logo image file.
     * @param {File} file
     * @returns {Promise<Object>} e.g. { logo_path: "/storage/settings/logo.png" }
     */
    async uploadLogo(file) {
        const formData = new FormData();
        formData.append('file', file);
        const { data } = await http.post('/admin/settings/logo', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return data.data;
    },

    /**
     * Remove the current logo image.
     * @returns {Promise<Object>} e.g. { logo_path: null }
     */
    async removeLogo() {
        const { data } = await http.delete('/admin/settings/logo');
        return data.data;
    },
};

export default settingsApi;
