import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    CreditCard,
    Plus,
    Search,
    Edit2,
    Trash2,
    Check,
    X,
    Star,
    Shield,
    Users,
    Globe,
    Layers,
    UploadCloud,
    CheckCircle2,
    XCircle,
    ArrowUpRight,
    Sparkles,
    Settings,
    HelpCircle,
} from 'lucide-react';
import { http } from '@api';
import { Spinner, Alert, Card } from '@shared/components/ui';
import { toast } from '@store';

export default function AdminPricelist() {
    const [search, setSearch] = useState('');
    const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [editingPlan, setEditingPlan] = useState(null);

    // Form state for Plan Modal
    const [formData, setFormData] = useState({
        nama: '',
        slug: '',
        harga: 0,
        deskripsi: '',
        periode: 'bulan',
        maks_domain: 0,
        maks_starter_template: 0,
        bisa_upload_website: false,
        bisa_custom_domain: false,
        fitur: [''],
        is_active: true,
        is_default: false,
        is_popular: false,
        urutan: 1,
    });

    // Form state for User Assignment Modal
    const [assignUserId, setAssignUserId] = useState('');
    const [assignPlanId, setAssignPlanId] = useState('');

    const queryClient = useQueryClient();

    // Fetch all pricelists
    const { data: pricelists, isLoading, isError } = useQuery({
        queryKey: ['admin-pricelists'],
        queryFn: async () => {
            const { data } = await http.get('/admin/pricelists');
            return data.data;
        },
    });

    // Fetch all users for assignment
    const { data: users } = useQuery({
        queryKey: ['admin-users'],
        queryFn: async () => {
            const { data } = await http.get('/admin/users');
            return data.data;
        },
    });

    // Mutations
    const savePlanMutation = useMutation({
        mutationFn: async (payload) => {
            if (editingPlan) {
                const { data } = await http.put(`/admin/pricelists/${editingPlan.id}`, payload);
                return data;
            } else {
                const { data } = await http.post('/admin/pricelists', payload);
                return data;
            }
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(['admin-pricelists']);
            toast.success(data?.message || 'Paket harga berhasil disimpan!', 'Berhasil');
            handleClosePlanModal();
        },
        onError: (error) => {
            const msg = error?.response?.data?.message || 'Gagal menyimpan paket harga.';
            toast.error(msg, 'Gagal Menyimpan');
        },
    });

    const deletePlanMutation = useMutation({
        mutationFn: async (planId) => {
            const { data } = await http.delete(`/admin/pricelists/${planId}`);
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(['admin-pricelists']);
            queryClient.invalidateQueries(['admin-users']);
            toast.success(data?.message || 'Paket harga berhasil dihapus.', 'Dihapus');
        },
        onError: (error) => {
            const msg = error?.response?.data?.message || 'Gagal menghapus paket harga.';
            toast.error(msg, 'Error Hapus');
        },
    });

    const setDefaultMutation = useMutation({
        mutationFn: async (planId) => {
            const { data } = await http.patch(`/admin/pricelists/${planId}/default`);
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(['admin-pricelists']);
            toast.success(data?.message || 'Paket default berhasil diperbarui.', 'Set Default');
        },
        onError: (error) => {
            const msg = error?.response?.data?.message || 'Gagal mengubah paket default.';
            toast.error(msg, 'Error Default');
        },
    });

    const assignUserPlanMutation = useMutation({
        mutationFn: async ({ userId, planId }) => {
            const { data } = await http.patch(`/admin/users/${userId}/plan`, { paket_harga_id: planId });
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(['admin-users']);
            queryClient.invalidateQueries(['admin-pricelists']);
            toast.success(data?.message || 'Paket pengguna berhasil diperbarui!', 'Paket Diperbarui');
            setIsAssignModalOpen(false);
        },
        onError: (error) => {
            const msg = error?.response?.data?.message || 'Gagal memperbarui paket user.';
            toast.error(msg, 'Error Assign');
        },
    });

    // Handlers
    const handleOpenCreateModal = () => {
        setEditingPlan(null);
        setFormData({
            nama: '',
            slug: '',
            harga: 0,
            deskripsi: '',
            periode: 'bulan',
            maks_domain: 0,
            maks_starter_template: 0,
            bisa_upload_website: false,
            bisa_custom_domain: false,
            fitur: ['Akses Blank Template', 'Subdomain Gratis (.datasoft.id)'],
            is_active: true,
            is_default: false,
            is_popular: false,
            urutan: (pricelists?.length || 0) + 1,
        });
        setIsPlanModalOpen(true);
    };

    const handleOpenEditModal = (plan) => {
        setEditingPlan(plan);
        setFormData({
            nama: plan.nama || plan.name || '',
            slug: plan.slug || '',
            harga: plan.price ?? plan.harga ?? 0,
            deskripsi: plan.description || plan.deskripsi || '',
            periode: plan.period || plan.periode || 'bulan',
            maks_domain: plan.max_domains ?? plan.maks_domain ?? 0,
            maks_starter_template: plan.max_starter_templates ?? plan.maks_starter_template ?? 0,
            bisa_upload_website: Boolean(plan.can_upload_website ?? plan.bisa_upload_website),
            bisa_custom_domain: Boolean(plan.can_use_custom_domain ?? plan.bisa_custom_domain),
            fitur: Array.isArray(plan.features) && plan.features.length > 0 ? [...plan.features] : (Array.isArray(plan.fitur) && plan.fitur.length > 0 ? [...plan.fitur] : ['']),
            is_active: Boolean(plan.is_active),
            is_default: Boolean(plan.is_default),
            is_popular: Boolean(plan.is_popular),
            urutan: plan.sort_order ?? plan.urutan ?? 1,
        });
        setIsPlanModalOpen(true);
    };

    const handleClosePlanModal = () => {
        setIsPlanModalOpen(false);
        setEditingPlan(null);
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = [...formData.fitur];
        newFeatures[index] = value;
        setFormData({ ...formData, fitur: newFeatures });
    };

    const handleAddFeature = () => {
        setFormData({ ...formData, fitur: [...formData.fitur, ''] });
    };

    const handleRemoveFeature = (index) => {
        const newFeatures = formData.fitur.filter((_, i) => i !== index);
        setFormData({ ...formData, fitur: newFeatures.length > 0 ? newFeatures : [''] });
    };

    const handleSubmitPlan = (e) => {
        e.preventDefault();
        const cleanedFeatures = formData.fitur.map((f) => f.trim()).filter(Boolean);
        savePlanMutation.mutate({
            ...formData,
            fitur: cleanedFeatures,
        });
    };

    const handleDeletePlan = (plan) => {
        if (confirm(`Apakah Anda yakin ingin menghapus paket harga "${plan.name || plan.nama}"? User yang berada di paket ini akan otomatis dipindahkan ke Paket Default.`)) {
            deletePlanMutation.mutate(plan.id);
        }
    };

    const handleSetDefault = (plan) => {
        if (confirm(`Jadikan paket "${plan.name || plan.nama}" sebagai Paket Default sistem untuk user baru?`)) {
            setDefaultMutation.mutate(plan.id);
        }
    };

    const handleOpenAssignModal = (user = null) => {
        if (user) {
            setAssignUserId(user.id);
            setAssignPlanId(user.plan?.id || '');
        } else {
            setAssignUserId(users?.[0]?.id || '');
            setAssignPlanId(pricelists?.[0]?.id || '');
        }
        setIsAssignModalOpen(true);
    };

    const handleSaveAssignUserPlan = (e) => {
        e.preventDefault();
        if (!assignUserId || !assignPlanId) return;
        assignUserPlanMutation.mutate({ userId: assignUserId, planId: assignPlanId });
    };

    // Filtered pricelists
    const filteredPricelists = pricelists?.filter((p) =>
        (p.nama || p.name || '').toLowerCase().includes(search.toLowerCase()) ||
        (p.slug || '').toLowerCase().includes(search.toLowerCase())
    );

    const totalActivePlans = pricelists?.filter((p) => p.is_active).length || 0;
    const defaultPlanObj = pricelists?.find((p) => p.is_default);

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Page Title & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
                        <CreditCard className="h-3.5 w-3.5" />
                        <span>Pricelist Management</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                        Manajemen Paket Harga
                    </h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Atur paket harga, batasan domain, akses starter template, dan izin upload website untuk setiap level pengguna.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => handleOpenAssignModal()}
                        className="px-4 py-2.5 rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition flex items-center gap-2 shadow-xs"
                    >
                        <Users className="h-4 w-4 text-indigo-600" />
                        <span>Atur Paket User</span>
                    </button>

                    <button
                        type="button"
                        onClick={handleOpenCreateModal}
                        className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold shadow-md shadow-indigo-600/20 transition flex items-center gap-2"
                    >
                        <Plus className="h-4 w-4" />
                        <span>Tambah Paket Harga</span>
                    </button>
                </div>
            </div>

            {/* KPI Metric Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                        <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Total Paket</p>
                        <p className="text-2xl font-black text-[rgb(var(--color-text-primary))]">{pricelists?.length || 0}</p>
                    </div>
                </Card>

                <Card className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Paket Aktif</p>
                        <p className="text-2xl font-black text-[rgb(var(--color-text-primary))]">{totalActivePlans}</p>
                    </div>
                </Card>

                <Card className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                        <Star className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Paket Default</p>
                        <p className="text-base font-extrabold text-[rgb(var(--color-text-primary))] truncate">
                            {defaultPlanObj?.name || defaultPlanObj?.nama || 'Free'}
                        </p>
                    </div>
                </Card>

                <Card className="p-5 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                        <Users className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Total User</p>
                        <p className="text-2xl font-black text-[rgb(var(--color-text-primary))]">{users?.length || 0}</p>
                    </div>
                </Card>
            </div>

            {/* Rules Overview Notice */}
            <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-indigo-900 dark:text-indigo-200">
                <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <div>
                        <span className="font-extrabold">Informasi Batasan Paket:</span>{' '}
                        <span>
                            Pengguna <strong>Free</strong> hanya bisa akses <em>Blank Template & Subdomain</em>. Paket <strong>Harga 1</strong> bisa upload web & max 3 domain. Paket <strong>Harga 2</strong> domain & starter lebih banyak. Paket <strong>Harga 3</strong> serba Unlimited.
                        </span>
                    </div>
                </div>
            </div>

            {/* Pricelist Grid Cards Section */}
            {isLoading ? (
                <div className="p-16 flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            ) : isError ? (
                <Alert variant="error" title="Gagal Memuat Paket Harga">
                    Gagal mengambil daftar paket harga dari server. Silakan muat ulang halaman.
                </Alert>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredPricelists?.map((plan) => {
                        const isDefault = plan.is_default;
                        const isFree = plan.slug === 'free' || plan.price === 0;
                        const maxDomainsLabel = plan.max_domains === -1 ? 'Unlimited' : plan.max_domains === 0 ? '0 (Subdomain)' : `${plan.max_domains} Domain`;
                        const maxTemplatesLabel = plan.max_starter_templates === -1 ? 'Unlimited' : plan.max_starter_templates === 0 ? 'Blank Template Only' : `${plan.max_starter_templates} Starter Templates`;

                        return (
                            <div
                                key={plan.id}
                                className={`relative rounded-3xl border transition-all duration-200 flex flex-col justify-between p-6 bg-[rgb(var(--color-surface))] shadow-lg ${
                                    isDefault
                                        ? 'border-indigo-600 ring-2 ring-indigo-600/20'
                                        : 'border-[rgb(var(--color-border))] hover:border-indigo-300'
                                }`}
                            >
                                {/* Top Badges */}
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                                            isFree
                                                ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                                                : 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300'
                                        }`}>
                                            {plan.slug}
                                        </span>

                                        <div className="flex items-center gap-1.5">
                                            {isDefault && (
                                                <span className="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[10px] font-black flex items-center gap-1">
                                                    <Star className="h-3 w-3 fill-amber-500 text-amber-500" /> Default
                                                </span>
                                            )}
                                            <span className={`h-2.5 w-2.5 rounded-full ${plan.is_active ? 'bg-emerald-500' : 'bg-slate-300'}`} title={plan.is_active ? 'Aktif' : 'Nonaktif'} />
                                        </div>
                                    </div>

                                    {/* Plan Title & Price */}
                                    <h3 className="text-xl font-extrabold text-[rgb(var(--color-text-primary))]">{plan.name || plan.nama}</h3>
                                    <div className="mt-2 flex items-baseline gap-1">
                                        <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                                            {plan.formatted_price}
                                        </span>
                                        {plan.price > 0 && (
                                            <span className="text-xs font-semibold text-[rgb(var(--color-text-tertiary))]">/{plan.period || 'bulan'}</span>
                                        )}
                                    </div>

                                    <hr className="my-4 border-[rgb(var(--color-border))]" />

                                    {/* Parameter Badges / Limits */}
                                    <div className="space-y-2 text-xs">
                                        <div className="flex items-center justify-between p-2 rounded-xl bg-[rgb(var(--color-surface-alt))]">
                                            <span className="text-[rgb(var(--color-text-secondary))] font-medium flex items-center gap-1.5">
                                                <Globe className="h-3.5 w-3.5 text-indigo-500" /> Domain Limit
                                            </span>
                                            <span className="font-extrabold text-[rgb(var(--color-text-primary))]">{maxDomainsLabel}</span>
                                        </div>

                                        <div className="flex items-center justify-between p-2 rounded-xl bg-[rgb(var(--color-surface-alt))]">
                                            <span className="text-[rgb(var(--color-text-secondary))] font-medium flex items-center gap-1.5">
                                                <Layers className="h-3.5 w-3.5 text-indigo-500" /> Starter Templates
                                            </span>
                                            <span className="font-extrabold text-[rgb(var(--color-text-primary))]">{maxTemplatesLabel}</span>
                                        </div>

                                        <div className="flex items-center justify-between p-2 rounded-xl bg-[rgb(var(--color-surface-alt))]">
                                            <span className="text-[rgb(var(--color-text-secondary))] font-medium flex items-center gap-1.5">
                                                <UploadCloud className="h-3.5 w-3.5 text-indigo-500" /> Upload Website
                                            </span>
                                            {plan.can_upload_website ? (
                                                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold flex items-center gap-1">
                                                    <Check className="h-3.5 w-3.5" /> Ya
                                                </span>
                                            ) : (
                                                <span className="text-red-500 font-extrabold flex items-center gap-1">
                                                    <X className="h-3.5 w-3.5" /> Tidak
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between p-2 rounded-xl bg-[rgb(var(--color-surface-alt))]">
                                            <span className="text-[rgb(var(--color-text-secondary))] font-medium flex items-center gap-1.5">
                                                <Users className="h-3.5 w-3.5 text-indigo-500" /> Pengguna Terdaftar
                                            </span>
                                            <span className="font-black text-indigo-600 dark:text-indigo-400">{plan.users_count || 0} user</span>
                                        </div>
                                    </div>

                                    {/* Features Checklist */}
                                    {plan.features && plan.features.length > 0 && (
                                        <div className="mt-4 pt-3 border-t border-[rgb(var(--color-border))]">
                                            <p className="text-[11px] font-extrabold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider mb-2">Fitur Paket:</p>
                                            <ul className="space-y-1.5 text-xs text-[rgb(var(--color-text-secondary))]">
                                                {plan.features.map((feat, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                                        <span className="line-clamp-2">{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Action Buttons */}
                                <div className="mt-6 pt-4 border-t border-[rgb(var(--color-border))] flex items-center justify-between gap-2">
                                    {!isDefault && (
                                        <button
                                            type="button"
                                            onClick={() => handleSetDefault(plan)}
                                            disabled={setDefaultMutation.isPending}
                                            className="p-2 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/40 rounded-xl transition text-xs font-bold flex items-center gap-1"
                                            title="Jadikan paket default"
                                        >
                                            <Star className="h-4 w-4" />
                                        </button>
                                    )}

                                    <div className="flex items-center gap-1 ml-auto">
                                        <button
                                            type="button"
                                            onClick={() => handleOpenEditModal(plan)}
                                            className="p-2 text-[rgb(var(--color-text-tertiary))] hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-xl transition"
                                            title="Edit Paket"
                                        >
                                            <Edit2 className="h-4 w-4" />
                                        </button>

                                        {!isDefault && (
                                            <button
                                                type="button"
                                                onClick={() => handleDeletePlan(plan)}
                                                disabled={deletePlanMutation.isPending}
                                                className="p-2 text-[rgb(var(--color-text-tertiary))] hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition"
                                                title="Hapus Paket"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Add / Edit Plan Modal */}
            {isPlanModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[rgb(var(--color-border))] flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150">
                        {/* Fixed Modal Header */}
                        <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] pb-4 shrink-0">
                            <div className="flex items-center gap-2.5">
                                <CreditCard className="h-6 w-6 text-indigo-600" />
                                <div>
                                    <h3 className="text-lg font-extrabold text-[rgb(var(--color-text-primary))]">
                                        {editingPlan ? 'Edit Paket Harga' : 'Tambah Paket Harga Baru'}
                                    </h3>
                                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">
                                        Konfigurasi harga, batasan domain, dan fitur paket.
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={handleClosePlanModal}
                                className="text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] p-1 rounded-xl hover:bg-[rgb(var(--color-surface-alt))] transition"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Scrollable Form Content */}
                        <form onSubmit={handleSubmitPlan} className="flex flex-col flex-1 min-h-0 pt-5">
                            <div className="overflow-y-auto flex-1 pr-2 space-y-5 ds-scrollbar-thin">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">
                                            Nama Paket <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Contoh: Harga 1 (Starter)"
                                            value={formData.nama}
                                            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                                            className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">
                                            Slug Identitas (URL Key)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Contoh: harga-1"
                                            value={formData.slug}
                                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                            className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">
                                            Harga Nominal (IDR) <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            min="0"
                                            step="1000"
                                            required
                                            value={formData.harga}
                                            onChange={(e) => setFormData({ ...formData, harga: parseFloat(e.target.value) || 0 })}
                                            className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))]"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">
                                            Periode Waktu
                                        </label>
                                        <select
                                            value={formData.periode}
                                            onChange={(e) => setFormData({ ...formData, periode: e.target.value })}
                                            className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))]"
                                        >
                                            <option value="bulan">Bulan (Monthly)</option>
                                            <option value="tahun">Tahun (Yearly)</option>
                                            <option value="selamanya">Selamanya (Forever / Lifetime)</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">
                                            Batas Custom Domain (-1 = Unlimited, 0 = Subdomain Saja)
                                        </label>
                                        <input
                                            type="number"
                                            required
                                            value={formData.maks_domain}
                                            onChange={(e) => setFormData({ ...formData, maks_domain: parseInt(e.target.value) || 0 })}
                                            className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))]"
                                        />
                                        <p className="mt-1 text-[10px] text-[rgb(var(--color-text-tertiary))]">Isi -1 untuk unlimited domain, 0 untuk subdomain saja.</p>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">
                                            Batas Starter Template (-1 = Unlimited, 0 = Blank Saja)
                                        </label>
                                        <input
                                            type="number"
                                            required
                                            value={formData.maks_starter_template}
                                            onChange={(e) => setFormData({ ...formData, maks_starter_template: parseInt(e.target.value) || 0 })}
                                            className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))]"
                                        />
                                        <p className="mt-1 text-[10px] text-[rgb(var(--color-text-tertiary))]">Isi -1 untuk unlimited starter templates, 0 hanya blank template.</p>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">
                                        Deskripsi Singkat Paket
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Contoh: Cocok untuk bisnis berkembang yang siap melipatgandakan visibilitas online."
                                        value={formData.deskripsi}
                                        onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                                        className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))]"
                                    />
                                </div>

                                {/* Toggles */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))]">
                                    <label className="flex items-center justify-between cursor-pointer">
                                        <span className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Izin Upload Website (HTML/Zip)</span>
                                        <input
                                            type="checkbox"
                                            checked={formData.bisa_upload_website}
                                            onChange={(e) => setFormData({ ...formData, bisa_upload_website: e.target.checked })}
                                            className="h-4 w-4 rounded accent-indigo-600"
                                        />
                                    </label>

                                    <label className="flex items-center justify-between cursor-pointer">
                                        <span className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Izin Hubungkan Custom Domain</span>
                                        <input
                                            type="checkbox"
                                            checked={formData.bisa_custom_domain}
                                            onChange={(e) => setFormData({ ...formData, bisa_custom_domain: e.target.checked })}
                                            className="h-4 w-4 rounded accent-indigo-600"
                                        />
                                    </label>

                                    <label className="flex items-center justify-between cursor-pointer">
                                        <span className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Status Paket Aktif</span>
                                        <input
                                            type="checkbox"
                                            checked={formData.is_active}
                                            onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                                            className="h-4 w-4 rounded accent-indigo-600"
                                        />
                                    </label>

                                    <label className="flex items-center justify-between cursor-pointer">
                                        <span className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Jadikan Default Sistem</span>
                                        <input
                                            type="checkbox"
                                            checked={formData.is_default}
                                            onChange={(e) => setFormData({ ...formData, is_default: e.target.checked })}
                                            className="h-4 w-4 rounded accent-indigo-600"
                                        />
                                    </label>

                                    <label className="flex items-center justify-between cursor-pointer sm:col-span-2 pt-2 border-t border-[rgb(var(--color-border))]">
                                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                                            <Sparkles className="h-4 w-4 text-amber-500" /> Tandai Sebagai Paket Terpopuler (Most Popular Highlight)
                                        </span>
                                        <input
                                            type="checkbox"
                                            checked={formData.is_popular}
                                            onChange={(e) => setFormData({ ...formData, is_popular: e.target.checked })}
                                            className="h-4 w-4 rounded accent-indigo-600"
                                        />
                                    </label>
                                </div>

                                {/* Features Input List */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))]">Daftar Fitur (Point Tampilan)</label>
                                        <button
                                            type="button"
                                            onClick={handleAddFeature}
                                            className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                                        >
                                            <Plus className="h-3.5 w-3.5" /> Tambah Poin
                                        </button>
                                    </div>

                                    <div className="space-y-2 pr-1">
                                        {formData.fitur.map((feat, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    placeholder={`Fitur ${idx + 1}`}
                                                    value={feat}
                                                    onChange={(e) => handleFeatureChange(idx, e.target.value)}
                                                    className="w-full px-3 py-2 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))]"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveFeature(idx)}
                                                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-xl"
                                                    title="Hapus Baris"
                                                >
                                                    <X className="h-4 w-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Fixed Modal Footer Actions */}
                            <div className="pt-4 mt-4 flex items-center justify-end gap-3 border-t border-[rgb(var(--color-border))] shrink-0">
                                <button
                                    type="button"
                                    onClick={handleClosePlanModal}
                                    className="px-4 py-2 text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] rounded-xl transition"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={savePlanMutation.isPending}
                                    className="px-6 py-2.5 text-xs font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/20 transition flex items-center gap-2 disabled:opacity-50"
                                >
                                    {savePlanMutation.isPending ? <Spinner size="sm" /> : <Check className="h-4 w-4" />}
                                    <span>Simpan Paket</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Assign User Plan Modal */}
            {isAssignModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] pb-3">
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-indigo-600" />
                                <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))]">Atur Paket Pengguna</h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsAssignModalOpen(false)}
                                className="text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] p-1 rounded-lg hover:bg-[rgb(var(--color-surface-alt))] transition"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveAssignUserPlan} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Pilih User</label>
                                <select
                                    value={assignUserId}
                                    onChange={(e) => {
                                        setAssignUserId(e.target.value);
                                        const selected = users?.find((u) => u.id === parseInt(e.target.value));
                                        if (selected?.plan) setAssignPlanId(selected.plan.id);
                                    }}
                                    className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] font-semibold"
                                >
                                    {users?.map((u) => (
                                        <option key={u.id} value={u.id}>
                                            {u.name} ({u.email}) — Saat ini: {u.plan?.name || u.plan?.nama || 'Free'}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Pilih Paket Target</label>
                                <select
                                    value={assignPlanId}
                                    onChange={(e) => setAssignPlanId(e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] font-semibold"
                                >
                                    {pricelists?.map((p) => (
                                        <option key={p.id} value={p.id}>
                                            {p.name || p.nama} ({p.formatted_price}) — {p.max_domains === -1 ? 'Unlimited' : `${p.max_domains} Domain`}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[rgb(var(--color-border))]">
                                <button
                                    type="button"
                                    onClick={() => setIsAssignModalOpen(false)}
                                    className="px-4 py-2 text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] rounded-xl transition"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={assignUserPlanMutation.isPending}
                                    className="px-5 py-2 text-xs font-extrabold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/20 transition flex items-center gap-1.5 disabled:opacity-50"
                                >
                                    {assignUserPlanMutation.isPending ? <Spinner size="sm" /> : <Check className="h-4 w-4" />}
                                    <span>Simpan Perubahan Paket</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
