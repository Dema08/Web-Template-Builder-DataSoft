import { useState, useRef, useCallback } from 'react';
import { Upload, Link2, X, ImageIcon, CheckCircle2 } from 'lucide-react';

/**
 * ThumbnailUploader
 *
 * Props:
 *  - value        : string  (current URL value — either a remote URL or object URL for preview)
 *  - onChange     : (url: string) => void   (called with final URL or object URL for preview)
 *  - onFileSelect : (file: File) => void    (called when user picks a local file — parent handles actual upload)
 *  - error        : string | null
 *  - label        : string
 *  - required     : bool
 */
export default function ThumbnailUploader({
    value = '',
    onChange,
    onFileSelect,
    error,
    label = 'Thumbnail',
    required = false,
}) {
    const [mode, setMode] = useState('url'); // 'url' | 'upload'
    const [isDragging, setIsDragging] = useState(false);
    const [localFile, setLocalFile] = useState(null);
    const fileRef = useRef(null);

    const handleFileChange = (file) => {
        if (!file) return;
        const objectUrl = URL.createObjectURL(file);
        setLocalFile(file);
        onChange(objectUrl);
        onFileSelect?.(file);
    };

    const handleInputFile = (e) => {
        const file = e.target.files?.[0];
        if (file) handleFileChange(file);
    };

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) handleFileChange(file);
    }, []);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    const clearSelection = () => {
        setLocalFile(null);
        onChange('');
        if (fileRef.current) fileRef.current.value = '';
    };

    return (
        <div className="space-y-2">
            {/* Label */}
            <label className="block text-xs font-bold text-slate-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            {/* Mode tabs */}
            <div className="flex gap-1 bg-slate-100 rounded-xl p-1 w-fit">
                <button
                    type="button"
                    onClick={() => setMode('url')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition ${
                        mode === 'url'
                            ? 'bg-white text-indigo-700 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                    <Link2 className="h-3 w-3" /> URL
                </button>
                <button
                    type="button"
                    onClick={() => setMode('upload')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition ${
                        mode === 'upload'
                            ? 'bg-white text-indigo-700 shadow-sm'
                            : 'text-slate-500 hover:text-slate-700'
                    }`}
                >
                    <Upload className="h-3 w-3" /> Upload File
                </button>
            </div>

            {/* URL mode */}
            {mode === 'url' && (
                <input
                    type="text"
                    value={value.startsWith('blob:') ? '' : value}
                    onChange={(e) => { setLocalFile(null); onChange(e.target.value); }}
                    placeholder="https://example.com/thumbnail.jpg"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs text-slate-800
                        focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600
                        ${error ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                />
            )}

            {/* Upload mode */}
            {mode === 'upload' && (
                <div>
                    <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleInputFile}
                    />
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onClick={() => !localFile && fileRef.current?.click()}
                        className={`relative border-2 border-dashed rounded-2xl transition cursor-pointer select-none
                            ${isDragging
                                ? 'border-indigo-500 bg-indigo-50'
                                : localFile
                                    ? 'border-emerald-400 bg-emerald-50'
                                    : 'border-slate-300 bg-slate-50 hover:border-indigo-400 hover:bg-indigo-50/50'
                            }
                            ${error ? 'border-red-400 bg-red-50' : ''}`}
                    >
                        {localFile ? (
                            <div className="flex items-center gap-3 px-4 py-3">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold text-emerald-800 truncate">{localFile.name}</p>
                                    <p className="text-[10px] text-emerald-600">{(localFile.size / 1024).toFixed(1)} KB</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); clearSelection(); }}
                                    className="p-1 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                                >
                                    <X className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center py-6 gap-2 text-center">
                                <div className="p-3 bg-slate-100 rounded-xl">
                                    <Upload className="h-5 w-5 text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-700">Drag & drop gambar di sini</p>
                                    <p className="text-[10px] text-slate-400 mt-0.5">atau klik untuk memilih file</p>
                                </div>
                                <p className="text-[10px] text-slate-400">PNG, JPG, WebP — maks. 5 MB</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Preview */}
            {value && (
                <div className="flex items-start gap-3 mt-2">
                    <div className="w-20 h-14 rounded-xl border border-slate-200 overflow-hidden shrink-0 bg-slate-100">
                        <img
                            src={value}
                            alt="thumbnail preview"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.innerHTML = `<div class="w-full h-full flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>`;
                            }}
                        />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Preview</p>
                        <p className="text-[10px] text-slate-400 mt-0.5 break-all line-clamp-2">
                            {localFile ? localFile.name : value}
                        </p>
                        {localFile && (
                            <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold">
                                ⚡ Akan diupload saat simpan
                            </span>
                        )}
                    </div>
                </div>
            )}

            {error && (
                <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                    <span>⚠️</span> {error}
                </p>
            )}
        </div>
    );
}
