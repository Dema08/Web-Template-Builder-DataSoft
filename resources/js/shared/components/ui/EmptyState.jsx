import { Inbox } from 'lucide-react';

/**
 * EmptyState — shown when a list/panel has no data.
 */
export default function EmptyState({ title = 'Nothing here yet', description, action, className = '' }) {
    return (
        <div className={`flex flex-col items-center justify-center text-center py-16 px-6 ds-card ${className}`}>
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-indigo-300 mb-4">
                <Inbox className="h-8 w-8" />
            </span>
            <h3 className="text-slate-900 text-lg font-semibold">{title}</h3>
            {description && <p className="mt-1.5 text-sm text-slate-500 max-w-sm">{description}</p>}
            {action && <div className="mt-6">{action}</div>}
        </div>
    );
}
