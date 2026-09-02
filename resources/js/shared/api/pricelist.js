import http from './http';

/**
 * Pricelist API client.
 * Public endpoint requires no authentication.
 * Admin endpoints require an authenticated admin/superadmin token.
 */
const pricelistApi = {
    /**
     * Fetch all active plans for public display on the landing page.
     * GET /api/v1/public/pricelists
     */
    async getPublic() {
        const { data } = await http.get('/public/pricelists');
        return data;
    },

    /**
     * Fetch all plans (including inactive) for admin management.
     * GET /api/v1/admin/pricelists
     */
    async getAll() {
        const { data } = await http.get('/admin/pricelists');
        return data;
    },

    /**
     * Create a new plan.
     * POST /api/v1/admin/pricelists
     * @param {Object} payload
     */
    async create(payload) {
        const { data } = await http.post('/admin/pricelists', payload);
        return data;
    },

    /**
     * Update an existing plan.
     * PUT /api/v1/admin/pricelists/:id
     * @param {number} id
     * @param {Object} payload
     */
    async update(id, payload) {
        const { data } = await http.put(`/admin/pricelists/${id}`, payload);
        return data;
    },

    /**
     * Delete a plan.
     * DELETE /api/v1/admin/pricelists/:id
     * @param {number} id
     */
    async destroy(id) {
        const { data } = await http.delete(`/admin/pricelists/${id}`);
        return data;
    },
};

export default pricelistApi;
