import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Plus,
    Search,
    Edit2,
    Trash2,
    Star,
    Archive,
    Copy,
    Eye,
    MoreVertical,
    X,
    Loader2,
} from 'lucide-react';
import { Card } from '@components/ui';
import { toast } from '@store';
import { templateApi } from '@api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

const STATUS_OPTIONS = [
    { value: '', label: 'All Status' },
    { value: 'draft', label: 'Draft' },
    { value: 'published', label: 'Published' },
    { value: 'archived', label: 'Archived' },
    { value: 'disabled', label: 'Disabled' },
];

export default function AdminTemplates() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingTemplate, setEditingTemplate] = useState(null);
    const [previewTemplate, setPreviewTemplate] = useState(null);
    const [actionDropdown, setActionDropdown] = useState(null);
    const queryClient = useQueryClient();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            industry_category_id: '',
            code: '',
            name: '',
            slug: '',
            description: '',
            thumbnail: '',
            preview_image: '',
            draft_json: '',
            published_json: '',
            version: '1.0.0',
            sort_order: 0,
            is_featured: false,
            status: 'draft',
        }
    });

    const { data, isLoading } = useQuery({
        queryKey: ['admin-templates', { search: searchQuery, status: statusFilter, category: categoryFilter }],
        queryFn: () => templateApi.getAll({
            search: searchQuery || undefined,
            status: statusFilter || undefined,
            industry_category_id: categoryFilter || undefined,
            per_page: 12,
        }).then(res => res.data.data),
    });

    const templates = data?.data ?? [];

    const createMutation = useMutation({
        mutationFn: templateApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            toast.success('Template created successfully', 'Success');
            handleCloseModal();
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Failed to create template', 'Error');
        },
    });

    const updateMutation = useMutation({
        mutationFn: ({ id, data }) => templateApi.update(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            toast.success('Template updated successfully', 'Success');
            handleCloseModal();
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Failed to update template', 'Error');
        },
    });

    const deleteMutation = useMutation({
        mutationFn: templateApi.delete,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            toast.success('Template deleted successfully', 'Success');
            setActionDropdown(null);
        },
    });

    const publishMutation = useMutation({
        mutationFn: templateApi.publish,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            toast.success('Template published successfully', 'Success');
            setActionDropdown(null);
        },
    });

    const archiveMutation = useMutation({
        mutationFn: templateApi.archive,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            toast.success('Template archived successfully', 'Success');
            setActionDropdown(null);
        },
    });

    const duplicateMutation = useMutation({
        mutationFn: templateApi.duplicate,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            toast.success('Template duplicated successfully', 'Success');
            setActionDropdown(null);
        },
    });

    const featuredMutation = useMutation({
        mutationFn: templateApi.toggleFeatured,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            setActionDropdown(null);
        },
    });

    const handleOpenModal = (template = null) => {
        if (template) {
            setEditingTemplate(template);
            reset({
                industry_category_id: template.industry_category_id || '',
                code: template.code || '',
                name: template.name,
                slug: template.slug || '',
                description: template.description || '',
                thumbnail: template.thumbnail || '',
                preview_image: template.preview_image || '',
                draft_json: typeof template.draft_json === 'object' ? JSON.stringify(template.draft_json, null, 2) : template.draft_json || '',
                published_json: typeof template.published_json === 'object' ? JSON.stringify(template.published_json, null, 2) : template.published_json || '',
                version: template.version || '1.0.0',
                sort_order: template.sort_order || 0,
                is_featured: template.is_featured || false,
                status: template.status || 'draft',
            });
        } else {
            setEditingTemplate(null);
            reset({
                industry_category_id: '',
                code: '',
                name: '',
                slug: '',
                description: '',
                thumbnail: '',
                preview_image: '',
                draft_json: '',
                published_json: '',
                version: '1.0.0',
                sort_order: 0,
                is_featured: false,
                status: 'draft',
            });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingTemplate(null);
        reset();
    };

    const onSubmit = (formData) => {
        const payload = {
            ...formData,
            industry_category_id: parseInt(formData.industry_category_id) || formData.industry_category_id,
            sort_order: parseInt(formData.sort_order) || 0,
            is_featured: Boolean(formData.is_featured),
            draft_json: formData.draft_json ? JSON.parse(formData.draft_json) : null,
            published_json: formData.published_json ? JSON.parse(formData.published_json) : null,
        };

        if (editingTemplate) {
            updateMutation.mutate({ id: editingTemplate.id, data: payload });
        } else {
            createMutation.mutate(payload);
        }
    };

    const getStatusColor = (status) => {
        const colors = {
            draft: 'bg-gray-100 text-gray-700',
            published: 'bg-emerald-100 text-emerald-700',
            archived: 'bg-amber-100 text-amber-700',
            disabled: 'bg-red-100 text-red-700',
        };
        return colors[status] || 'bg-gray-100 text-gray-700';
    };

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
                        <Star className="h-3.5 w-3.5" />
                        <span>Template Manager</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Templates</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Create, upload, and update default corporate website templates for DataSoft users.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => navigate('/admin/templates/builder/create')}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm shadow-md shadow-indigo-600/20 transition-all"
                >
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>New Template</span>
                </button>
            </div>

            {/* Search and Filters - Modern Premium Design */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row items-stretch gap-4">
                    {/* Search Bar - Primary Focus (45-55% width) */}
                    <div className="relative flex-1 lg:max-w-[55%]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search templates by name, code, or description..."
                            className="w-full h-[52px] pl-12 pr-4 bg-slate-50/50 border-2 border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all"
                        />
                    </div>

                    {/* Filters & Stats */}
                    <div className="flex items-center gap-3">
                        {/* Category Filter */}
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="h-[52px] px-4 bg-slate-50/50 border-2 border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all cursor-pointer hover:border-slate-300"
                        >
                            <option value="">All Categories</option>
                            {/* Categories will be populated from API */}
                        </select>

                        {/* Status Filter */}
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="h-[52px] px-4 bg-slate-50/50 border-2 border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all cursor-pointer hover:border-slate-300"
                        >
                            {STATUS_OPTIONS.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>

                        {/* Active Templates Stats Card */}
                        <div className="hidden sm:flex items-center gap-3 h-[52px] px-5 bg-gradient-to-br from-indigo-50 to-indigo-50/50 border-2 border-indigo-100 rounded-xl">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider leading-tight">Active</span>
                                <span className="text-lg font-extrabold text-indigo-700 leading-tight">{templates.length}</span>
                            </div>
                            <div className="h-8 w-px bg-indigo-200"></div>
                            <Star className="h-5 w-5 text-indigo-500" fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Template Grid */}
            {isLoading ? (
                <div className="flex items-center justify-center py-20">
                    <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {templates.map((tpl) => (
                        <Card
                            key={tpl.id}
                            className="border border-slate-200/80 overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all duration-200"
                        >
                            <div className="relative h-44 bg-slate-100 overflow-hidden border-b border-slate-100">
                                <img
                                    src={tpl.thumbnail || '/placeholder-template.jpg'}
                                    alt={tpl.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                />
                                {tpl.is_featured && (
                                    <div className="absolute top-3 left-3">
                                        <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-extrabold uppercase backdrop-blur-md flex items-center gap-1">
                                            <Star className="h-3 w-3 fill-current" />
                                            Featured
                                        </span>
                                    </div>
                                )}
                                <div className="absolute top-3 right-3">
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${getStatusColor(tpl.status)}`}>
                                        {tpl.status_label}
                                    </span>
                                </div>
                            </div>

                            <div className="p-4 space-y-3">
                                <div>
                                    <h3 className="text-sm font-extrabold text-slate-900 truncate group-hover:text-indigo-600 transition">{tpl.name}</h3>
                                    <p className="text-xs font-bold text-indigo-600 mt-0.5">{tpl.code}</p>
                                    {tpl.industry_category && (
                                        <p className="text-[11px] text-slate-500 mt-1">{tpl.industry_category.name}</p>
                                    )}
                                </div>

                                {tpl.description && (
                                    <p className="text-xs text-slate-600 line-clamp-2">{tpl.description}</p>
                                )}

                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-[11px] text-slate-500">
                                        v{tpl.version}
                                    </span>

                                    <div className="flex items-center gap-1">
                                        <button
                                            type="button"
                                            onClick={() => setPreviewTemplate(tpl)}
                                            className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
                                            title="Preview"
                                        >
                                            <Eye className="h-4 w-4" />
                                        </button>

                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={() => setActionDropdown(actionDropdown === tpl.id ? null : tpl.id)}
                                                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
                                            >
                                                <MoreVertical className="h-4 w-4" />
                                            </button>

                                            {actionDropdown === tpl.id && (
                                                <div className="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-slate-200 z-10 py-1">
                                                    <button
                                                        type="button"
                                                        onClick={() => { handleOpenModal(tpl); setActionDropdown(null); }}
                                                        className="w-full text-left px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                                    >
                                                        <Edit2 className="h-3.5 w-3.5" />
                                                        Edit
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => { duplicateMutation.mutate(tpl.id); setActionDropdown(null); }}
                                                        className="w-full text-left px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                                    >
                                                        <Copy className="h-3.5 w-3.5" />
                                                        Duplicate
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => { featuredMutation.mutate(tpl.id); setActionDropdown(null); }}
                                                        className="w-full text-left px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                                    >
                                                        <Star className="h-3.5 w-3.5" />
                                                        {tpl.is_featured ? 'Unfeature' : 'Feature'}
                                                    </button>
                                                    {tpl.status !== 'published' && (
                                                        <button
                                                            type="button"
                                                            onClick={() => { publishMutation.mutate(tpl.id); setActionDropdown(null); }}
                                                            className="w-full text-left px-4 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-50 flex items-center gap-2"
                                                        >
                                                            <Eye className="h-3.5 w-3.5" />
                                                            Publish
                                                        </button>
                                                    )}
                                                    {tpl.status !== 'archived' && (
                                                        <button
                                                            type="button"
                                                            onClick={() => { archiveMutation.mutate(tpl.id); setActionDropdown(null); }}
                                                            className="w-full text-left px-4 py-2 text-xs font-bold text-amber-700 hover:bg-amber-50 flex items-center gap-2"
                                                        >
                                                            <Archive className="h-3.5 w-3.5" />
                                                            Archive
                                                        </button>
                                                    )}
                                                    <hr className="my-1" />
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            if (confirm(`Delete template "${tpl.name}"?`)) {
                                                                deleteMutation.mutate(tpl.id);
                                                            }
                                                        }}
                                                        className="w-full text-left px-4 py-2 text-xs font-bold text-red-700 hover:bg-red-50 flex items-center gap-2"
                                                    >
                                                        <Trash2 className="h-3.5 w-3.5" />
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}

            {/* Create/Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 space-y-5 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                            <h3 className="text-base font-extrabold text-slate-900">
                                {editingTemplate ? 'Edit Template' : 'Add New Template'}
                            </h3>
                            <button
                                type="button"
                                onClick={handleCloseModal}
                                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Template Code</label>
                                    <input
                                        type="text"
                                        {...register('code')}
                                        placeholder="Auto-generated if empty"
                                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Version</label>
                                    <input
                                        type="text"
                                        {...register('version')}
                                        placeholder="1.0.0"
                                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Template Name *</label>
                                <input
                                    type="text"
                                    {...register('name', { required: 'Template name is required' })}
                                    placeholder="e.g. DataSoft Corporate"
                                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                />
                                {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Slug</label>
                                <input
                                    type="text"
                                    {...register('slug')}
                                    placeholder="Auto-generated from name"
                                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Description</label>
                                <textarea
                                    {...register('description')}
                                    rows={3}
                                    placeholder="Template description..."
                                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Thumbnail URL</label>
                                    <input
                                        type="text"
                                        {...register('thumbnail')}
                                        placeholder="https://..."
                                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Preview Image URL</label>
                                    <input
                                        type="text"
                                        {...register('preview_image')}
                                        placeholder="https://..."
                                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Draft JSON</label>
                                <textarea
                                    {...register('draft_json')}
                                    rows={4}
                                    placeholder='{"sections": [...]}'
                                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input resize-none font-mono"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Sort Order</label>
                                    <input
                                        type="number"
                                        {...register('sort_order')}
                                        min="0"
                                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Status</label>
                                    <select
                                        {...register('status')}
                                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                                    >
                                        <option value="draft">Draft</option>
                                        <option value="published">Published</option>
                                        <option value="archived">Archived</option>
                                        <option value="disabled">Disabled</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="is_featured"
                                    {...register('is_featured')}
                                    className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="is_featured" className="text-xs font-bold text-slate-700">
                                    Featured Template
                                </label>
                            </div>

                            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={createMutation.isPending || updateMutation.isPending}
                                    className="px-5 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/20 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    {(createMutation.isPending || updateMutation.isPending) && (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    )}
                                    {editingTemplate ? 'Update Template' : 'Create Template'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Preview Modal */}
            {previewTemplate && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-4xl w-full p-6 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                            <h3 className="text-base font-extrabold text-slate-900">Template Preview</h3>
                            <button
                                type="button"
                                onClick={() => setPreviewTemplate(null)}
                                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <img
                                    src={previewTemplate.preview_image || previewTemplate.thumbnail || '/placeholder-template.jpg'}
                                    alt={previewTemplate.name}
                                    className="w-full h-64 object-cover rounded-xl border border-slate-200"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">Name</h4>
                                    <p className="text-sm font-bold text-slate-900">{previewTemplate.name}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">Code</h4>
                                    <p className="text-sm font-mono text-slate-900">{previewTemplate.code}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">Status</h4>
                                    <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${getStatusColor(previewTemplate.status)}`}>
                                        {previewTemplate.status_label}
                                    </span>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">Category</h4>
                                    <p className="text-sm text-slate-900">{previewTemplate.industry_category?.name || 'N/A'}</p>
                                </div>
                            </div>

                            {previewTemplate.description && (
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">Description</h4>
                                    <p className="text-sm text-slate-700">{previewTemplate.description}</p>
                                </div>
                            )}

                            {previewTemplate.draft_json && (
                                <div>
                                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Draft JSON Structure</h4>
                                    <pre className="bg-slate-50 p-4 rounded-xl text-xs overflow-x-auto border border-slate-200">
                                        {JSON.stringify(previewTemplate.draft_json, null, 2)}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Click outside to close dropdown */}
            {actionDropdown && (
                <div className="fixed inset-0 z-0" onClick={() => setActionDropdown(null)} />
            )}
        </div>
    );
}