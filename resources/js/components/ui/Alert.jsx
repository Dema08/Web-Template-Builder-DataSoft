import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';

/**
 * Alert — status message surface.
 * Variants: error | success | info | warning
 */
const config = {
    error: {
        icon: XCircle,
        classes: 'bg-red-50 text-red-700 border-red-200',
        iconClasses: 'text-red-500',
    },
    success: {
        icon: CheckCircle2,
        classes: 'bg-green-50 text-green-700 border-green-200',
        iconClasses: 'text-green-500',
    },
    info: {
        icon: Info,
        classes: 'bg-sky-50 text-sky-700 border-sky-200',
        iconClasses: 'text-sky-500',
    },
    warning: {
        icon: AlertCircle,
        classes: 'bg-amber-50 text-amber-700 border-amber-200',
        iconClasses: 'text-amber-500',
    },
};

export default function Alert({ variant = 'error', title, children, className = '', ...props }) {
    const { icon: Icon, classes, iconClasses } = config[variant] || config.info;

    return (
        <div
            role="alert"
            className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm ${classes} ${className}`}
            {...props}
        >
            <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconClasses}`} />
            <div className="min-w-0">
                {title && <p className="font-medium">{title}</p>}
                {children && <div className={title ? 'mt-0.5' : ''}>{children}</div>}
            </div>
        </div>
    );
}
