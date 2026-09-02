import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    CreditCard,
    DollarSign,
    CheckCircle2,
    Clock,
    XCircle,
    Search,
    Filter,
    RefreshCw,
    TrendingUp,
    Users,
} from 'lucide-react';
import { billingApi } from '@api';
import { Spinner, Alert, Card } from '@shared/components/ui';
import { QUERY_KEYS } from '@constants';

export default function AdminTransactions() {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [page, setPage] = useState(1);

    // Fetch transactions & metrics
    const { data: resData, isLoading, isError, refetch } = useQuery({
        queryKey: [QUERY_KEYS.ADMIN_TRANSACTIONS, search, statusFilter, page],
        queryFn: () => billingApi.getAdminTransactions({
            search,
            status: statusFilter,
            page,
            per_page: 15,
        }),
    });

    const metrics = resData?.metrics;
    const transactions = resData?.data || [];
    const pagination = resData?.pagination;

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
                        <DollarSign className="h-3.5 w-3.5" />
                        <span>Admin Revenue & Transactions</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                        Laporan Transaksi & Pendapatan
                    </h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Monitoring seluruh transaksi pembayaran masuk via Midtrans Snap, status pelunasan, dan total revenue.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => refetch()}
                    className="px-4 py-2.5 rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition flex items-center gap-2 shadow-xs shrink-0"
                >
                    <RefreshCw className="h-4 w-4 text-indigo-600" />
                    <span>Muat Ulang Data</span>
                </button>
            </div>

            {/* KPI Revenue Summary Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-5 flex items-center gap-4 border-l-4 border-l-emerald-500">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Total Revenue (Paid)</p>
                        <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                            {metrics?.formatted_total_revenue || 'Rp 0'}
                        </p>
                    </div>
                </Card>

                <Card className="p-5 flex items-center gap-4 border-l-4 border-l-indigo-500">
                    <div className="h-12 w-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Transaksi Sukses</p>
                        <p className="text-2xl font-black text-[rgb(var(--color-text-primary))]">
                            {metrics?.successful_transactions || 0}
                        </p>
                    </div>
                </Card>

                <Card className="p-5 flex items-center gap-4 border-l-4 border-l-amber-500">
                    <div className="h-12 w-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                        <Clock className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Pending</p>
                        <p className="text-2xl font-black text-[rgb(var(--color-text-primary))]">
                            {metrics?.pending_transactions || 0}
                        </p>
                    </div>
                </Card>

                <Card className="p-5 flex items-center gap-4 border-l-4 border-l-red-500">
                    <div className="h-12 w-12 rounded-2xl bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0">
                        <XCircle className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Gagal / Expired</p>
                        <p className="text-2xl font-black text-[rgb(var(--color-text-primary))]">
                            {metrics?.failed_transactions || 0}
                        </p>
                    </div>
                </Card>
            </div>

            {/* Filter Bar */}
            <div className="p-4 bg-[rgb(var(--color-surface))] rounded-2xl border border-[rgb(var(--color-border))] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                {/* Search */}
                <div className="relative w-full sm:w-80">
                    <Search className="h-4 w-4 text-[rgb(var(--color-text-tertiary))] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Cari Invoice, Order ID, User, Email..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                        className="w-full pl-10 pr-4 py-2 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-medium text-[rgb(var(--color-text-primary))]"
                    />
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Filter className="h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
                    <select
                        value={statusFilter}
                        onChange={(e) => {
                            setStatusFilter(e.target.value);
                            setPage(1);
                        }}
                        className="px-3.5 py-2 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs font-bold text-[rgb(var(--color-text-primary))]"
                    >
                        <option value="">Semua Status Transaksi</option>
                        <option value="paid">PAID (Terbayar)</option>
                        <option value="pending">PENDING (Menunggu)</option>
                        <option value="expired">EXPIRED (Kedaluwarsa)</option>
                        <option value="failed">FAILED (Gagal)</option>
                        <option value="cancelled">CANCELLED (Dibatalkan)</option>
                        <option value="refunded">REFUNDED (Dikembalikan)</option>
                    </select>
                </div>
            </div>

            {/* Transactions Table */}
            {isLoading ? (
                <div className="p-12 flex justify-center">
                    <Spinner size="lg" />
                </div>
            ) : isError ? (
                <Alert variant="error" title="Gagal Memuat Transaksi">
                    Terjadi kesalahan saat mengambil daftar transaksi admin dari server.
                </Alert>
            ) : transactions.length === 0 ? (
                <Card className="p-12 text-center text-xs text-[rgb(var(--color-text-tertiary))] space-y-2">
                    <CreditCard className="h-10 w-10 mx-auto text-slate-300" />
                    <p className="font-bold text-slate-600 dark:text-slate-400">Tidak Ada Transaksi Ditemukan</p>
                    <p>Belum ada data transaksi yang cocok dengan pencarian atau filter Anda.</p>
                </Card>
            ) : (
                <div className="bg-[rgb(var(--color-surface))] rounded-2xl border border-[rgb(var(--color-border))] overflow-hidden shadow-xs">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-[rgb(var(--color-surface-alt))] text-[rgb(var(--color-text-tertiary))] font-extrabold uppercase tracking-wider border-b border-[rgb(var(--color-border))]">
                                <tr>
                                    <th className="py-3.5 px-4">Invoice / Order</th>
                                    <th className="py-3.5 px-4">Pengguna (User)</th>
                                    <th className="py-3.5 px-4">Paket Target</th>
                                    <th className="py-3.5 px-4">Nominal</th>
                                    <th className="py-3.5 px-4">Metode</th>
                                    <th className="py-3.5 px-4">Status</th>
                                    <th className="py-3.5 px-4">Waktu Dibuat</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[rgb(var(--color-border))] text-[rgb(var(--color-text-primary))] font-medium">
                                {transactions.map((tx) => {
                                    const status = tx.status;
                                    const statusStyle = {
                                        paid: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300',
                                        pending: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
                                        expired: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
                                        failed: 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300',
                                        cancelled: 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300',
                                        refunded: 'bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300',
                                    }[status] || 'bg-slate-100 text-slate-700';

                                    return (
                                        <tr key={tx.id} className="hover:bg-[rgb(var(--color-surface-alt))] transition">
                                            <td className="py-3.5 px-4">
                                                <div className="font-mono font-extrabold text-indigo-600 dark:text-indigo-400">{tx.invoice_number}</div>
                                                <div className="font-mono text-[10px] text-[rgb(var(--color-text-tertiary))]">{tx.order_id}</div>
                                            </td>
                                            <td className="py-3.5 px-4">
                                                <div className="font-bold text-[rgb(var(--color-text-primary))]">{tx.user?.name || 'N/A'}</div>
                                                <div className="text-[11px] text-[rgb(var(--color-text-tertiary))]">{tx.user?.email}</div>
                                            </td>
                                            <td className="py-3.5 px-4 font-bold">
                                                {tx.pricelist?.name || tx.pricelist?.nama || 'N/A'}
                                            </td>
                                            <td className="py-3.5 px-4 font-extrabold text-emerald-600 dark:text-emerald-400">
                                                {tx.formatted_nominal}
                                            </td>
                                            <td className="py-3.5 px-4 uppercase text-[11px] font-semibold text-[rgb(var(--color-text-secondary))]">
                                                {tx.metode_pembayaran}
                                            </td>
                                            <td className="py-3.5 px-4">
                                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${statusStyle}`}>
                                                    {tx.status_label || status}
                                                </span>
                                            </td>
                                            <td className="py-3.5 px-4 text-slate-500 text-[11px]">
                                                {tx.formatted_date}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {pagination && pagination.last_page > 1 && (
                        <div className="p-4 bg-[rgb(var(--color-surface-alt))] border-t border-[rgb(var(--color-border))] flex items-center justify-between text-xs">
                            <span className="text-[rgb(var(--color-text-tertiary))]">
                                Halaman {pagination.current_page} dari {pagination.last_page} (Total {pagination.total} transaksi)
                            </span>
                            <div className="flex gap-2">
                                <button
                                    disabled={page <= 1}
                                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                                    className="px-3 py-1.5 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] disabled:opacity-40 cursor-pointer"
                                >
                                    Sebelumnya
                                </button>
                                <button
                                    disabled={page >= pagination.last_page}
                                    onClick={() => setPage((p) => p + 1)}
                                    className="px-3 py-1.5 rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] disabled:opacity-40 cursor-pointer"
                                >
                                    Selanjutnya
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
