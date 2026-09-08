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
