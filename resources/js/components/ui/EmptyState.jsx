import { Inbox } from 'lucide-react';

/**
 * EmptyState — shown when a list/panel has no data.
 */
export default function EmptyState({ title = 'Nothing here yet', description, action, className = '' }) {
    return (
        <div className={`flex flex-col items-center justify-center text-center py-12 px-6 ${className}`}>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400 mb-4">
                <Inbox className="h-7 w-7" />
            </span>
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
            {description && <p className="mt-1 text-sm text-gray-500 max-w-sm">{description}</p>}
            {action && <div className="mt-4">{action}</div>}
        </div>
    );
}
