import http from './http';

export const onboardingApi = {
    async getCategories() {
        const response = await http.get('/onboarding/categories');
        return response.data.data;
    },

    async getTemplatesByCategory(categoryId, { skip = 0, take = 20 } = {}) {
        const response = await http.get(`/onboarding/templates/${categoryId}`, {
            params: { skip, take },
        });
        return response.data.data;
    },

    async getTemplate(id) {
        const response = await http.get(`/onboarding/template/${id}`);
        return response.data.data;
    },

    async checkSlug(slug) {
        const response = await http.post('/onboarding/check-slug', { slug });
        return response.data.data;
    },

    async createWebsite(data) {
        const response = await http.post('/onboarding/create', data);
        return response.data.data;
    },
};
