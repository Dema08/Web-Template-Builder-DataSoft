import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Users, Search, Shield, ShieldCheck, Edit2, Trash2, X, Check, UserCheck, Clock, CreditCard } from 'lucide-react';
import { http } from '@api';
import { Spinner, Alert, Card, ConfirmModal } from '@shared/components/ui';
import { toast } from '@store';

export default function AdminUsers() {
    const [search, setSearch] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedRole, setSelectedRole] = useState('user');
    const [selectedPlanId, setSelectedPlanId] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
    const [filterStatus, setFilterStatus] = useState('all'); // 'all' | 'pending' | 'approved'

    // Confirmation Modals State
    const [userToApprove, setUserToApprove] = useState(null);
    const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);

    const [userToDelete, setUserToDelete] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const queryClient = useQueryClient();

    const { data: users, isLoading, isError } = useQuery({
        queryKey: ['admin-users'],
        queryFn: async () => {
            const { data } = await http.get('/admin/users');
            return data.data;
        },
    });

    const { data: pricelists } = useQuery({
        queryKey: ['admin-pricelists'],
        queryFn: async () => {
            const { data } = await http.get('/admin/pricelists');
            return data.data;
        },
    });

    // Mutation to approve user
    const approveUserMutation = useMutation({
        mutationFn: async (userId) => {
            const { data } = await http.patch(`/admin/users/${userId}/approve`);
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(['admin-users']);
            toast.success(data?.message || 'Akun user berhasil disetujui!', 'Akun Disetujui');
            setIsApproveModalOpen(false);
            setUserToApprove(null);
        },
        onError: (error) => {
            const msg = error?.response?.data?.message || 'Gagal menyetujui akun user.';
            toast.error(msg, 'Error Approve');
        },
    });

    // Mutation to update user role
    const updateRoleMutation = useMutation({
        mutationFn: async ({ userId, role }) => {
            const { data } = await http.patch(`/admin/users/${userId}/role`, { role });
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(['admin-users']);
            toast.success(data?.message || 'Role user berhasil diperbarui!', 'Role Changed');
            setIsEditModalOpen(false);
            setSelectedUser(null);
        },
        onError: (error) => {
            const msg = error?.response?.data?.message || 'Gagal memperbarui role user.';
            toast.error(msg, 'Error Update Role');
        },
    });

    // Mutation to update user plan
    const updatePlanMutation = useMutation({
        mutationFn: async ({ userId, planId }) => {
            const { data } = await http.patch(`/admin/users/${userId}/plan`, { paket_harga_id: planId });
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(['admin-users']);
            queryClient.invalidateQueries(['admin-pricelists']);
            toast.success(data?.message || 'Paket user berhasil diperbarui!', 'Paket Changed');
            setIsPlanModalOpen(false);
            setSelectedUser(null);
        },
        onError: (error) => {
            const msg = error?.response?.data?.message || 'Gagal memperbarui paket user.';
            toast.error(msg, 'Error Update Plan');
        },
    });

    // Mutation to delete user
    const deleteUserMutation = useMutation({
        mutationFn: async (userId) => {
            const { data } = await http.delete(`/admin/users/${userId}`);
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(['admin-users']);
            toast.success(data?.message || 'Akun user berhasil dihapus dari sistem.', 'User Deleted');
            setIsDeleteModalOpen(false);
            setUserToDelete(null);
        },
        onError: (error) => {
            const msg = error?.response?.data?.message || 'Gagal menghapus user.';
            toast.error(msg, 'Error Delete User');
        },
    });

    const handleOpenEditRole = (user) => {
        setSelectedUser(user);
        setSelectedRole(user.role || 'user');
        setIsEditModalOpen(true);
    };

    const handleOpenEditPlan = (user) => {
        setSelectedUser(user);
        setSelectedPlanId(user.plan?.id || pricelists?.[0]?.id || '');
        setIsPlanModalOpen(true);
    };

    const handleSaveRole = (e) => {
        e.preventDefault();
        if (!selectedUser) return;
        updateRoleMutation.mutate({ userId: selectedUser.id, role: selectedRole });
    };

    const handleSavePlan = (e) => {
        e.preventDefault();
        if (!selectedUser || !selectedPlanId) return;
        updatePlanMutation.mutate({ userId: selectedUser.id, planId: selectedPlanId });
    };

    const handleDeleteUser = (user) => {
        setUserToDelete(user);
        setIsDeleteModalOpen(true);
    };

    const handleConfirmDeleteUser = () => {
        if (!userToDelete) return;
        deleteUserMutation.mutate(userToDelete.id);
    };

    const handleApprove = (user) => {
        setUserToApprove(user);
        setIsApproveModalOpen(true);
    };

    const handleConfirmApproveUser = () => {
        if (!userToApprove) return;
        approveUserMutation.mutate(userToApprove.id);
    };

    const pendingCount = users?.filter((u) => !u.is_approved).length || 0;

    const filteredUsers = users?.filter((u) => {
        const matchSearch =
            u.name?.toLowerCase().includes(search.toLowerCase()) ||
            u.email?.toLowerCase().includes(search.toLowerCase());

        const matchStatus =
            filterStatus === 'all' ||
            (filterStatus === 'pending' && !u.is_approved) ||
            (filterStatus === 'approved' && u.is_approved);

        return matchSearch && matchStatus;
    });

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
                        <Shield className="h-3.5 w-3.5" />
                        <span>User Management</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Registered Users</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Manage platform registered users, assign roles, approve pending accounts, and manage user subscription plans.
                    </p>
                </div>

                {/* Pending approval badge */}
                {pendingCount > 0 && (
                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/80 rounded-2xl shadow-xs">
                        <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span className="text-sm font-bold text-amber-800 dark:text-amber-300">
                            {pendingCount} akun menunggu persetujuan
                        </span>
                    </div>
                )}
            </div>

            {/* Content Table Card */}
            <Card className="overflow-hidden">
                {/* Search + Filter Row */}
                <div className="p-5 border-b border-[rgb(var(--color-border))] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative w-full sm:w-80">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
                        />
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                        {[
                            { key: 'all', label: 'Semua' },
                            { key: 'pending', label: `Menunggu${pendingCount > 0 ? ` (${pendingCount})` : ''}` },
                            { key: 'approved', label: 'Disetujui' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setFilterStatus(tab.key)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                                    filterStatus === tab.key
                                        ? tab.key === 'pending'
                                            ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300'
                                            : 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300'
                                        : 'text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))]'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                        <span className="text-xs font-bold text-[rgb(var(--color-text-secondary))] ml-2 hidden sm:block">
                            Total: <span className="text-[rgb(var(--color-text-primary))] font-extrabold">{users?.length || 0}</span>
                        </span>
                    </div>
                </div>

                {isLoading ? (
                    <div className="p-16 flex items-center justify-center">
                        <Spinner size="lg" />
                    </div>
                ) : isError ? (
                    <div className="p-8">
                        <Alert variant="error" title="Failed to load users">
                            Unable to retrieve user list. Please make sure you have administrator privileges.
                        </Alert>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface-alt))] text-[11px] font-extrabold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">
                                    <th className="py-3.5 px-6">User</th>
                                    <th className="py-3.5 px-6">Email</th>
                                    <th className="py-3.5 px-6">Role</th>
                                    <th className="py-3.5 px-6">Paket Harga</th>
                                    <th className="py-3.5 px-6">Status Akun</th>
                                    <th className="py-3.5 px-6">Created At</th>
                                    <th className="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[rgb(var(--color-border))] text-xs">
                                {filteredUsers?.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="py-12 text-center text-[rgb(var(--color-text-secondary))]">
                                            Tidak ada user yang cocok dengan filter ini.
                                        </td>
                                    </tr>
                                ) : filteredUsers?.map((u) => {
                                    const isAdmin = u.role === 'admin';
                                    const isPending = !u.is_approved;
                                    const planName = u.plan?.name || u.plan?.nama || 'Free';
                                    const isFreePlan = u.plan?.slug === 'free' || u.plan?.price === 0;

                                    return (
                                        <tr
                                            key={u.id}
                                            className={`hover:bg-[rgb(var(--color-surface-alt))]/80 transition ${isPending ? 'bg-amber-50/30 dark:bg-amber-950/10' : ''}`}
                                        >
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className={`h-9 w-9 rounded-full font-bold text-xs flex items-center justify-center ${isPending ? 'bg-amber-500 text-white' : 'bg-indigo-600 text-white'}`}>
                                                        {u.avatar ? (
                                                            <img src={u.avatar} alt={u.name} className="h-full w-full rounded-full object-cover" />
                                                        ) : (
                                                            u.name?.slice(0, 2).toUpperCase()
                                                        )}
                                                    </div>
                                                    <span className="font-bold text-[rgb(var(--color-text-primary))] text-sm">{u.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 font-medium text-[rgb(var(--color-text-secondary))]">{u.email}</td>
                                            <td className="py-4 px-6">
                                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                                    isAdmin
                                                        ? 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300'
                                                        : 'bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-secondary))] border border-[rgb(var(--color-border))]'
                                                }`}>
                                                    {isAdmin
                                                        ? <ShieldCheck className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                                                        : <Users className="h-3.5 w-3.5 text-[rgb(var(--color-text-tertiary))]" />
                                                    }
                                                    {isAdmin ? 'Administrator' : 'User'}
                                                </span>
                                            </td>

                                            {/* Paket Harga Badge */}
                                            <td className="py-4 px-6">
                                                {isAdmin ? (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 shadow-2xs">
                                                        <ShieldCheck className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                                                        Akses Admin (Unlimited)
                                                    </span>
                                                ) : (
                                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold ${
                                                        isFreePlan
                                                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                                                            : 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                                                    }`}>
                                                        <CreditCard className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                                                        {planName}
                                                    </span>
                                                )}
                                            </td>

                                            <td className="py-4 px-6">
                                                {isPending ? (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                                                        <Clock className="h-3.5 w-3.5" />
                                                        Menunggu Persetujuan
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                                                        <Check className="h-3.5 w-3.5" />
                                                        Aktif
                                                    </span>
                                                )}
                                            </td>
                                            <td className="py-4 px-6 font-medium text-[rgb(var(--color-text-tertiary))]">
                                                {u.created_at
                                                    ? new Date(u.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
                                                    : 'N/A'}
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <div className="flex items-center justify-end gap-1.5">
                                                    {/* Approve — Prominent Button for Pending Users */}
                                                    {isPending && (
                                                        <button
                                                            type="button"
                                                            onClick={() => handleApprove(u)}
                                                            disabled={approveUserMutation.isPending}
                                                            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white rounded-xl font-bold text-xs shadow-sm transition flex items-center gap-1.5 hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                                                            title="Setujui Akun Pengguna"
                                                        >
                                                            <UserCheck className="h-3.5 w-3.5 stroke-[2.5]" />
                                                            <span>Setujui</span>
                                                        </button>
                                                    )}

                                                    {/* Edit User Plan */}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleOpenEditPlan(u)}
                                                        className="p-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 rounded-xl transition cursor-pointer"
                                                        title="Ganti Paket Langganan User"
                                                    >
                                                        <CreditCard className="h-4 w-4" />
                                                    </button>

                                                    {/* Edit Role */}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleOpenEditRole(u)}
                                                        className="p-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 bg-indigo-50 dark:bg-indigo-950/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 rounded-xl transition cursor-pointer"
                                                        title="Edit Role User"
                                                    >
                                                        <Edit2 className="h-4 w-4" />
                                                    </button>

                                                    {/* Delete User */}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDeleteUser(u)}
                                                        disabled={deleteUserMutation.isPending}
                                                        className="p-2 text-red-600 dark:text-red-400 hover:text-red-700 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-900/50 rounded-xl transition disabled:opacity-50 cursor-pointer"
                                                        title="Hapus Akun User"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </Card>

            {/* Custom Confirm Modal: Setujui Akun User */}
            <ConfirmModal
                isOpen={isApproveModalOpen}
                onClose={() => {
                    setIsApproveModalOpen(false);
                    setUserToApprove(null);
                }}
                onConfirm={handleConfirmApproveUser}
                title="Setujui Akun User"
                description="User akan disetujui dan diizinkan untuk login serta mengakses fitur platform DataSoft."
                variant="success"
                icon={UserCheck}
                confirmText="Ya, Setujui Akun"
                cancelText="Batal"
                isLoading={approveUserMutation.isPending}
                details={
                    userToApprove && (
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center shrink-0 shadow-sm">
                                {userToApprove.avatar ? (
                                    <img src={userToApprove.avatar} alt={userToApprove.name} className="h-full w-full rounded-full object-cover" />
                                ) : (
                                    userToApprove.name?.slice(0, 2).toUpperCase()
                                )}
                            </div>
                            <div>
                                <p className="font-extrabold text-[rgb(var(--color-text-primary))] text-sm">{userToApprove.name}</p>
                                <p className="text-xs text-[rgb(var(--color-text-secondary))]">{userToApprove.email}</p>
                            </div>
                        </div>
                    )
                }
            />

            {/* Custom Confirm Modal: Hapus Akun User */}
            <ConfirmModal
                isOpen={isDeleteModalOpen}
                onClose={() => {
                    setIsDeleteModalOpen(false);
                    setUserToDelete(null);
                }}
                onConfirm={handleConfirmDeleteUser}
                title="Hapus Akun User"
                description="Tindakan ini tidak dapat dibatalkan. Seluruh data akun pengguna ini akan dihapus secara permanen dari sistem."
                variant="danger"
                icon={Trash2}
                confirmText="Ya, Hapus Permanen"
                cancelText="Batal"
                isLoading={deleteUserMutation.isPending}
                details={
                    userToDelete && (
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-red-600 text-white font-extrabold flex items-center justify-center shrink-0 shadow-sm">
                                {userToDelete.avatar ? (
                                    <img src={userToDelete.avatar} alt={userToDelete.name} className="h-full w-full rounded-full object-cover" />
                                ) : (
                                    userToDelete.name?.slice(0, 2).toUpperCase()
                                )}
                            </div>
                            <div>
                                <p className="font-extrabold text-[rgb(var(--color-text-primary))] text-sm">{userToDelete.name}</p>
                                <p className="text-xs text-[rgb(var(--color-text-secondary))]">{userToDelete.email}</p>
                            </div>
                        </div>
                    )
                }
            />

            {/* Edit Role Modal */}
            {isEditModalOpen && selectedUser && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] pb-3">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-indigo-600" />
                                <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))]">Edit Role Akun</h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => { setIsEditModalOpen(false); setSelectedUser(null); }}
                                className="text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] p-1 rounded-lg hover:bg-[rgb(var(--color-surface-alt))] transition cursor-pointer"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveRole} className="space-y-4">
                            <div className="p-3 bg-[rgb(var(--color-surface-alt))] rounded-2xl border border-[rgb(var(--color-border))] flex items-center gap-3">
                                <div className="h-9 w-9 rounded-full bg-indigo-600 text-white font-extrabold flex items-center justify-center shrink-0">
                                    {selectedUser.name?.slice(0, 2).toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[rgb(var(--color-text-primary))]">{selectedUser.name}</p>
                                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">{selectedUser.email}</p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Pilih Role User</label>
                                <select
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 font-semibold"
                                >
                                    <option value="user">User (Pengguna Biasa)</option>
                                    <option value="admin">Admin (Administrator Sistem)</option>
                                </select>
                                <p className="mt-1 text-[10px] text-[rgb(var(--color-text-tertiary))]">
                                    Pilih &apos;Admin&apos; untuk memberikan akses administrator penuh.
                                </p>
                            </div>

                            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[rgb(var(--color-border))]">
                                <button
                                    type="button"
                                    onClick={() => { setIsEditModalOpen(false); setSelectedUser(null); }}
                                    className="px-4 py-2 text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] rounded-xl transition cursor-pointer"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={updateRoleMutation.isPending}
                                    className="px-5 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/20 transition flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                                >
                                    {updateRoleMutation.isPending ? (
                                        <span>Menyimpan...</span>
                                    ) : (
                                        <>
                                            <Check className="h-4 w-4" />
                                            <span>Simpan Role</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Plan Modal */}
            {isPlanModalOpen && selectedUser && (
                <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] pb-3">
                            <div className="flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-emerald-600" />
                                <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))]">Ganti Paket Langganan</h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => { setIsPlanModalOpen(false); setSelectedUser(null); }}
                                className="text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] p-1 rounded-lg hover:bg-[rgb(var(--color-surface-alt))] transition cursor-pointer"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSavePlan} className="space-y-4">
                            <div className="p-3 bg-[rgb(var(--color-surface-alt))] rounded-2xl border border-[rgb(var(--color-border))] flex items-center gap-3">
                                <div className="h-9 w-9 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center shrink-0">
                                    {selectedUser.name?.slice(0, 2).toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[rgb(var(--color-text-primary))]">{selectedUser.name}</p>
                                    <p className="text-xs text-[rgb(var(--color-text-secondary))]">{selectedUser.email}</p>
                                </div>
                            </div>

                            {selectedUser.role === 'admin' && (
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-2xl text-xs text-indigo-800 dark:text-indigo-200 flex items-center gap-2.5">
                                    <ShieldCheck className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                                    <span>Akun ini adalah <strong>Administrator</strong> (Secara otomatis memiliki Akses Penuh tanpa batasan).</span>
                                </div>
                            )}

                            <div>
                                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">Pilih Paket Harga</label>
                                <select
                                    value={selectedPlanId}
                                    onChange={(e) => setSelectedPlanId(e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 font-semibold"
                                >
                                    {pricelists?.map((p) => (
                                        <option key={p.id} value={p.id}>
                                            {p.name || p.nama} ({p.formatted_price}) — {p.max_domains === -1 ? 'Unlimited Domain' : `${p.max_domains} Domain`}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[rgb(var(--color-border))]">
                                <button
                                    type="button"
                                    onClick={() => { setIsPlanModalOpen(false); setSelectedUser(null); }}
                                    className="px-4 py-2 text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] rounded-xl transition cursor-pointer"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={updatePlanMutation.isPending}
                                    className="px-5 py-2 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md shadow-emerald-600/20 transition flex items-center gap-1.5 disabled:opacity-50 cursor-pointer"
                                >
                                    {updatePlanMutation.isPending ? (
                                        <span>Menyimpan...</span>
                                    ) : (
                                        <>
                                            <Check className="h-4 w-4" />
                                            <span>Simpan Paket User</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
