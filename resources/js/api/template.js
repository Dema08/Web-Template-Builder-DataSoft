import http from './http';

const templateApi = {
  // List templates with filters
  getAll: (params = {}) => http.get('/admin/templates', { params }),

  // Get single template
  getById: (id) => http.get(`/admin/templates/${id}`),

  // Create template
  create: (data) => http.post('/admin/templates', data),

  // Update template
  update: (id, data) => http.put(`/admin/templates/${id}`, data),

  // Delete template (soft delete)
  delete: (id) => http.delete(`/admin/templates/${id}`),

  // Force delete template (permanent)
  forceDelete: (id) => http.delete(`/admin/templates/${id}/force`),

  // Restore soft deleted template
  restore: (id) => http.patch(`/admin/templates/${id}/restore`),

  // Publish template
  publish: (id) => http.patch(`/admin/templates/${id}/publish`),

  // Archive template
  archive: (id) => http.patch(`/admin/templates/${id}/archive`),

  // Duplicate template
  duplicate: (id) => http.post(`/admin/templates/${id}/duplicate`),

  // Toggle featured status
  toggleFeatured: (id) => http.patch(`/admin/templates/${id}/featured`),

  // Get trashed templates
  getTrashed: (params = {}) => http.get('/admin/templates/trashed', { params }),

  // Upload thumbnail
  uploadThumbnail: (id, formData) =>
    http.post(`/admin/templates/${id}/thumbnail`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  // Upload preview image
  uploadPreview: (id, formData) =>
    http.post(`/admin/templates/${id}/preview`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
};

export default templateApi;
