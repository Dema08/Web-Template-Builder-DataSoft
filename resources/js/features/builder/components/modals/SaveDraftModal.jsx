import { useState, useEffect } from 'react';
import { Save, X, Loader2, BookmarkCheck } from 'lucide-react';

/**
 * SaveDraftModal
 * Ditampilkan saat user pertama kali menekan "Save Draft" dan belum punya
 * draft template aktif. User diminta mengisi nama template.
 */
export default function SaveDraftModal({
    isOpen,
    onClose,
    onSave,
    isSaving = false,
}) {
    const [name, setName] = useState('');

    useEffect(() => {
        if (isOpen) setName('');
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        onSave({ name: name.trim() });
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div
                className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-5 relative"
                role="dialog"
                aria-modal="true"
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100/80">
                            <BookmarkCheck className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                                Simpan sebagai Draft
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">
                                Template akan tersimpan di "Template Saya" dengan status <strong>Draft</strong> dan visibilitas <strong>Private</strong>.
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isSaving}
                        className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition shrink-0 disabled:opacity-50"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Auto-save info banner */}
                <div className="flex items-start gap-2.5 px-4 py-3 bg-amber-50/70 border border-amber-200/60 rounded-2xl">
                    <Save className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800 font-semibold leading-relaxed">
                        Setelah disimpan, template ini akan <strong>di-auto-save setiap 10 detik</strong> secara otomatis selama Anda masih berada di Builder. Anda tidak perlu khawatir kehilangan progress.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Template Name */}
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Nama Draft Template <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Contoh: Desain Website Cafe Saya"
                            required
                            autoFocus
                            className="w-full h-10 px-3.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition"
                        />
                        <p className="text-[10px] text-slate-400 mt-1.5">
                            Nama ini akan muncul di halaman "Template Saya" Anda.
                        </p>
                    </div>

                    {/* Footer buttons */}
                    <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSaving}
                            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition border border-transparent disabled:opacity-50"
                        >
                            Batal
                        </button>

                        <button
                            type="submit"
                            disabled={isSaving || !name.trim()}
                            className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-amber-500 hover:bg-amber-600 shadow-md shadow-amber-500/20 transition flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                        >
                            {isSaving ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                                    <span>Menyimpan Draft...</span>
                                </>
                            ) : (
                                <>
                                    <Save className="h-4 w-4" />
                                    <span>Simpan Draft</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
