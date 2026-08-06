import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Users, Search, Plus, Shield, ShieldCheck, Edit2, Trash2, X, Check } from 'lucide-react';
import { http } from '@api';
import { Spinner, Alert, Card } from '@components/ui';
import { toast } from '@store';

export default function AdminUsers() {
    const [search, setSearch] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedRole, setSelectedRole] = useState('user');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const queryClient = useQueryClient();

    const { data: users, isLoading, isError } = useQuery({
        queryKey: ['admin-users'],
        queryFn: async () => {
            const { data } = await http.get('/admin/users');
            return data.data;
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

    // Mutation to delete user
    const deleteUserMutation = useMutation({
        mutationFn: async (userId) => {
            const { data } = await http.delete(`/admin/users/${userId}`);
            return data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries(['admin-users']);
            toast.success(data?.message || 'Akun user berhasil dihapus dari sistem.', 'User Deleted');
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

    const handleSaveRole = (e) => {
        e.preventDefault();
        if (!selectedUser) return;
        updateRoleMutation.mutate({ userId: selectedUser.id, role: selectedRole });
    };

    const handleDeleteUser = (user) => {
        if (confirm(`ADMIN ACTION: Apakah Anda yakin ingin menghapus permanen akun "${user.name}" (${user.email})?`)) {
            deleteUserMutation.mutate(user.id);
        }
    };

    const filteredUsers = users?.filter(
        (u) =>
            u.name?.toLowerCase().includes(search.toLowerCase()) ||
            u.email?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header Title + Action Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
                        <Shield className="h-3.5 w-3.5" />
                        <span>User Management</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Registered Users</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Manage platform registered users, assign roles, and review access control.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => toast.info('Pendaftaran user baru dapat dilakukan melalui halaman register.', 'User Registration')}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm shadow-md shadow-indigo-600/20 transition-all"
                >
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>Add New User</span>
                </button>
            </div>

            {/* Content Table Card */}
            <Card className="overflow-hidden">
                {/* Search Bar Row */}
                <div className="p-5 border-b border-[rgb(var(--color-border))] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="relative w-full sm:w-80">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] ds-input"
                        />
                    </div>

                    <div className="text-xs font-bold text-[rgb(var(--color-text-secondary))]">
                        Total Registered Users: <span className="text-[rgb(var(--color-text-primary))] font-extrabold">{users?.length || 0}</span>
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
                                    <th className="py-3.5 px-6">Created At</th>
                                    <th className="py-3.5 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[rgb(var(--color-border))] text-xs">
                                {filteredUsers?.map((u) => {
                                    const isAdmin = u.role === 'admin';
                                    return (
                                        <tr key={u.id} className="hover:bg-[rgb(var(--color-surface-alt))]/80 transition">
                                            <td className="py-4 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
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
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                                        isAdmin
                                                            ? 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300'
                                                            : 'bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-secondary))] border border-[rgb(var(--color-border))]'
                                                    }`}
                                                >
                                                    {isAdmin ? <ShieldCheck className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" /> : <Users className="h-3.5 w-3.5 text-[rgb(var(--color-text-tertiary))]" />}
                                                    {isAdmin ? 'Administrator' : 'User'}
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 font-medium text-[rgb(var(--color-text-tertiary))]">
                                                {u.created_at ? new Date(u.created_at).toLocaleDateString() : 'N/A'}
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <div className="flex items-center justify-end gap-1">
                                                    {/* Action 1: Edit Role */}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleOpenEditRole(u)}
                                                        className="p-2 text-[rgb(var(--color-text-tertiary))] hover:text-indigo-600 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition flex items-center gap-1"
                                                        title="Edit Role User / Jadikan Admin"
                                                    >
                                                        <Edit2 className="h-4 w-4" />
                                                    </button>

                                                    {/* Action 2: Delete User */}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleDeleteUser(u)}
                                                        disabled={deleteUserMutation.isPending}
                                                        className="p-2 text-[rgb(var(--color-text-tertiary))] hover:text-red-600 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 transition flex items-center gap-1 disabled:opacity-50"
                                                        title="Delete User Account"
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

            {/* Edit Role Modal */}
            {isEditModalOpen && selectedUser && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5 animate-in fade-in zoom-in-95 duration-150">
                        <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] pb-3">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-indigo-600" />
                                <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))]">Edit Role Akun</h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditModalOpen(false);
                                    setSelectedUser(null);
                                }}
                                className="text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] p-1 rounded-lg hover:bg-[rgb(var(--color-surface-alt))] transition"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSaveRole} className="space-y-4">
                            <div className="p-3 bg-[rgb(var(--color-surface-alt))] rounded-2xl border border-[rgb(var(--color-border))]">
                                <p className="text-sm font-bold text-[rgb(var(--color-text-primary))]">{selectedUser.name}</p>
                                <p className="text-xs text-[rgb(var(--color-text-secondary))]">{selectedUser.email}</p>
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
                                    Pilih &apos;Admin&apos; untuk menjadikan akun ini sebagai Administrator dengan akses penuh.
                                </p>
                            </div>

                            <div className="pt-4 flex items-center justify-end gap-3 border-t border-[rgb(var(--color-border))]">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsEditModalOpen(false);
                                        setSelectedUser(null);
                                    }}
                                    className="px-4 py-2 text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] rounded-xl transition"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={updateRoleMutation.isPending}
                                    className="px-5 py-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md shadow-indigo-600/20 transition flex items-center gap-1.5 disabled:opacity-50"
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
        </div>
    );
}
