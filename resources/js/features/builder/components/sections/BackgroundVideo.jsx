import { useEffect, useRef } from 'react';

/**
 * BackgroundVideo — pemutar background hemat resource.
 *
 * Kenapa ringan meski file 50MB:
 * - preload="metadata": browser hanya ambil header, bukan seluruh file.
 * - File statis server (/storage/...) diputar via HTTP Range Requests
 *   (progressive streaming) — tidak download 50MB sekaligus.
 * - Lazy-play: video di luar viewport di-pause otomatis via IntersectionObserver.
 * - muted + playsInline agar autoplay diizinkan browser tanpa gestur user.
 * - Kualitas 100% terjaga (tanpa re-encode / kompresi).
 */
export default function BackgroundVideo({ video, className = '' }) {
  const ref = useRef(null);
  const url = video?.url || '';
  const shouldAutoplay = video?.autoplay ?? true;
  const isUnplayable = !url || url.startsWith('data:video');

  useEffect(() => {
    if (isUnplayable) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          try {
            if (entry.isIntersecting) {
              if (shouldAutoplay && el.paused) el.play()?.catch(() => {});
            } else if (!el.paused) {
              el.pause();
            }
          } catch (_) {}
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [url, shouldAutoplay, isUnplayable]);

  // Base64 video TIDAK dirender — itu biang server berat. Minta upload ulang via streaming.
  if (isUnplayable) return null;

  // Blob preview lokal (belum upload selesai) tetap bisa diputar di kanvas editor.
  return (
    <video
      ref={ref}
      className={className}
      src={url}
      poster={video?.poster || undefined}
      preload="metadata"
      autoPlay={shouldAutoplay}
      loop={video?.loop ?? true}
      muted
      playsInline
      disablePictureInPicture
    />
  );
}
