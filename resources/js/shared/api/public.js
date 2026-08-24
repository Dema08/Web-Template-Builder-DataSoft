import http from './http';

/**
 * Public (unauthenticated) API client for fetching the published company website.
 */
const publicApi = {
    /**
     * Fetch the publicly published company profile website.
     * No authentication required.
     */
    async getPublicSite() {
        const { data } = await http.get('/public/site');
        return data.data;
    },
};

export default publicApi;
