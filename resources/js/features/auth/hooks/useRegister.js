import { useMutation } from '@tanstack/react-query';
import { authApi } from '@api';
import { toast } from '@store';

/**
 * useRegister
 *
 * Registers a new user, shows a pending-approval toast.
 * Account is NOT active until approved by an admin.
 */
export function useRegister() {
    return useMutation({
        mutationFn: (payload) => authApi.register(payload),
        onSuccess: () => {
            toast.success(
                'Akun Anda telah terdaftar dan sedang menunggu persetujuan dari administrator. Anda akan diberi tahu setelah akun disetujui.',
                'Registrasi Berhasil – Menunggu Persetujuan'
            );
            setTimeout(() => {
                window.location.href = '/login';
            }, 1200);
        },
        onError: (error) => {
            toast.error(
                error?.response?.data?.errors?.email?.[0] ||
                    error?.response?.data?.message ||
                    'Gagal membuat akun. Silakan periksa kembali data Anda.',
                'Registrasi Gagal'
            );
        },
    });
}
