import http from './http';

/**
 * Website Builder API client.
 * Manages the user's single company profile website.
 */
const websiteApi = {
    /**
     * Get the user's website (settings + status).
     */
    async getWebsite() {
        const { data } = await http.get('/website');
        return data.data;
    },

    /**
     * Get the saved HTML/CSS/JS content of the website.
     */
    async getContent() {
        const { data } = await http.get('/website/content');
        return data.data;
    },

    /**
     * Save the GrapesJS-generated content of the website.
     * @param {Object} content - { html, css, js, components, styles, assets }
     */
    async saveContent(content) {
        const { data } = await http.post('/website/content', content);
        return data.data;
    },

    /**
     * Update website settings (name, description, logo, SEO, etc).
     * @param {Object} settings
     */
    async updateSettings(settings) {
        const { data } = await http.patch('/website/settings', settings);
        return data.data;
    },

    /**
     * Publish the website to be publicly accessible.
     */
    async publish() {
        const { data } = await http.post('/website/publish');
        return data.data;
    },

    /**
     * Upload a media asset (image/video) for the website.
     * @param {File} file
     */
    async uploadAsset(file) {
        const formData = new FormData();
        formData.append('file', file);

        const { data } = await http.post('/website/assets', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return data.data;
    },

    // --- Admin-only ---

    /**
     * Get all platform websites (admin).
     */
    async adminGetAll(params = {}) {
        const { data } = await http.get('/admin/websites', { params });
        return data.data;
    },

    /**
     * Update a website's status (admin).
     */
    async adminUpdateStatus(id, status) {
        const { data } = await http.patch(`/admin/websites/${id}/status`, { status });
        return data.data;
    },

    /**
     * Delete a website (admin).
     */
    async adminDelete(id) {
        const { data } = await http.delete(`/admin/websites/${id}`);
        return data.data;
    },
};

export default websiteApi;
