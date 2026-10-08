export default function StatusBadge({ status, className = '' }) {
    const normalized = String(status || 'draft').toLowerCase();
    const palette = {
        published: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        pending: 'bg-amber-50 text-amber-700 border-amber-200',
        rejected: 'bg-rose-50 text-rose-700 border-rose-200',
        suspended: 'bg-red-50 text-red-700 border-red-200',
        draft: 'bg-slate-100 text-slate-700 border-slate-200',
        archived: 'bg-slate-100 text-slate-700 border-slate-200',
    };

    const dotColors = {
        published: 'bg-emerald-500',
        pending: 'bg-amber-500 animate-pulse',
        rejected: 'bg-rose-500',
        suspended: 'bg-red-500',
        draft: 'bg-slate-400',
        archived: 'bg-slate-400',
    };

    const labels = {
        published: 'Dipublikasikan',
        pending: 'Menunggu Persetujuan',
        rejected: 'Ditolak',
        suspended: 'Ditangguhkan',
        draft: 'Draf',
        archived: 'Diarsipkan',
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold ${
                palette[normalized] || palette.draft
            } ${className}`}
        >
            <span
                className={`h-1.5 w-1.5 rounded-full ${
                    dotColors[normalized] || 'bg-slate-400'
                }`}
            />
            {labels[normalized] || (normalized.charAt(0).toUpperCase() + normalized.slice(1))}
        </span>
    );
}
