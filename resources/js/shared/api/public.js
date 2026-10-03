import http from './http';

/**
 * Public (unauthenticated) API client for fetching the published company website.
 */
const publicApi = {
    /**
     * Fetch the publicly published company profile website.
     * No authentication required.
     * @param {string|null} slug - optional slug to fetch a specific site
     */
    async getPublicSite(slug = null) {
        const url = slug ? `/public/site?slug=${encodeURIComponent(slug)}` : '/public/site';
        const { data } = await http.get(url);
        return data.data;
    },
};

export default publicApi;
