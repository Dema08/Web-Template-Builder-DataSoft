import { useState, useRef, useEffect } from 'react';
import http from '@shared/api/http';
import { Loader2, X, UploadCloud } from 'lucide-react';

const CHUNK_SIZE = 5 * 1024 * 1024;
const MAX_FILE_SIZE = 50 * 1024 * 1024;

export function VideoBackgroundUploader({ websiteId, sectionId, initialVideoUrl, initialPosterUrl, onSuccess }) {
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [videoUrl, setVideoUrl] = useState(initialVideoUrl || null);
    const [dragging, setDragging] = useState(false);
    const inputRef = useRef(null);
    // Callback selalu dibaca dari ref terbaru + section id selalu dikirim balik,
    // supaya hasil upload tetap masuk ke section pemiliknya walaupun user
    // berpindah section saat video masih diproses.
    const onSuccessRef = useRef(onSuccess);

    useEffect(() => { onSuccessRef.current = onSuccess; }, [onSuccess]);
    useEffect(() => { setVideoUrl(initialVideoUrl || null); }, [initialVideoUrl]);

    const resolveWebsiteId = () => {
        if (websiteId) return websiteId;
        return new URLSearchParams(window.location.search).get('website_id');
    };

    const uploadChunked = async (file, activeSectionId) => {
        const activeWebsiteId = resolveWebsiteId();
        if (!activeWebsiteId) throw new Error('Website ID tidak ditemukan.');

        const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
        const uploadId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;

        for (let i = 0; i < totalChunks; i++) {
            const start = i * CHUNK_SIZE;
            const end = Math.min(start + CHUNK_SIZE, file.size);
            const chunk = file.slice(start, end);

            const formData = new FormData();
            formData.append('file', chunk, file.name);
            formData.append('dzchunkindex', i);
            formData.append('dztotalchunkcount', totalChunks);
            formData.append('dzuuid', uploadId);
            formData.append('dzchunksize', CHUNK_SIZE);
            formData.append('dztotalfilesize', file.size);
            // Video ini milik section mana (satu section = satu video, tidak
            // menimpa video section lain).
            if (activeSectionId) formData.append('section_id', activeSectionId);

            const { data } = await http.post(
                `/website/${activeWebsiteId}/video/upload`,
                formData,
                {
                    headers: { Accept: 'application/json', 'Content-Type': 'multipart/form-data' },
                    onUploadProgress: (e) => {
                        const chunkProgress = e.total ? (e.loaded / e.total) : 0;
                        const overall = ((i + chunkProgress) / totalChunks) * 100;
                        setProgress(Math.min(Math.round(overall), 99));
                    },
                }
            );

            const payload = data?.data ?? data;
            if (payload?.processing) {
                setProgress(100);
                setProcessing(true);
                break;
            }
        }

        return uploadId;
    };

    const pollStatus = async (uploadId, activeSectionId) => {
        const activeWebsiteId = resolveWebsiteId();
        for (let i = 0; i < 120; i++) {
            await new Promise((r) => setTimeout(r, 5000));
            try {
                const params = new URLSearchParams();
                if (uploadId) params.set('upload_id', uploadId);
                if (activeSectionId) params.set('section_id', activeSectionId);

                const { data } = await http.get(`/website/${activeWebsiteId}/video/status?${params.toString()}`);
                const payload = data?.data ?? data;

                if (payload?.failed) {
                    setError('Gagal memproses video. Coba upload ulang.');
                    setProcessing(false);
                    return;
                }

                if (payload?.video_url) {
                    setVideoUrl(payload.video_url);
                    setProcessing(false);
                    onSuccessRef.current?.(payload, activeSectionId);
                    return;
                }
            } catch (e) { /* keep polling */ }
        }
        setError('Timeout. Cek lagi nanti.');
        setProcessing(false);
    };

    const handleFile = async (file) => {
        if (!file) return;
        if (file.size > MAX_FILE_SIZE) {
            setError(`Maksimal 50MB. File: ${(file.size / 1024 / 1024).toFixed(1)}MB`);
            return;
        }
        if (!file.type.startsWith('video/')) {
            setError('File harus video.');
            return;
        }
        setError(null);
        setUploading(true);
        setProgress(0);
        try {
            const uploadId = await uploadChunked(file, sectionId || null);
            setUploading(false);
            await pollStatus(uploadId, sectionId || null);
        } catch (err) {
            const serverMsg = err.response?.data?.message;
            setError(err.message || serverMsg || 'Upload gagal.');
            setUploading(false);
            setProcessing(false);
        }
    };

    // Kalau section ini videonya masih diproses (mis. user berpindah section
    // lalu kembali), lanjutkan polling supaya hasilnya tidak hilang.
    useEffect(() => {
        if (initialVideoUrl || !sectionId) return;

        let cancelled = false;

        (async () => {
            const activeWebsiteId = resolveWebsiteId();
            if (!activeWebsiteId) return;

            try {
                const { data } = await http.get(`/website/${activeWebsiteId}/video/status?section_id=${encodeURIComponent(sectionId)}`);
                const payload = data?.data ?? data;

                // Jangan pakai data section lain (endpoint punya fallback global).
                if (cancelled || payload?.section_id !== sectionId) return;

                if (payload?.processing) {
                    setProcessing(true);
                    pollStatus(null, sectionId);
                } else if (payload?.video_url) {
                    setVideoUrl(payload.video_url);
                    onSuccessRef.current?.(payload, sectionId);
                }
            } catch (e) { /* abaikan, biarkan user upload manual */ }
        })();

        return () => { cancelled = true; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionId, initialVideoUrl]);

    const handleDelete = async () => {
        const activeWebsiteId = resolveWebsiteId();
        const targetSectionId = sectionId || null;
        try {
            const query = targetSectionId ? `?section_id=${encodeURIComponent(targetSectionId)}` : '';
            await http.delete(`/website/${activeWebsiteId}/video${query}`);
            setVideoUrl(null);
            onSuccessRef.current?.(null, targetSectionId);
        } catch (err) { setError('Gagal hapus.'); }
    };

    return (
        <div className="space-y-2">
            <input ref={inputRef} type="file" accept="video/mp4,video/webm,video/quicktime" onChange={(e) => handleFile(e.target.files?.[0])} className="hidden" />
            {!uploading && !processing && !videoUrl && (
                <div onDragOver={(e) => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files?.[0]); }} onClick={() => inputRef.current?.click()} className={`border-2 border-dashed rounded p-3 cursor-pointer flex flex-col items-center gap-1 text-center ${dragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:bg-gray-50'}`}>
                    <UploadCloud className="w-5 h-5 text-gray-400" />
                    <span className="text-xs text-gray-600">Upload video background</span>
                    <span className="text-[10px] text-gray-400">Maks 50MB</span>
                </div>
            )}
            {uploading && (
                <div className="space-y-1">
                    <div className="flex justify-between text-xs"><span>Upload...</span><span>{progress}%</span></div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5"><div className="bg-blue-500 h-1.5 rounded-full transition-all" style={{ width: `${progress}%` }} /></div>
                </div>
            )}
            {processing && (
                <div className="flex items-center gap-2 text-xs text-blue-600 p-2 bg-blue-50 rounded"><Loader2 className="w-3 h-3 animate-spin" /><span>Memproses video...</span></div>
            )}
            {videoUrl && (
                <div className="space-y-1">
                    <video src={videoUrl} controls muted loop className="w-full rounded max-h-32 bg-black" />
                    <div className="flex gap-1">
                        <button type="button" onClick={() => inputRef.current?.click()} className="flex-1 text-xs py-1.5 border rounded hover:bg-gray-50">Ganti</button>
                        <button type="button" onClick={handleDelete} className="px-2 py-1.5 border rounded hover:bg-red-50 text-red-600"><X className="w-3 h-3" /></button>
                    </div>
                </div>
            )}
            {error && <p className="text-xs text-red-600 bg-red-50 p-1.5 rounded">{error}</p>}
        </div>
    );
}

export default VideoBackgroundUploader;

