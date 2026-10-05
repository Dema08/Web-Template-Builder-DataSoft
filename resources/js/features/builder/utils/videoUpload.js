import http from '@shared/api/http';

/**
 * videoUpload.js — Upload video background yang ringan untuk server.
 *
 * MASALAH LAMA:
 * - File 50MB dibaca via FileReader.readAsDataURL -> string base64 ~66MB
 *   disimpan di Zustand + localStorage + draft_json (DB). Browser ngelag,
 *   save content raksasa, server berat.
 *
 * SOLUSI BARU (kualitas 100% terjaga, server ringan):
 * 1. Preview INSTAN via URL.createObjectURL (blob lokal, tanpa base64,
 *    tanpa upload dulu, tanpa memori raksasa). revoke setelah upload.
 * 2. Upload STREAMING multipart/form-data langsung ke
 *    POST /api/v1/website/assets (disk `websites`, file statis).
 *    Progress via onUploadProgress + bisa cancel (AbortController).
 * 3. Yang disimpan di section.background.video.url = URL FILE STATIS
 *    (string pendek, cth /storage/websites/videos/xxx.mp4), BUKAN base64.
 *    Browser memutar via HTTP Range Requests (progressive streaming) ->
 *    tidak download 50MB sekaligus. Tag <video> wajib preload="metadata".
 * 4. Poster (thumbnail frame pertama) dibuat lokal via <canvas> agar
 *    inspector/modal menampilkan gambar ringan, bukan autoplay video penuh.
 */

export const VIDEO_LIMITS = {
  maxBytes: 50 * 1024 * 1024,
  maxLabel: '50 MB',
  allowedMime: ['video/mp4', 'video/webm', 'video/ogg'],
  allowedExt: ['mp4', 'webm', 'ogg'],
};

export const formatBytes = (bytes = 0) => {
  if (!bytes || bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  let v = bytes;
  while (v >= 1024 && i < units.length - 1) { v /= 1024; i += 1; }
  return `${v >= 100 ? Math.round(v) : v.toFixed(1)} ${units[i]}`;
};

export function validateVideoFile(file) {
  if (!file) return { ok: false, message: 'File tidak ditemukan.' };
  const mimeOk = VIDEO_LIMITS.allowedMime.includes(file.type)
    || file.type.startsWith('video/');
  if (!mimeOk) {
    return { ok: false, message: 'Format video harus MP4 (H.264), WebM, atau OGG.' };
  }
  if (file.size > VIDEO_LIMITS.maxBytes) {
    return {
      ok: false,
      message: `Ukuran video maksimal ${VIDEO_LIMITS.maxLabel} agar streaming tetap ringan.`,
    };
  }
  return { ok: true };
}

/** Preview lokal instan tanpa base64. WAJIB direvoke via revokePreview(). */
export function createVideoPreview(file) {
  return URL.createObjectURL(file);
}

export function revokePreview(objectUrl) {
  try {
    if (objectUrl && objectUrl.startsWith('blob:')) URL.revokeObjectURL(objectUrl);
  } catch (_) { /* abaikan */ }
}

/**
 * Ambil 1 frame sebagai poster (dataURL JPEG kecil ~20-60KB) agar
 * inspector tidak perlu memutar video 50MB hanya untuk thumbnail.
 */
export function captureVideoPoster(file, atSecond = 0.5, maxWidth = 480) {
  return new Promise((resolve) => {
    try {
      const url = URL.createObjectURL(file);
      const video = document.createElement('video');
      video.muted = true;
      video.playsInline = true;
      video.preload = 'auto';
      video.src = url;
      const cleanup = () => revokePreview(url);
      video.onloadeddata = () => {
        try {
          video.currentTime = Math.min(atSecond, (video.duration || 1) - 0.1);
        } catch (_) { /* lanjut */ }
      };
      video.onseeked = () => {
        try {
          const scale = Math.min(1, maxWidth / (video.videoWidth || maxWidth));
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(2, Math.round((video.videoWidth || 320) * scale));
          canvas.height = Math.max(2, Math.round((video.videoHeight || 180) * scale));
          canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
          const poster = canvas.toDataURL('image/jpeg', 0.7);
          cleanup();
          resolve(poster);
        } catch (_) {
          cleanup();
          resolve('');
        }
      };
      video.onerror = () => { cleanup(); resolve(''); };
      // Timeout fallback: jangan gantung UI.
      setTimeout(() => { cleanup(); resolve(''); }, 8000);
    } catch (_) {
      resolve('');
    }
  });
}

/**
 * Upload streaming ke server dengan progress + cancel support.
 * @param {File} file
 * @param {{ onProgress?: (pct:number)=>void, signal?: AbortSignal, kind?: string }} opts
 * @returns {Promise<{url:string, poster?:string, size:number, mime:string, kind:string}>}
 */
export async function uploadVideoAsset(file, opts = {}) {
  const check = validateVideoFile(file);
  if (!check.ok) throw new Error(check.message);

  const formData = new FormData();
  formData.append('file', file);
  formData.append('kind', 'video');

  const params = new URLSearchParams(window.location.search);
  const websiteId = params.get('website_id');
  if (websiteId) formData.append('website_id', websiteId);

  const { data } = await http.post('/website/assets', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    signal: opts.signal,
    // Jangan biarkan axios JSON-stringify FormData; biarkan browser streaming.
    onUploadProgress: (evt) => {
      if (!opts.onProgress) return;
      const total = evt.total || file.size || 1;
      opts.onProgress(Math.min(99, Math.round((evt.loaded / total) * 100)));
    },
    // Timeout longgar untuk 50MB di koneksi lambat (10 menit).
    timeout: 10 * 60 * 1000,
    maxBodyLength: Infinity,
    maxContentLength: Infinity,
  });

  const payload = data?.data || {};
  if (!payload.url) throw new Error('Server tidak mengembalikan URL video.');
  if (opts.onProgress) opts.onProgress(100);
  return payload;
}

/** Props hemat-resource standar untuk SEMUA <video> background. */
export const LIGHT_VIDEO_PROPS = {
  preload: 'metadata',
  playsInline: true,
  disablePictureInPicture: true,
};
