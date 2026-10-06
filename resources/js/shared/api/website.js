import http from './http';

const getSelectedWebsiteId = () => new URLSearchParams(window.location.search).get('website_id');
const withSelectedWebsite = (payload = {}) => {
    const websiteId = getSelectedWebsiteId();
    return websiteId ? { ...payload, website_id: websiteId } : payload;
};
const selectedWebsiteParams = () => {
    const websiteId = getSelectedWebsiteId();
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
    async getWebsite() {
        const { data } = await http.get('/website', selectedWebsiteParams());
        return data.data;
    },

    async getWebsites() {
        const { data } = await http.get('/website/list');
        return data.data;
    },

    async getQuota() {
        const { data } = await http.get('/website/quota', selectedWebsiteParams());
        return data.data;
    },

    async checkSlug(slug, websiteId = undefined, ignoreCurrentWebsite = true) {
        const targetWebsiteId = websiteId === undefined ? getSelectedWebsiteId() : websiteId;
        const { data } = await http.get('/website/check-slug', {
            params: {
                ...(targetWebsiteId ? { website_id: targetWebsiteId } : {}),
                ignore_current_website: ignoreCurrentWebsite ? 1 : 0,
                slug,
            },
        });
        return data.data;
    },

    /**
     * Get the saved HTML/CSS/JS content of the website.
     */
    async getContent() {
        const { data } = await http.get('/website/content', selectedWebsiteParams());
        return data.data;
    },

    /**
     * Save the GrapesJS-generated content of the website.
     * @param {Object} content - { html, css, js, components, styles, assets }
     */
    async saveContent(content) {
        const { data } = await http.post('/website/content', withSelectedWebsite(content));
        return data.data;
    },

    /**
     * Update website settings (name, description, logo, SEO, etc).
     * @param {Object} settings
     */
    async updateSettings(settings) {
        const { data } = await http.patch('/website/settings', withSelectedWebsite(settings));
        return data.data;
    },

    /**
     * Publish the website to be publicly accessible.
     */
    async publish(payload = {}) {
        const { data } = await http.post('/website/publish', withSelectedWebsite(payload));
        return data.data;
    },

    async deleteWebsite(id) {
        const { data } = await http.delete(`/website/${id}`);
        return data.data;
    },

    /**
     * Upload a media asset (image/video) for the website.
     * Streaming multipart — ringan untuk video 50MB, kualitas terjaga
     * (tanpa base64, tanpa re-encode). Mendukung progress + cancel.
     * @param {File} file
     * @param {{ onProgress?: (pct:number)=>void, signal?: AbortSignal, kind?: string }} opts
     */
    async uploadAsset(file, opts = {}) {
        const formData = new FormData();
        formData.append('file', file);
        if (opts.kind) formData.append('kind', opts.kind);

        const { data } = await http.post('/website/assets', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            signal: opts.signal,
            onUploadProgress: opts.onProgress
                ? (evt) => {
                    const total = evt.total || file.size || 1;
                    opts.onProgress(Math.min(99, Math.round((evt.loaded / total) * 100)));
                }
                : undefined,
            timeout: 10 * 60 * 1000,
            maxBodyLength: Infinity,
            maxContentLength: Infinity,
        });
        if (opts.onProgress) opts.onProgress(100);
        return data.data;
    },

    async uploadWebsiteThumbnail(id, file) {
        const formData = new FormData();
        formData.append('thumbnail', file);

        const { data } = await http.post(`/website/${id}/thumbnail`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return data.data;
    },

    async deleteWebsiteThumbnail(id) {
        const { data } = await http.delete(`/website/${id}/thumbnail`);
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
    async adminDelete(id, reason) {
        const { data } = await http.delete(`/admin/websites/${id}`, {
            data: { reason },
        });
        return data.data;
    },
};

export default websiteApi;
