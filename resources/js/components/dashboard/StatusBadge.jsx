export default function StatusBadge({ status, className = '' }) {
    const normalized = String(status || 'draft').toLowerCase();
    const palette = {
        published: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        draft: 'bg-amber-50 text-amber-700 border-amber-200',
        archived: 'bg-slate-100 text-slate-700 border-slate-200',
    };

    return (
        <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${palette[normalized] || palette.draft} ${className}`}>
            {normalized === 'published' ? 'Published' : normalized === 'draft' ? 'Draft' : normalized.charAt(0).toUpperCase() + normalized.slice(1)}
        </span>
    );
}
