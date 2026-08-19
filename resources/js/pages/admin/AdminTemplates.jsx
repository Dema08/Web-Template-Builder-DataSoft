import { useState, useEffect } from 'react';
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
    Layout,
    CheckCircle2,
    FileEdit,
    Ban,
    Globe,
} from 'lucide-react';
import { Card } from '@components/ui';
import { toast } from '@store';
import { templateApi } from '@api';
import { categoryService } from '@services';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import ThumbnailUploader from '@/components/ui/ThumbnailUploader';

function TemplateCardThumbnail({ template }) {
    const [imgError, setImgError] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const imageUrl = template.thumbnail;

    useEffect(() => {
        setImgError(false);
        setImgLoaded(false);
    }, [template?.id, template?.thumbnail]);

    if (imageUrl && !imgError) {
        return (
            <div className="w-full h-full relative bg-slate-100">
                {!imgLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                        <div className="h-8 w-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
                <img
                    src={imageUrl}
                    alt={template.name}
                    onError={(e) => {
                        console.error('Failed to load template image:', imageUrl, e);
                        setImgError(true);
                    }}
                    onLoad={() => {
                        setImgLoaded(true);
                    }}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    style={{ opacity: imgLoaded ? 1 : 0 }}
                />
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50">
            <Layout className="h-10 w-10 mb-2 opacity-40" />
            <span className="text-xs font-medium">No Preview Available</span>
        </div>
    );
}

const STATUS_OPTIONS = [
    { value: '', label: 'All Status' },
    { value: 'draft', label: 'Draft' },
    { value: 'published', label: 'Published' },
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
    const [deleteConfirmTemplate, setDeleteConfirmTemplate] = useState(null);
    const [actionDropdown, setActionDropdown] = useState(null);
    const [thumbnailValue, setThumbnailValue] = useState(''); // for ThumbnailUploader (URL or blob)
    const [thumbnailFile, setThumbnailFile] = useState(null);  // File object if user uploads
    const queryClient = useQueryClient();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.template-action-menu')) {
                setActionDropdown(null);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

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
            per_page: 50,
        }).then(res => res.data?.data ?? res.data),
    });

    const templates = Array.isArray(data)
        ? data
        : (Array.isArray(data?.data) ? data.data : []);

    // Debug: Log template data to verify thumbnail URLs
    useEffect(() => {
        if (templates.length > 0) {
            console.log('=== Template Data Debug ===');
            templates.forEach((tpl, index) => {
                console.log(`Template ${index + 1}:`, {
                    id: tpl.id,
                    name: tpl.name,
                    thumbnail: tpl.thumbnail,
                    preview_image: tpl.preview_image,
                });
            });
        }
    }, [templates]);

    const createMutation = useMutation({
        mutationFn: templateApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            queryClient.invalidateQueries(['admin-categories']);
            toast.success('Template created successfully', 'Success');
            handleCloseModal();
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Failed to create template', 'Error');
        },
    });

    const updateMutation = useMutation({
        mutationFn: async ({ id, data, thumbFile }) => {
            const res = await templateApi.update(id, data);
            // If a new file was selected, upload it after updating
            if (thumbFile) {
                const fd = new FormData();
                fd.append('thumbnail', thumbFile);
                await templateApi.uploadThumbnail(id, fd);
            }
            return res;
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            queryClient.invalidateQueries(['admin-categories']);
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
            queryClient.invalidateQueries(['admin-all-templates']);
            queryClient.invalidateQueries(['admin-categories']);
            toast.success('Template deleted successfully', 'Success');
            setActionDropdown(null);
            setDeleteConfirmTemplate(null);
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Failed to delete template', 'Error');
        },
    });

    const { data: allTemplatesData } = useQuery({
        queryKey: ['admin-all-templates'],
        queryFn: () => templateApi.getAll({ per_page: 500 }).then(res => res.data?.data ?? res.data),
    });

    const allTemplatesList = Array.isArray(allTemplatesData)
        ? allTemplatesData
        : (Array.isArray(allTemplatesData?.data) ? allTemplatesData.data : []);

    const publishMutation = useMutation({
        mutationFn: templateApi.publish,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            queryClient.invalidateQueries(['admin-categories']);
            toast.success('Template published successfully', 'Success');
            setActionDropdown(null);
        },
    });

    const archiveMutation = useMutation({
        mutationFn: templateApi.archive,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            queryClient.invalidateQueries(['admin-categories']);
            toast.success('Template archived successfully', 'Success');
            setActionDropdown(null);
        },
    });

    const duplicateMutation = useMutation({
        mutationFn: templateApi.duplicate,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            queryClient.invalidateQueries(['admin-categories']);
            toast.success('Template duplicated successfully', 'Success');
            setActionDropdown(null);
        },
    });

    const featuredMutation = useMutation({
        mutationFn: templateApi.toggleFeatured,
        onSuccess: () => {
            queryClient.invalidateQueries(['admin-templates']);
            queryClient.invalidateQueries(['admin-categories']);
            setActionDropdown(null);
        },
    });

    const handleOpenModal = (template = null) => {
        if (template) {
            setEditingTemplate(template);
            // Normalize thumbnail: API returns full URL, but DB needs relative path
            let thumbUrl = '';
            if (template.thumbnail) {
                if (template.thumbnail.startsWith('http')) {
                    // Extract relative path from full URL (e.g., http://localhost/storage/templates/... → templates/...)
                    const url = new URL(template.thumbnail);
                    thumbUrl = url.pathname.replace(/^\/storage\//, '');
                } else if (template.thumbnail.startsWith('/storage/')) {
                    // Remove leading /storage/ to get relative path
                    thumbUrl = template.thumbnail.replace(/^\/storage\//, '');
                } else {
                    // Already a relative path
                    thumbUrl = template.thumbnail;
                }
            }
            // Set thumbnail preview for the uploader component
            const previewUrl = thumbUrl ? `/storage/${thumbUrl}` : '';
            setThumbnailValue(previewUrl);
            setThumbnailFile(null);
            reset({
                industry_category_id: template.industry_category_id || '',
                code: template.code || '',
                name: template.name,
                slug: template.slug || '',
                description: template.description || '',
                thumbnail: thumbUrl,
                preview_image: template.preview_image || '',
                version: template.version || '1.0.0',
                sort_order: template.sort_order || 0,
                is_featured: template.is_featured || false,
                status: template.status || 'draft',
            });
        } else {
            setEditingTemplate(null);
            setThumbnailValue('');
            setThumbnailFile(null);
            reset({
                industry_category_id: '',
                code: '',
                name: '',
                slug: '',
                description: '',
                thumbnail: '',
                preview_image: '',
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
        setThumbnailValue('');
        setThumbnailFile(null);
        reset();
    };

    const onSubmit = (formData) => {
        // Use thumbnailValue from uploader (URL or blob preview — we'll send file separately)
        const thumbForPayload = thumbnailFile ? undefined : (thumbnailValue.startsWith('blob:') ? undefined : thumbnailValue);
        const payload = {
            ...formData,
            industry_category_id: parseInt(formData.industry_category_id) || formData.industry_category_id,
            sort_order: parseInt(formData.sort_order) || 0,
            is_featured: Boolean(formData.is_featured),
            // Only include thumbnail in payload if it's a plain URL (not a file upload)
            ...(thumbForPayload !== undefined ? { thumbnail: thumbForPayload } : {}),
        };
        delete payload.draft_json;
        delete payload.published_json;

        if (editingTemplate) {
            updateMutation.mutate({ id: editingTemplate.id, data: payload, thumbFile: thumbnailFile || null });
        } else {
            createMutation.mutate(payload);
        }
    };

    const { data: categoriesData = [] } = useQuery({
        queryKey: ['admin-categories'],
        queryFn: categoryService.getAll,
    });

    const categories = categoriesData.map(cat => {
        const countFromAllTemplates = allTemplatesList.filter(t =>
            String(t.industry_category_id) === String(cat.id) ||
            String(t.industry_category?.id) === String(cat.id)
        ).length;
        return {
            id: cat.id,
            name: cat.name,
            template_count: countFromAllTemplates || (typeof cat.template_count === 'number' ? cat.template_count : 0),
        };
    });

    const updateStatusMutation = useMutation({
        mutationFn: ({ id, status, template }) => {
            if (status === 'published') {
                if (template && (!template.description?.trim() || !template.thumbnail?.trim())) {
                    toast.error('Deskripsi dan Thumbnail Wajib Diisi terlebih dahulu!', 'Data Tidak Lengkap');
                    handleOpenModal(template);
                    throw new Error('Description and thumbnail required');
                }
                return templateApi.publish(id);
            }
            return templateApi.update(id, { status });
        },
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries(['admin-templates']);
            queryClient.invalidateQueries(['admin-categories']);
            const labels = {
                published: 'published',
                draft: 'moved to draft',
                disabled: 'disabled',
            };
            toast.success(`Template status updated to ${labels[variables.status] || variables.status}`, 'Success');
            setActionDropdown(null);
        },
        onError: (error) => {
            if (error.message !== 'Description and thumbnail required') {
                toast.error(error.response?.data?.message || 'Failed to update template status', 'Error');
            }
        },
    });

    const getStatusColor = (status) => {
        const colors = {
            draft: 'bg-slate-100 text-slate-700 border border-slate-300',
            published: 'bg-emerald-100 text-emerald-700 border border-emerald-300',
            archived: 'bg-amber-100 text-amber-700 border border-amber-300',
            disabled: 'bg-red-100 text-red-700 border border-red-300',
        };
        return colors[status] || 'bg-slate-100 text-slate-700 border border-slate-300';
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

            {/* Search and Filters */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row items-stretch gap-4">
                    {/* Search Bar */}
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
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="h-[52px] px-4 bg-slate-50/50 border-2 border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all cursor-pointer hover:border-slate-300"
                        >
                            <option value="">All Categories</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name} ({cat.template_count})
                                </option>
                            ))}
                        </select>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="h-[52px] px-4 bg-slate-50/50 border-2 border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 focus:bg-white transition-all cursor-pointer hover:border-slate-300"
                        >
                            {STATUS_OPTIONS.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>

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
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {templates.map((tpl) => (
                        <Card
                            key={tpl.id}
                            className={`border flex flex-col justify-between group transition-all duration-200 bg-white relative rounded-3xl ${
                                actionDropdown === tpl.id
                                    ? 'z-40 ring-2 ring-indigo-500/40 shadow-xl border-indigo-200'
                                    : 'border-slate-200/80 hover:shadow-lg z-0'
                            }`}
                        >
                            <div className="relative h-[220px] overflow-hidden rounded-t-[24px]">
                                <TemplateCardThumbnail template={tpl} />

                                {tpl.is_featured && (
                                    <div className="absolute top-3 left-3 z-20">
                                        <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-extrabold uppercase backdrop-blur-md flex items-center gap-1 shadow-xs">
                                            <Star className="h-3 w-3 fill-current" />
                                            Featured
                                        </span>
                                    </div>
                                )}
                                <div className="absolute top-3 right-3 z-20">
                                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase shadow-xs ${getStatusColor(tpl.status)}`}>
                                        {tpl.status_label || tpl.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-4 space-y-3">
                                <div>
                                    <h3 className="text-sm font-extrabold text-slate-900 truncate group-hover:text-indigo-600 transition">{tpl.name}</h3>
                                    <p className="text-xs font-bold text-indigo-600 mt-0.5">{tpl.code}</p>
                                    {tpl.industry_category && (
                                        <p className="text-[11px] text-slate-500 mt-1 font-medium">{tpl.industry_category.name}</p>
                                    )}
                                </div>

                                {tpl.description && (
                                    <p className="text-xs text-slate-600 line-clamp-2">{tpl.description}</p>
                                )}

                                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-[11px] font-semibold text-slate-400">
                                        v{tpl.version}
                                    </span>

                                    <div className="flex items-center gap-1">
                                        <button
                                            type="button"
                                            onClick={() => window.open(`/admin/templates/builder/${tpl.id}/preview`, '_blank')}
                                            className="p-2 text-slate-400 hover:text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all duration-150 active:scale-95"
                                            title="Live Preview in New Tab"
                                        >
                                            <Eye className="h-4 w-4" />
                                        </button>

                                        <div className="relative template-action-menu">
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setActionDropdown(actionDropdown === tpl.id ? null : tpl.id);
                                                }}
                                                className={`p-2 rounded-xl transition-all duration-150 flex items-center justify-center ${
                                                    actionDropdown === tpl.id
                                                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                                                        : 'text-slate-400 hover:text-indigo-600 hover:bg-indigo-50/80 active:scale-95'
                                                }`}
                                                title="Opsi Template"
                                            >
                                                <MoreVertical className="h-4 w-4 stroke-[2.5]" />
                                            </button>

                                            {actionDropdown === tpl.id && (
                                                <div
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="absolute right-0 bottom-full mb-2.5 w-60 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-indigo-950/15 border border-slate-200/90 z-50 p-2 transform origin-bottom-right ds-animate-scale-in space-y-1"
                                                >
                                                    {/* Action Header */}
                                                    <div className="px-3 py-1.5 flex items-center justify-between border-b border-slate-100">
                                                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Opsi Template</span>
                                                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">#{tpl.id}</span>
                                                    </div>

                                                    {/* Section 1: Main Actions */}
                                                    <div className="space-y-0.5 py-1">
                                                        <button
                                                            type="button"
                                                            onClick={() => { navigate(`/admin/templates/builder/${tpl.id}`); setActionDropdown(null); }}
                                                            className="w-full text-left px-3 py-2 text-xs font-bold text-slate-800 hover:bg-indigo-600 hover:text-white rounded-xl flex items-center justify-between group transition-all duration-150"
                                                        >
                                                            <div className="flex items-center gap-2.5">
                                                                <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                                                    <Layout className="h-3.5 w-3.5" />
                                                                </div>
                                                                <span>Open in Builder</span>
                                                            </div>
                                                            <span className="text-[10px] opacity-0 group-hover:opacity-100 font-semibold transition-opacity">Edit →</span>
                                                        </button>

                                                        <button
                                                            type="button"
                                                            onClick={() => { handleOpenModal(tpl); setActionDropdown(null); }}
                                                            className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-xl flex items-center gap-2.5 group transition-all duration-150"
                                                        >
                                                            <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-slate-200 transition-colors">
                                                                <Edit2 className="h-3.5 w-3.5" />
                                                            </div>
                                                            <span>Edit Details</span>
                                                        </button>

                                                        <button
                                                            type="button"
                                                            onClick={() => { duplicateMutation.mutate(tpl.id); setActionDropdown(null); }}
                                                            className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-xl flex items-center gap-2.5 group transition-all duration-150"
                                                        >
                                                            <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-slate-200 transition-colors">
                                                                <Copy className="h-3.5 w-3.5" />
                                                            </div>
                                                            <span>Duplicate</span>
                                                        </button>
                                                    </div>

                                                    {/* Section 2: Status Management */}
                                                    <div className="border-t border-slate-100 pt-1 space-y-0.5">
                                                        <div className="px-3 py-1 text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                                                            Ubah Status
                                                        </div>

                                                        {tpl.status !== 'published' && (
                                                            <button
                                                                type="button"
                                                                onClick={() => updateStatusMutation.mutate({ id: tpl.id, status: 'published', template: tpl })}
                                                                className="w-full text-left px-3 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-xl flex items-center justify-between group transition-all duration-150"
                                                            >
                                                                <div className="flex items-center gap-2.5">
                                                                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                                                    </div>
                                                                    <span>Publish (Aktifkan)</span>
                                                                </div>
                                                            </button>
                                                        )}

                                                        {tpl.status !== 'draft' && (
                                                            <button
                                                                type="button"
                                                                onClick={() => updateStatusMutation.mutate({ id: tpl.id, status: 'draft', template: tpl })}
                                                                className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-amber-500 hover:text-white rounded-xl flex items-center justify-between group transition-all duration-150"
                                                            >
                                                                <div className="flex items-center gap-2.5">
                                                                    <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                                                        <FileEdit className="h-3.5 w-3.5" />
                                                                    </div>
                                                                    <span>Set to Draft</span>
                                                                </div>
                                                            </button>
                                                        )}

                                                        {tpl.status !== 'disabled' && (
                                                            <button
                                                                type="button"
                                                                onClick={() => updateStatusMutation.mutate({ id: tpl.id, status: 'disabled', template: tpl })}
                                                                className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-700 hover:text-white rounded-xl flex items-center justify-between group transition-all duration-150"
                                                            >
                                                                <div className="flex items-center gap-2.5">
                                                                    <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                                                        <Ban className="h-3.5 w-3.5" />
                                                                    </div>
                                                                    <span>Disable (Sembunyikan)</span>
                                                                </div>
                                                            </button>
                                                        )}
                                                    </div>

                                                    {/* Section 3: Danger Action */}
                                                    <div className="border-t border-slate-100 pt-1">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setDeleteConfirmTemplate(tpl);
                                                                setActionDropdown(null);
                                                            }}
                                                            className="w-full text-left px-3 py-2 text-xs font-bold text-rose-600 hover:bg-rose-600 hover:text-white rounded-xl flex items-center justify-between group transition-all duration-150"
                                                        >
                                                            <div className="flex items-center gap-2.5">
                                                                <div className="p-1.5 rounded-lg bg-rose-50 text-rose-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                                                    <Trash2 className="h-3.5 w-3.5" />
                                                                </div>
                                                                <span>Delete Template</span>
                                                            </div>
                                                        </button>
                                                    </div>
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
                                <label className="block text-xs font-bold text-slate-700 mb-1.5">Description <span className="text-red-500">*</span></label>
                                <textarea
                                    {...register('description', { required: 'Deskripsi template wajib diisi' })}
                                    rows={3}
                                    placeholder="Deskripsi singkat template ini..."
                                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input resize-none ${errors.description ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                                />
                                {errors.description && <p className="text-red-500 text-[10px] mt-1">{errors.description.message}</p>}
                            </div>

                            <ThumbnailUploader
                                label="Thumbnail Template"
                                required
                                value={thumbnailValue}
                                onChange={(url) => {
                                    setThumbnailValue(url);
                                    // Sync back to react-hook-form so validation sees it
                                    if (!url.startsWith('blob:')) {
                                        // it's a URL - keep in form
                                    }
                                }}
                                onFileSelect={(file) => setThumbnailFile(file)}
                                error={errors.thumbnail?.message}
                            />



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
                                        <option value="disabled">Disabled</option>
                                    </select>
                                </div>
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
                                    src={previewTemplate.thumbnail || '/placeholder-template.jpg'}
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

            {/* Delete Confirmation Modal */}
            {deleteConfirmTemplate && (
                <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-5 ds-animate-scale-in">
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                            <div className="p-3 bg-red-50 text-red-600 rounded-2xl shrink-0">
                                <Trash2 className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-base font-extrabold text-slate-900">Konfirmasi Hapus Template</h3>
                                <p className="text-xs text-slate-500 mt-0.5">Tindakan ini permanen dan tidak dapat dibatalkan</p>
                            </div>
                        </div>

                        <div className="bg-red-50/60 border border-red-100 rounded-2xl p-4 text-xs text-slate-700 space-y-2">
                            <p className="font-semibold text-slate-900">
                                Apakah Anda yakin ingin menghapus template <span className="text-red-600 font-extrabold">"{deleteConfirmTemplate.name}"</span>?
                            </p>
                            {deleteConfirmTemplate.code && (
                                <p className="text-[11px] text-slate-500">
                                    Kode: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-slate-700">{deleteConfirmTemplate.code}</code>
                                </p>
                            )}
                            <p className="text-[11px] text-red-600 font-medium pt-1 border-t border-red-100">
                                ⚠️ Seluruh data draf, konfigurasi layout, dan riwayat template ini akan dihapus secara permanen dari database.
                            </p>
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={() => setDeleteConfirmTemplate(null)}
                                disabled={deleteMutation.isPending}
                                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition disabled:opacity-50"
                            >
                                Batal
                            </button>
                            <button
                                type="button"
                                disabled={deleteMutation.isPending}
                                onClick={() => deleteMutation.mutate(deleteConfirmTemplate.id)}
                                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold rounded-xl shadow-md shadow-red-600/20 transition flex items-center gap-2 disabled:opacity-50"
                            >
                                {deleteMutation.isPending ? (
                                    <><Loader2 className="h-4 w-4 animate-spin" /> Menghapus...</>
                                ) : (
                                    <><Trash2 className="h-4 w-4" /> Ya, Hapus Template</>
                                )}
                            </button>
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