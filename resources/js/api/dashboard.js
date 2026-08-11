import http from './http';

/**
 * Dashboard API client.
 */
const dashboardApi = {
    /**
     * Fetch dashboard summary data for regular users.
     * Protected by maintenance middleware.
     */
    async getDashboard(params = {}) {
        const { data } = await http.get('/dashboard', { params });
        return data.data;
    },

    /**
     * Fetch dashboard summary data for admin.
     * Lives under /admin/* — NOT gated by maintenance middleware,
     * so admins can always access their dashboard even during maintenance.
     */
    async getAdminDashboard(params = {}) {
        const { data } = await http.get('/admin/dashboard-summary', { params });
        return data.data;
    },
};

export default dashboardApi;
