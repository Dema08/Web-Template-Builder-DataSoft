import { CheckCircle2, Info, XCircle, X } from 'lucide-react';
import { useToastStore } from '@store';

const config = {
    success: { icon: CheckCircle2, classes: 'bg-white border-green-200 text-green-700', iconClasses: 'text-green-500' },
    error: { icon: XCircle, classes: 'bg-white border-red-200 text-red-700', iconClasses: 'text-red-500' },
    info: { icon: Info, classes: 'bg-white border-sky-200 text-sky-700', iconClasses: 'text-sky-500' },
};

/**
 * Toast viewport — renders all active toasts fixed to the top-right.
 */
export default function Toast() {
    const toasts = useToastStore((state) => state.toasts);
    const remove = useToastStore((state) => state.remove);

    if (toasts.length === 0) return null;

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-80 max-w-[calc(100vw-2rem)]">
            {toasts.map(({ id, type, message, title }) => {
                const { icon: Icon, classes, iconClasses } = config[type] || config.info;

                return (
                    <div
                        key={id}
                        role="status"
                        className={`flex items-start gap-3 rounded-xl border px-4 py-3 shadow-lg ${classes}`}
                    >
                        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconClasses}`} />
                        <div className="min-w-0 flex-1">
                            {title && <p className="text-sm font-semibold">{title}</p>}
                            <p className="text-sm">{message}</p>
                        </div>
                        <button
                            onClick={() => remove(id)}
                            className="shrink-0 text-gray-400 hover:text-gray-600"
                            aria-label="Dismiss"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
