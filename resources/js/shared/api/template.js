import http from './http';

const templateApi = {
  // Get public published templates for landing page
  getPublic: (params = {}) => http.get('/public/templates', { params }),

  // Get single public published template for live preview
  getPublicById: (id) => http.get(`/public/templates/${id}`),

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

  // ── Template Gallery (auth) — daftar + flag akses ──
  // GET /api/v1/templates → { data: [...is_premium, can_use, is_activated], quota }
  listWithAccess: (params = {}) => http.get('/templates', { params }),

  // Starter Template Quota & Access Control
  getQuota: () => http.get('/subscription/template-quota'),
  checkAccess: (id) => http.get(`/templates/${id}/check-access`),
  apply: (id) => http.post(`/templates/${id}/apply`),
  activate: (id) => http.post(`/templates/${id}/activate`),
  deactivate: (id) => http.delete(`/templates/${id}/deactivate`),
  useTemplate: (id) => http.post(`/templates/${id}/use`),
};

export default templateApi;
