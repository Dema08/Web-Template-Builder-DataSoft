import { useEffect } from 'react';

/**
 * useMobileNavClose
 *
 * Perilaku standar dropdown navbar mobile untuk SEMUA starter-template:
 * - Menutup dropdown saat tombol Escape ditekan.
 * - Menutup dropdown otomatis saat salah satu link/tombol di dalamnya diklik
 *   (menu tidak nyangkut terbuka setelah navigasi anchor).
 *
 * @param {boolean} isOpen - state terbuka/tutup dari navbar.
 * @param {Function} setOpen - setter state (dipanggil dengan `false`).
 */
export function useMobileNavClose(isOpen, setOpen) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    const handleDocumentClick = (e) => {
      const target = e.target;
      if (target && typeof target.closest === 'function' && target.closest('a[href]')) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen, setOpen]);
}

export default useMobileNavClose;
