import { useState, useEffect, useRef } from 'react';
import { Save, X, Loader2, BookmarkCheck, Image as ImageIcon, UploadCloud } from 'lucide-react';

/**
 * SaveDraftModal
 * Meminta nama dan banner opsional sebelum menyimpan atau memperbarui draft.
 */
export default function SaveDraftModal({
    isOpen,
    onClose,
    onSave,
    isSaving = false,
    initialName = '',
}) {
    const [name, setName] = useState(initialName);
    const [bannerFile, setBannerFile] = useState(null);
    const [bannerPreviewUrl, setBannerPreviewUrl] = useState('');
    const [bannerError, setBannerError] = useState('');
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setName(initialName);
            setBannerFile(null);
            setBannerError('');
        }
    }, [isOpen, initialName]);

    useEffect(() => {
        if (!bannerFile) {
            setBannerPreviewUrl('');
            return undefined;
        }
        const previewUrl = URL.createObjectURL(bannerFile);
        setBannerPreviewUrl(previewUrl);
        return () => URL.revokeObjectURL(previewUrl);
    }, [bannerFile]);

    if (!isOpen) return null;

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        event.target.value = '';
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            setBannerError('Format banner harus JPG, PNG, atau WEBP.');
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setBannerError('Ukuran banner maksimal 5 MB.');
            return;
        }
        setBannerError('');
        setBannerFile(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;
        onSave({ name: name.trim(), bannerFile });
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
                    {/* Nama Template */}
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

                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Banner Template <span className="font-normal text-slate-400">(Opsional)</span>
                        </label>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isSaving}
                            className="flex w-full items-center gap-3 rounded-xl border border-dashed border-amber-300 bg-amber-50 p-3 text-left transition hover:bg-amber-100 disabled:opacity-50"
                        >
                            {bannerPreviewUrl ? (
                                <img src={bannerPreviewUrl} alt="Preview banner" className="h-14 w-24 rounded-lg object-cover" />
                            ) : (
                                <span className="flex h-14 w-24 items-center justify-center rounded-lg bg-white text-amber-500">
                                    <ImageIcon className="h-6 w-6" />
                                </span>
                            )}
                            <span className="min-w-0 flex-1">
                                <span className="block text-xs font-bold text-amber-900">
                                    {bannerFile ? bannerFile.name : 'Gunakan banner default atau pilih gambar'}
                                </span>
                                <span className="mt-1 block text-[10px] text-amber-700">
                                    JPG, PNG, atau WEBP · Maksimal 5 MB
                                </span>
                            </span>
                            <UploadCloud className="h-4 w-4 shrink-0 text-amber-700" />
                        </button>
                        {bannerError && (
                            <p className="mt-1 text-[10px] font-semibold text-rose-600">{bannerError}</p>
                        )}
                        {bannerFile && (
                            <button
                                type="button"
                                onClick={() => setBannerFile(null)}
                                disabled={isSaving}
                                className="mt-1 text-[10px] font-semibold text-slate-500 hover:text-rose-600"
                            >
                                Hapus pilihan gambar
                            </button>
                        )}
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
