import http from './http';

/**
 * Dashboard API client.
 */
const dashboardApi = {
    /**
     * Fetch dashboard summary data (website status, stats).
     */
    async getDashboard() {
        const { data } = await http.get('/dashboard');
        return data.data;
    },
};

export default dashboardApi;
