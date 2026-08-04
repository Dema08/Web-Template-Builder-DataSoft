import { useMutation } from '@tanstack/react-query';
import { authApi } from '@api';
import { toast } from '@store';

/**
 * useRegister
 *
 * Registers a new user, shows a success toast, then navigates to /login.
 */
export function useRegister() {
    return useMutation({
        mutationFn: (payload) => authApi.register(payload),
        onSuccess: () => {
            toast.success('Akun Anda berhasil dibuat. Silakan login.', 'Registrasi Berhasil');
            setTimeout(() => {
                window.location.href = '/login';
            }, 400);
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
