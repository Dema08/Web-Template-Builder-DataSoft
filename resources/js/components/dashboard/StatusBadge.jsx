export default function StatusBadge({ status, className = '' }) {
    const normalized = String(status || 'draft').toLowerCase();
    const palette = {
        published: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        draft: 'bg-amber-50 text-amber-700 border-amber-200',
        archived: 'bg-slate-100 text-slate-700 border-slate-200',
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold ${
                palette[normalized] || palette.draft
            } ${className}`}
        >
            <span
                className={`h-1.5 w-1.5 rounded-full ${
                    normalized === 'published'
                        ? 'bg-emerald-500'
                        : normalized === 'draft'
                        ? 'bg-amber-500'
                        : 'bg-slate-400'
                }`}
            />
            {normalized === 'published'
                ? 'Published'
                : normalized === 'draft'
                ? 'Draft'
                : normalized.charAt(0).toUpperCase() + normalized.slice(1)}
        </span>
    );
}
