import { useRef, useState } from 'react';
import { Camera, Loader2 } from 'lucide-react';
import { toast } from '@store';
import websiteApi from '@api/website';

export default function UploadThumbnailButton({
    website,
    onSuccess,
    className = '',
    children,
}) {
    const inputRef = useRef(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = async (event) => {
        const file = event.target.files?.[0];
        event.target.value = '';
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            toast.error('Format harus JPG, PNG, WEBP, atau GIF.', 'File Tidak Valid');
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            toast.error('Ukuran gambar maksimal 5 MB.', 'File Terlalu Besar');
            return;
        }

        setIsUploading(true);
        let uploadedWebsite;
        try {
            uploadedWebsite = await websiteApi.uploadWebsiteThumbnail(website.id, file);
        } catch (error) {
            const message = error.response?.data?.errors?.thumbnail?.[0]
                || error.response?.data?.message
                || 'Gagal mengupload gambar.';
            toast.error(message, 'Upload Gagal');
            return;
        } finally {
            setIsUploading(false);
        }

        try {
            await onSuccess?.(uploadedWebsite);
        } catch (error) {
            const message = error?.message || 'terjadi kesalahan saat memuat ulang data.';
            toast.error(`Thumbnail berhasil diupload, tetapi ${message}`, 'Upload Berhasil');
        }
    };

    return (
        <>
            <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                className="hidden"
                onChange={handleFileChange}
                disabled={isUploading}
            />
            <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={isUploading || !website?.id}
                className={className}
                title="Unggah thumbnail"
            >
                {isUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : (children || <Camera className="h-4 w-4" />)}
            </button>
        </>
    );
}
