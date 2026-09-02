import http from './http';

/**
 * Billing API Client
 */
const billingApi = {
    /**
     * Get active plan & subscription info for the current user.
     * GET /api/v1/billing/current
     */
    async getCurrentPlan() {
        const { data } = await http.get('/billing/current');
        return data.data;
    },

    /**
     * Initiate checkout transaction and get Midtrans Snap token.
     * POST /api/v1/billing/checkout
     * @param {number} pricelistId
     */
    async checkout(pricelistId) {
        const { data } = await http.post('/billing/checkout', {
            paket_harga_id: pricelistId,
        });
        return data;
    },

    /**
     * Get user transaction history.
     * GET /api/v1/billing/history
     * @param {number} page
     */
    async getHistory(page = 1) {
        const { data } = await http.get(`/billing/history?page=${page}`);
        return data.data;
    },

    /**
     * Get admin transaction monitoring & metrics.
     * GET /api/v1/admin/transactions
     * @param {Object} params
     */
    async getAdminTransactions(params = {}) {
        const queryParams = new URLSearchParams(params).toString();
        const { data } = await http.get(`/admin/transactions?${queryParams}`);
        return data.data;
    },
};

export default billingApi;
