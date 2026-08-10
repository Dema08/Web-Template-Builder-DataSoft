import http from './http';

/**
 * Dashboard API client.
 */
const dashboardApi = {
    /**
     * Fetch dashboard summary data (website status, stats).
     */
    async getDashboard(params = {}) {
        const { data } = await http.get('/dashboard', { params });
        return data.data;
    },
};

export default dashboardApi;
