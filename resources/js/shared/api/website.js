import http from './http';

const getSelectedWebsiteId = () => new URLSearchParams(window.location.search).get('website_id');

const resolveWebsiteId = (explicitId) => explicitId || getSelectedWebsiteId();

const withWebsiteId = (payload = {}, explicitId) => {
    const websiteId = resolveWebsiteId(explicitId || payload?.website_id);
    return websiteId ? { ...payload, website_id: websiteId } : payload;
};

const websiteParams = (explicitId) => {
    const websiteId = resolveWebsiteId(explicitId);
    return websiteId ? { params: { website_id: websiteId } } : {};
};

/**
 * Website Builder API client.
 * Manages the selected company profile website.
 */
const websiteApi = {
    /**
     * Get the user's website (settings + status).
     */
    async getWebsite(websiteId) {
        const { data } = await http.get('/website', websiteParams(websiteId));
        return data.data;
    },

    async getWebsites() {
        const { data } = await http.get('/website/list');
        return data.data;
    },

    async getQuota(websiteId) {
        const { data } = await http.get('/website/quota', websiteParams(websiteId));
        return data.data;
    },

    async checkSlug(slug, websiteId) {
        const { data } = await http.get('/website/check-slug', {
            params: { ...websiteParams(websiteId).params, slug },
        });
        return data.data;
    },

    /**
     * Get the saved HTML/CSS/JS content of the website.
     */
    async getContent(websiteId) {
        const { data } = await http.get('/website/content', websiteParams(websiteId));
        return data.data;
    },

    /**
     * Save the GrapesJS-generated content of the website.
     * @param {Object} content - { html, css, js, components, styles, assets }
     * @param {number|string} [websiteId]
     */
    async saveContent(content, websiteId) {
        const { data } = await http.post('/website/content', withWebsiteId(content, websiteId));
        return data.data;
    },

    /**
     * Update website settings (name, description, logo, SEO, etc).
     * @param {Object} settings
     * @param {number|string} [websiteId]
     */
    async updateSettings(settings, websiteId) {
        const { data } = await http.patch('/website/settings', withWebsiteId(settings, websiteId));
        return data.data;
    },

    /**
     * Publish the website to be publicly accessible.
     */
    async publish(payload = {}, websiteId) {
        const { data } = await http.post('/website/publish', withWebsiteId(payload, websiteId));
        return data.data;
    },

    async deleteWebsite(id) {
        const { data } = await http.delete(`/website/${id}`);
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
