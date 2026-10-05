import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, LayoutTemplate, FilePlus2, ArrowRight } from 'lucide-react';
import { ROUTES } from '@constants';
import { toast } from '@store';

/**
 * CreateSiteChoiceModal
 * - Dengan Template -> /templates
 * - Tanpa Template  -> blank mode -> /builder
 */

export default function CreateSiteChoiceModal({ isOpen, onClose }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isOpen) return undefined;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose?.();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleChooseTemplate = () => {
        try {
            sessionStorage.removeItem('blank_template_mode');
        } catch (_) { /* ignore */ }
        onClose?.();
        navigate(ROUTES.TEMPLATES);
    };

    const handleChooseBlank = () => {
        try {
            sessionStorage.removeItem('pending_template_id');
            sessionStorage.removeItem('pending_template_name');
            sessionStorage.removeItem('edit_template_id');
            sessionStorage.removeItem('edit_template_name');
            sessionStorage.removeItem('draft_template_id');
            sessionStorage.removeItem('draft_template_name');
            sessionStorage.setItem('blank_template_mode', '1');
        } catch (_) { /* ignore */ }
        toast.success('Membuka Builder dengan Template Kosong...', 'Blank Template');
        onClose?.();
        navigate(ROUTES.BUILDER);
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="bg-[rgb(var(--color-surface))] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[rgb(var(--color-border))] space-y-5"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                            Buat Website Baru
                        </h3>
                        <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-1 leading-relaxed">
                            Pilih cara membuat website Anda.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-1.5 rounded-xl hover:bg-[rgb(var(--color-surface-alt))] transition shrink-0"
                        aria-label="Tutup"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                        type="button"
                        onClick={handleChooseTemplate}
                        className="group text-left rounded-2xl border-2 border-[rgb(var(--color-border))] hover:border-indigo-500 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-3">
                            <LayoutTemplate className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-extrabold">Dengan Template</p>
                        <p className="text-[11px] opacity-70 mt-1 leading-relaxed">
                            Pilih desain siap pakai dari galeri template.
                        </p>
                        <span className="inline-flex items-center gap-1 mt-3 text-[11px] font-bold text-indigo-600">
                            Pilih Template <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={handleChooseBlank}
                        className="group text-left rounded-2xl border-2 border-[rgb(var(--color-border))] hover:border-emerald-500 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3">
                            <FilePlus2 className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-extrabold">Tanpa Template</p>
                        <p className="text-[11px] opacity-70 mt-1 leading-relaxed">
                            Mulai dari kanvas kosong langsung di Builder.
                        </p>
                        <span className="inline-flex items-center gap-1 mt-3 text-[11px] font-bold text-emerald-600">
                            Buka Builder <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                    </button>
                </div>
                <div className="pt-3 flex items-center justify-end border-t border-[rgb(var(--color-border))]">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2.5 rounded-xl text-xs font-bold opacity-70 hover:opacity-100 transition"
                    >
                        Batal
                    </button>
                </div>
            </div>
        </div>
    );
}
