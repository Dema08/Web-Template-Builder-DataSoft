import { useEffect } from 'react';
import { AlertTriangle, Trash2, CheckCircle2, Info, X } from 'lucide-react';
import Spinner from './Spinner';

export default function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title = 'Konfirmasi Aksi',
    description,
    details,
    confirmText = 'Ya, Lanjutkan',
    cancelText = 'Batal',
    variant = 'danger', // 'danger' | 'success' | 'warning' | 'info' | 'primary'
    icon: CustomIcon,
    isLoading = false,
}) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen && !isLoading) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, isLoading, onClose]);

    if (!isOpen) return null;

    const variantStyles = {
        danger: {
            iconBg: 'bg-red-50 dark:bg-red-950/40 border-red-100 dark:border-red-900/50 text-red-600 dark:text-red-400',
            button: 'bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20 focus:ring-red-500',
            defaultIcon: Trash2,
        },
        success: {
            iconBg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400',
            button: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 focus:ring-emerald-500',
            defaultIcon: CheckCircle2,
        },
        warning: {
            iconBg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/50 text-amber-600 dark:text-amber-400',
            button: 'bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20 focus:ring-amber-500',
            defaultIcon: AlertTriangle,
        },
        info: {
            iconBg: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400',
            button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 focus:ring-indigo-500',
            defaultIcon: Info,
        },
        primary: {
            iconBg: 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/50 text-indigo-600 dark:text-indigo-400',
            button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 focus:ring-indigo-500',
            defaultIcon: Info,
        },
    };

    const currentVariant = variantStyles[variant] || variantStyles.danger;
    const IconComponent = CustomIcon || currentVariant.defaultIcon;

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div
                className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5 animate-in fade-in zoom-in-95 duration-150 relative overflow-hidden"
                role="dialog"
                aria-modal="true"
            >
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                        <div className={`p-3 rounded-2xl border shrink-0 ${currentVariant.iconBg}`}>
                            <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="pt-0.5">
                            <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                                {title}
                            </h3>
                            {description && (
                                <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1 leading-relaxed">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isLoading}
                        className="text-[rgb(var(--color-text-tertiary))] hover:text-[rgb(var(--color-text-primary))] p-1.5 rounded-xl hover:bg-[rgb(var(--color-surface-alt))] transition shrink-0 disabled:opacity-50"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Details Slot (Optional User Card, Item Info, etc.) */}
                {details && (
                    <div className="p-3.5 bg-[rgb(var(--color-surface-alt))] rounded-2xl border border-[rgb(var(--color-border))] text-xs text-[rgb(var(--color-text-primary))]">
                        {details}
                    </div>
                )}

                {/* Modal Footer Actions */}
                <div className="pt-3 flex items-center justify-end gap-2.5 border-t border-[rgb(var(--color-border))]">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isLoading}
                        className="px-4 py-2.5 rounded-xl text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] transition border border-transparent hover:border-[rgb(var(--color-border))] disabled:opacity-50 cursor-pointer"
                    >
                        {cancelText}
                    </button>

                    <button
                        type="button"
                        onClick={onConfirm}
                        disabled={isLoading}
                        className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-2 disabled:opacity-50 cursor-pointer ${currentVariant.button}`}
                    >
                        {isLoading ? (
                            <>
                                <Spinner size="sm" />
                                <span>Memproses...</span>
                            </>
                        ) : (
                            <span>{confirmText}</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
