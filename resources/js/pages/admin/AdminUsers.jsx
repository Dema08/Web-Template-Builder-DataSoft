import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Users, Search, Plus, Shield, ShieldCheck, Mail, Calendar, Edit2, Trash2, KeyRound } from 'lucide-react';
import { http } from '@api';
import { Spinner, Alert, Card } from '@components/ui';

export default function AdminUsers() {
    const [search, setSearch] = useState('');

    const { data: users, isLoading, isError } = useQuery({
        queryKey: ['admin-users'],
        queryFn: async () => {
            const { data } = await http.get('/admin/users');
            return data.data;
        },
    });

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
                                                    <button
                                                        type="button"
                                                        className="p-1.5 text-[rgb(var(--color-text-tertiary))] hover:text-indigo-600 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition"
                                                        title="Edit User"
                                                    >
                                                        <Edit2 className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="p-1.5 text-[rgb(var(--color-text-tertiary))] hover:text-amber-600 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-950/30 transition"
                                                        title="Reset Password"
                                                    >
                                                        <KeyRound className="h-4 w-4" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="p-1.5 text-[rgb(var(--color-text-tertiary))] hover:text-red-600 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 transition"
                                                        title="Delete User"
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
        </div>
    );
}
