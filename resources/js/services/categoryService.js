import { categoryApi } from '@api';

export const categoryService = {
  getAll: async () => {
    const response = await categoryApi.getAll();
    return response.data.data;
  },

  getById: async (id) => {
    const response = await categoryApi.getById(id);
    return response.data.data;
  },

  create: async (data) => {
    const response = await categoryApi.create(data);
    return response.data.data;
  },

  update: async (id, data) => {
    const response = await categoryApi.update(id, data);
    return response.data.data;
  },

  delete: async (id) => {
    const response = await categoryApi.delete(id);
    return response.data;
  },

  getTemplates: async (categoryId) => {
    const response = await categoryApi.getAllTemplates(categoryId);
    return response.data.data;
  },

  createTemplate: async (categoryId, data) => {
    const response = await categoryApi.createTemplate(categoryId, data);
    return response.data.data;
  },

  updateTemplate: async (id, data) => {
    const response = await categoryApi.updateTemplate(id, data);
    return response.data.data;
  },

  deleteTemplate: async ({ categoryId, id }) => {
    const response = await categoryApi.deleteTemplate(categoryId, id);
    return response.data;
  },
};
