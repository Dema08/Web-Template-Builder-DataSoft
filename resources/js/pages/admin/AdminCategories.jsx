import { useState } from 'react';
import { Layers, Plus, Trash2, Edit2, Shield, Search, X, ChevronUp, ChevronDown, Eye, EyeOff, FileText } from 'lucide-react';
import { Card } from '@components/ui';
import { toast } from '@store';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { categoryService } from '@services';

export default function AdminCategories() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const [templateForm, setTemplateForm] = useState({
    name: '',
    slug: '',
    description: '',
    thumbnail: '',
    sort_order: 0,
    is_active: true,
  });

  const queryClient = useQueryClient();

  const { data: categories = [], isLoading, error } = useQuery({
    queryKey: ['admin', 'categories'],
    queryFn: categoryService.getAll,
  });

  const { data: templates = [] } = useQuery({
    queryKey: ['admin', 'templates', selectedCategoryId],
    queryFn: async () => {
      if (!selectedCategoryId) return [];
      const response = await categoryService.getTemplates(selectedCategoryId);
      return response.data.data || [];
    },
    enabled: !!selectedCategoryId && !!expandedCategory,
  });

  const createMutation = useMutation({
    mutationFn: categoryService.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'categories']);
      toast.success('Category created successfully', 'Success');
      setIsAddOpen(false);
      resetForm();
    },
    onError: () => {
      toast.error('Failed to create category', 'Error');
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => categoryService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'categories']);
      toast.success('Category updated successfully', 'Success');
      setEditingCategory(null);
      resetForm();
    },
    onError: () => {
      toast.error('Failed to update category', 'Error');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: categoryService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'categories']);
      toast.success('Category deleted successfully', 'Success');
    },
    onError: () => {
      toast.error('Failed to delete category', 'Error');
    },
  });

  const createTemplateMutation = useMutation({
    mutationFn: ({ categoryId, data }) => categoryService.createTemplate(categoryId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'templates']);
      queryClient.invalidateQueries(['admin', 'categories']);
      toast.success('Template created successfully', 'Success');
      setShowTemplateModal(false);
      resetTemplateForm();
    },
    onError: () => {
      toast.error('Failed to create template', 'Error');
    },
  });

  const updateTemplateMutation = useMutation({
    mutationFn: ({ id, data }) => categoryService.updateTemplate(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'templates']);
      toast.success('Template updated successfully', 'Success');
      setShowTemplateModal(false);
      setEditingTemplate(null);
      resetTemplateForm();
    },
    onError: () => {
      toast.error('Failed to update template', 'Error');
    },
  });

  const deleteTemplateMutation = useMutation({
    mutationFn: ({ categoryId, id }) => categoryService.deleteTemplate(categoryId, id),
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'templates']);
      queryClient.invalidateQueries(['admin', 'categories']);
      toast.success('Template deleted successfully', 'Success');
    },
    onError: () => {
      toast.error('Failed to delete template', 'Error');
    },
  });

  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    description: '',
    icon: '',
    color: '',
    sort_order: 0,
    is_active: true,
  });

  const resetForm = () => {
    setFormData({
      name: '',
      slug: '',
      description: '',
      icon: '',
      color: '',
      sort_order: 0,
      is_active: true,
    });
  };

  const resetTemplateForm = () => {
    setTemplateForm({
      name: '',
      slug: '',
      description: '',
      thumbnail: '',
      sort_order: 0,
      is_active: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingCategory) {
      updateMutation.mutate({ id: editingCategory.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description || '',
      icon: category.icon || '',
      color: category.color || '',
      sort_order: category.sort_order || 0,
      is_active: category.is_active,
    });
    setIsAddOpen(true);
  };

  const handleDelete = (id, name) => {
    if (confirm(`Delete category "${name}"? This action cannot be undone.`)) {
      deleteMutation.mutate(id);
    }
  };

  const handleClose = () => {
    setIsAddOpen(false);
    setEditingCategory(null);
    resetForm();
  };

  const handleNameChange = (name) => {
    setFormData({
      ...formData,
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
    });
  };

  const moveSortOrder = (index, direction) => {
    const newCategories = [...categories];
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= newCategories.length) return;

    [newCategories[index], newCategories[newIndex]] = [newCategories[newIndex], newCategories[index]];

    const updates = newCategories.map((cat, idx) => ({
      id: cat.id,
      sort_order: idx,
    }));

    Promise.all(
      updates.map((update) =>
        categoryService.update(update.id, { ...newCategories.find(c => c.id === update.id), sort_order: update.sort_order })
      )
    ).then(() => {
      queryClient.invalidateQueries(['admin', 'categories']);
      toast.success('Sort order updated', 'Success');
    });
  };

  const toggleExpandCategory = (categoryId) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryId);
      setSelectedCategoryId(categoryId);
    }
  };

  const handleAddTemplate = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setEditingTemplate(null);
    resetTemplateForm();
    setShowTemplateModal(true);
  };

  const handleEditTemplate = (template) => {
    setEditingTemplate(template);
    setTemplateForm({
      name: template.name,
      slug: template.slug,
      description: template.description || '',
      thumbnail: template.thumbnail || '',
      sort_order: template.sort_order || 0,
      is_active: template.is_active,
    });
    setShowTemplateModal(true);
  };

  const handleTemplateSubmit = (e) => {
    e.preventDefault();

    if (editingTemplate) {
      updateTemplateMutation.mutate({ id: editingTemplate.id, data: templateForm });
    } else {
      createTemplateMutation.mutate({ categoryId: selectedCategoryId, data: templateForm });
    }
  };

  const handleTemplateNameChange = (name) => {
    setTemplateForm({
      ...templateForm,
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
    });
  };

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <div className="p-6 sm:p-8 max-w-7xl mx-auto">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
          Failed to load categories. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
            <Shield className="h-3.5 w-3.5" />
            <span>Category Taxonomy</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Industry Categories</h1>
          <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
            Manage industry taxonomies and template categorization rules.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            resetForm();
            setEditingCategory(null);
            setIsAddOpen(true);
          }}
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm shadow-md transition-all"
        >
          <Plus className="h-4 w-4 stroke-[3]" />
          <span>Add Category</span>
        </button>
      </div>

      {/* Search and Filters */}
      <Card className="overflow-hidden">
        <div className="p-5 border-b border-[rgb(var(--color-border))]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-sm text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
            />
          </div>
        </div>

        {isLoading ? (
          <div className="p-8 text-center text-[rgb(var(--color-text-secondary))]">Loading categories...</div>
        ) : filteredCategories.length === 0 ? (
          <div className="p-8 text-center text-[rgb(var(--color-text-secondary))]">No categories found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[rgb(var(--color-surface-alt))] border-b border-[rgb(var(--color-border))]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Order</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Slug</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Description</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Icon</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Color</th>
                  <th className="px-4 py-3 text-center text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-right text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgb(var(--color-border))]">
                {filteredCategories.map((cat, index) => (
                  <>
                    <tr key={cat.id} className="hover:bg-[rgb(var(--color-surface-alt))]/80 transition">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => moveSortOrder(index, -1)}
                            disabled={index === 0}
                            className="p-1 text-[rgb(var(--color-text-tertiary))] hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <ChevronUp className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => moveSortOrder(index, 1)}
                            disabled={index === filteredCategories.length - 1}
                            className="p-1 text-[rgb(var(--color-text-tertiary))] hover:text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </button>
                          <span className="text-sm font-bold text-[rgb(var(--color-text-primary))] w-6 text-center">{cat.sort_order}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-10 w-10 rounded-xl flex items-center justify-center font-bold text-white shadow-xs"
                            style={{ backgroundColor: cat.color || '#6366f1' }}
                          >
                            {cat.icon ? <span className="text-lg">{cat.icon}</span> : <Layers className="h-5 w-5" />}
                          </div>
                          <div>
                            <p className="font-extrabold text-[rgb(var(--color-text-primary))] text-sm">{cat.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <code className="text-xs bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] px-2 py-1 rounded text-[rgb(var(--color-text-primary))] font-mono">{cat.slug}</code>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm text-[rgb(var(--color-text-secondary))] max-w-xs truncate">{cat.description || '-'}</p>
                      </td>
                      <td className="px-4 py-4 text-sm text-[rgb(var(--color-text-secondary))]">{cat.icon || '-'}</td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="h-6 w-6 rounded-md border border-[rgb(var(--color-border))]"
                            style={{ backgroundColor: cat.color || '#6366f1' }}
                          />
                          <span className="text-sm text-[rgb(var(--color-text-secondary))] font-mono">{cat.color || 'default'}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-center">
                        <button
                          onClick={() => categoryService.update(cat.id, { ...cat, is_active: !cat.is_active }).then(() => queryClient.invalidateQueries(['admin', 'categories']))}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition ${
                            cat.is_active
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100'
                              : 'bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-border))]'
                          }`}
                        >
                          {cat.is_active ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                          {cat.is_active ? 'Active' : 'Inactive'}
                        </button>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => toggleExpandCategory(cat.id)}
                            className={`p-2 rounded-lg transition ${
                              expandedCategory === cat.id
                                ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40'
                                : 'text-[rgb(var(--color-text-tertiary))] hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30'
                            }`}
                            title="Manage Templates"
                          >
                            <FileText className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleEdit(cat)}
                            className="p-2 text-[rgb(var(--color-text-tertiary))] hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg transition"
                            title="Edit"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(cat.id, cat.name)}
                            disabled={deleteMutation.isPending}
                            className="p-2 text-[rgb(var(--color-text-tertiary))] hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition disabled:opacity-50"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {expandedCategory === cat.id && (
                      <tr key={`${cat.id}-templates`}>
                        <td colSpan="8" className="p-0">
                          <div className="border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface-alt))]">
                            <div className="p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="text-sm font-bold text-[rgb(var(--color-text-primary))]">Templates in {cat.name}</h4>
                                <button
                                  onClick={() => handleAddTemplate(cat.id)}
                                  className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition"
                                >
                                  <Plus className="h-3 w-3" />
                                  Add Template
                                </button>
                              </div>
                              {templates.length === 0 ? (
                                <p className="text-xs text-[rgb(var(--color-text-secondary))] text-center py-4">No templates yet. Add your first template.</p>
                              ) : (
                                <div className="space-y-2">
                                  {templates.map((template) => (
                                    <div key={template.id} className="bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-lg p-3 flex items-center justify-between">
                                      <div>
                                        <p className="text-sm font-bold text-[rgb(var(--color-text-primary))]">{template.name}</p>
                                        <p className="text-xs text-[rgb(var(--color-text-secondary))]">Slug: {template.slug} • Usage: {template.usage_count}x</p>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <button
                                          onClick={() => categoryService.update(template.id, { ...template, is_active: !template.is_active }).then(() => queryClient.invalidateQueries(['admin', 'templates']))}
                                          className={`px-2.5 py-1 rounded-full text-xs font-bold transition ${
                                            template.is_active
                                              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
                                              : 'bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-secondary))]'
                                          }`}
                                        >
                                          {template.is_active ? 'Active' : 'Inactive'}
                                        </button>
                                        <button
                                          onClick={() => handleEditTemplate(template)}
                                          className="p-1.5 text-[rgb(var(--color-text-tertiary))] hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg transition"
                                        >
                                          <Edit2 className="h-3.5 w-3.5" />
                                        </button>
                                        <button
                                          onClick={() => {
                                            if (confirm(`Delete template "${template.name}"?`)) {
                                              deleteTemplateMutation.mutate({ categoryId: expandedCategory, id: template.id });
                                            }
                                          }}
                                          className="p-1.5 text-[rgb(var(--color-text-tertiary))] hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition"
                                        >
                                          <Trash2 className="h-3.5 w-3.5" />
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Category Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-4 border border-[rgb(var(--color-border))] animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))]">
                {editingCategory ? 'Edit Category' : 'Add New Category'}
              </h3>
              <button
                onClick={handleClose}
                className="p-1 text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] rounded-lg hover:bg-[rgb(var(--color-surface-alt))] transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Category Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Real Estate & Hospitality"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Slug</label>
                <input
                  type="text"
                  placeholder="auto-generated-from-name"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Description</label>
                <textarea
                  rows="3"
                  placeholder="Category description..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Icon (emoji or text)</label>
                  <input
                    type="text"
                    placeholder="e.g. 🏢"
                    value={formData.icon}
                    onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Color (hex)</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={formData.color || '#6366f1'}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      className="h-10 w-14 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface-alt))] cursor-pointer"
                    />
                    <input
                      type="text"
                      placeholder="#6366f1"
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      className="flex-1 px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Sort Order</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.sort_order}
                    onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                    className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Status</label>
                  <select
                    value={formData.is_active ? 'true' : 'false'}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.value === 'true' })}
                    className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-[rgb(var(--color-border))]">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={createMutation.isPending || updateMutation.isPending}
                  className="px-5 py-2 text-xs font-bold bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {editingCategory ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Template Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-4 border border-[rgb(var(--color-border))] animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))]">
                {editingTemplate ? 'Edit Template' : 'Add New Template'}
              </h3>
              <button
                onClick={() => {
                  setShowTemplateModal(false);
                  setEditingTemplate(null);
                  resetTemplateForm();
                }}
                className="p-1 text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] rounded-lg hover:bg-[rgb(var(--color-surface-alt))] transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleTemplateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Template Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Landing Page Pro"
                  value={templateForm.name}
                  onChange={(e) => handleTemplateNameChange(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Slug</label>
                <input
                  type="text"
                  placeholder="auto-generated-from-name"
                  value={templateForm.slug}
                  onChange={(e) => setTemplateForm({ ...templateForm, slug: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Description</label>
                <textarea
                  rows="3"
                  placeholder="Template description..."
                  value={templateForm.description}
                  onChange={(e) => setTemplateForm({ ...templateForm, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Thumbnail URL</label>
                <input
                  type="text"
                  placeholder="https://example.com/thumbnail.jpg"
                  value={templateForm.thumbnail}
                  onChange={(e) => setTemplateForm({ ...templateForm, thumbnail: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Sort Order</label>
                  <input
                    type="number"
                    min="0"
                    value={templateForm.sort_order}
                    onChange={(e) => setTemplateForm({ ...templateForm, sort_order: parseInt(e.target.value) || 0 })}
                    className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Status</label>
                  <select
                    value={templateForm.is_active ? 'true' : 'false'}
                    onChange={(e) => setTemplateForm({ ...templateForm, is_active: e.target.value === 'true' })}
                    className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-[rgb(var(--color-border))]">
                <button
                  type="button"
                  onClick={() => {
                    setShowTemplateModal(false);
                    setEditingTemplate(null);
                    resetTemplateForm();
                  }}
                  className="px-4 py-2 text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={createTemplateMutation.isPending || updateTemplateMutation.isPending}
                  className="px-5 py-2 text-xs font-bold bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {editingTemplate ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}