import http from './http';

const categoryApi = {
  getAll: () => http.get('/admin/categories'),

  getById: (id) => http.get(`/admin/categories/${id}`),

  create: (data) => http.post('/admin/categories', data),

  update: (id, data) => http.put(`/admin/categories/${id}`, data),

  delete: (id) => http.delete(`/admin/categories/${id}`),

  getAllTemplates: (categoryId) => http.get(`/admin/categories/${categoryId}/templates`),

  createTemplate: (categoryId, data) => http.post(`/admin/categories/${categoryId}/templates`, data),

  updateTemplate: (id, data) => http.put(`/admin/templates/${id}`, data),

  deleteTemplate: ({ categoryId, id }) => http.delete(`/admin/categories/${categoryId}/templates/${id}`),
};

export default categoryApi;
