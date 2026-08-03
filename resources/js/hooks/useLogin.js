import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi } from '@api';
import { ROUTES } from '@constants';
import { useAuthStore } from '@store';

/**
 * useLogin
 *
 * Logs the user in, persists the session token + user in the
 * Zustand auth store, and redirects to the dashboard.
 */
export function useLogin() {
    const navigate = useNavigate();
    const setSession = useAuthStore((state) => state.setSession);

    return useMutation({
        mutationFn: (credentials) => authApi.login(credentials),
        onSuccess: (session) => {
            setSession(session);
            navigate(ROUTES.DASHBOARD, { replace: true });
        },
    });
}
