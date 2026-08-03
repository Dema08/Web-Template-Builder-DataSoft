import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi } from '@api';
import { ROUTES } from '@constants';

/**
 * useRegister
 *
 * Registers a new user, then redirects to the login page
 * (spec: registration does NOT auto-authenticate).
 */
export function useRegister() {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (payload) => authApi.register(payload),
        onSuccess: () => {
            navigate(ROUTES.LOGIN, { replace: true });
        },
    });
}
