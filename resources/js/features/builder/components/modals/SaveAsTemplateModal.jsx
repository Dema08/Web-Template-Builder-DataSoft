import { useState, useEffect, useRef } from 'react';
import { BookmarkPlus, Lock, Globe, X, Loader2, Image as ImageIcon, UploadCloud, Sparkles, Check, Trash2 } from 'lucide-react';
import { DEFAULT_TEMPLATE_BANNER } from '@shared/utils/templateHelpers';

export default function SaveAsTemplateModal({
    isOpen,
    onClose,
    onSave,
    isSaving = false,
}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [visibility, setVisibility] = useState('private');
    const [bannerOption, setBannerOption] = useState('default'); // 'default' | 'custom'
    const [bannerFile, setBannerFile] = useState(null);
    const [bannerPreviewUrl, setBannerPreviewUrl] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setName('');
            setDescription('');
            setVisibility('private');
            setBannerOption('default');
            setBannerFile(null);
            setBannerPreviewUrl(null);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('Ukuran file maksimal 5MB');
                return;
            }
            setBannerFile(file);
            setBannerPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleRemoveFile = (e) => {
        e.stopPropagation();
        setBannerFile(null);
        setBannerPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        onSave({
            name: name.trim(),
            description: description.trim(),
            visibility,
            bannerOption,
            bannerFile: bannerOption === 'custom' ? bannerFile : null,
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div
                className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-100 space-y-6 animate-in fade-in zoom-in-95 duration-150 relative max-h-[90vh] overflow-y-auto"
                role="dialog"
                aria-modal="true"
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100/80">
                            <BookmarkPlus className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                                Simpan sebagai Template
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">
                                Simpan desain saat ini sebagai template buatan Anda.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isSaving}
                        className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition shrink-0 disabled:opacity-50 cursor-pointer"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nama Template */}
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Nama Template <span className="text-rose-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Contoh: Landing Page Toko Online"
                            required
                            className="w-full h-10 px-3.5 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Deskripsi (Opsional)
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Tuliskan deskripsi singkat mengenai template ini..."
                            rows={2}
                            className="w-full p-3 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition resize-none"
                        />
                    </div>

                    {/* Banner Selection */}
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                            Banner / Thumbnail Template
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* Option 1: Default Banner Microdata */}
                            <div
                                onClick={() => setBannerOption('default')}
                                className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                                    bannerOption === 'default'
                                        ? 'bg-indigo-50/50 border-indigo-600 shadow-xs'
                                        : 'bg-white border-slate-200 hover:border-slate-300'
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="bannerOption"
                                                value="default"
                                                checked={bannerOption === 'default'}
                                                onChange={() => setBannerOption('default')}
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                            />
                                            <div className="flex items-center gap-1.5 text-slate-900 font-extrabold text-xs">
                                                <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
                                                <span>Default Microdata</span>
                                            </div>
                                        </div>
                                        {bannerOption === 'default' && (
                                            <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-full font-bold">
                                                Aktif
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                                        Gunakan banner default resmi dari Microdata.
                                    </p>
                                </div>

                                {/* Thumbnail preview image */}
                                <div className="relative rounded-xl overflow-hidden border border-slate-200 aspect-video bg-slate-100">
                                    <img
                                        src={DEFAULT_TEMPLATE_BANNER}
                                        alt="Default Banner Microdata"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-2">
                                        <span className="text-[10px] font-bold text-white flex items-center gap-1">
                                            <Sparkles className="h-3 w-3 text-amber-400" /> Microdata Official Banner
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Option 2: Upload Custom Banner */}
                            <div
                                onClick={() => {
                                    setBannerOption('custom');
                                    if (!bannerFile && fileInputRef.current) {
                                        fileInputRef.current.click();
                                    }
                                }}
                                className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                                    bannerOption === 'custom'
                                        ? 'bg-indigo-50/50 border-indigo-600 shadow-xs'
                                        : 'bg-white border-slate-200 hover:border-slate-300'
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="bannerOption"
                                                value="custom"
                                                checked={bannerOption === 'custom'}
                                                onChange={() => setBannerOption('custom')}
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                            />
                                            <div className="flex items-center gap-1.5 text-slate-900 font-extrabold text-xs">
                                                <UploadCloud className="h-3.5 w-3.5 text-indigo-600" />
                                                <span>Upload Custom</span>
                                            </div>
                                        </div>
                                        {bannerOption === 'custom' && (
                                            <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-full font-bold">
                                                Aktif
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
                                        Upload gambar banner khusus dari perangkat Anda.
                                    </p>
                                </div>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />

                                {bannerPreviewUrl ? (
                                    <div className="relative rounded-xl overflow-hidden border border-indigo-200 aspect-video group">
                                        <img
                                            src={bannerPreviewUrl}
                                            alt="Custom Banner Preview"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    fileInputRef.current?.click();
                                                }}
                                                className="px-2.5 py-1 bg-white text-slate-800 text-[10px] font-bold rounded-lg shadow-sm"
                                            >
                                                Ganti
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleRemoveFile}
                                                className="p-1.5 bg-rose-600 text-white rounded-lg shadow-sm hover:bg-rose-700"
                                                title="Hapus gambar"
                                            >
                                                <Trash2 className="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setBannerOption('custom');
                                            fileInputRef.current?.click();
                                        }}
                                        className="rounded-xl border-2 border-dashed border-slate-200 hover:border-indigo-400 aspect-video flex flex-col items-center justify-center p-3 text-center transition bg-slate-50 hover:bg-indigo-50/30"
                                    >
                                        <UploadCloud className="h-6 w-6 text-indigo-500 mb-1" />
                                        <span className="text-[11px] font-bold text-indigo-600">
                                            Klik untuk Upload Gambar
                                        </span>
                                        <span className="text-[9px] text-slate-400 mt-0.5">
                                            PNG, JPG, WebP (Maks 5MB)
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Visibility Choice */}
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                            Akses & Visibilitas Template
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {/* Private Choice */}
                            <div
                                onClick={() => setVisibility('private')}
                                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                                    visibility === 'private'
                                        ? 'bg-indigo-50/50 border-indigo-600 shadow-sm'
                                        : 'bg-white border-slate-200 hover:border-slate-300'
                                }`}
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <input
                                        type="radio"
                                        name="visibility"
                                        value="private"
                                        checked={visibility === 'private'}
                                        onChange={() => setVisibility('private')}
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                    />
                                    <div className="flex items-center gap-1.5 text-slate-900 font-extrabold text-xs">
                                        <Lock className="h-3.5 w-3.5 text-slate-600" />
                                        <span>Private</span>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-relaxed pl-5">
                                    Hanya Anda yang dapat melihat dan menggunakan template ini.
                                </p>
                            </div>

                            {/* Public Choice */}
                            <div
                                onClick={() => setVisibility('public')}
                                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                                    visibility === 'public'
                                        ? 'bg-indigo-50/50 border-indigo-600 shadow-sm'
                                        : 'bg-white border-slate-200 hover:border-slate-300'
                                }`}
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <input
                                        type="radio"
                                        name="visibility"
                                        value="public"
                                        checked={visibility === 'public'}
                                        onChange={() => setVisibility('public')}
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                    />
                                    <div className="flex items-center gap-1.5 text-emerald-700 font-extrabold text-xs">
                                        <Globe className="h-3.5 w-3.5 text-emerald-600" />
                                        <span>Publik</span>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-relaxed pl-5">
                                    Dapat dilihat dan digunakan oleh semua pengguna di galeri.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer buttons */}
                    <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSaving}
                            className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition border border-transparent disabled:opacity-50 cursor-pointer"
                        >
                            Batal
                        </button>

                        <button
                            type="submit"
                            disabled={isSaving || !name.trim()}
                            className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition flex items-center gap-2 disabled:opacity-50 cursor-pointer"
                        >
                            {isSaving ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                                    <span>Menyimpan...</span>
                                </>
                            ) : (
                                <>
                                    <BookmarkPlus className="h-4 w-4" />
                                    <span>Simpan Template</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
