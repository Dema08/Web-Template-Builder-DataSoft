import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi, settingsApi } from '@api';
import { ROUTES } from '@constants';
import { useAuthStore, useSettingsStore, toast } from '@store';

/**
 * useLogin
 *
 * Logs the user in, persists the session token + user in the
 * Zustand auth store, loads full system settings into the
 * global settings store, and redirects to the dashboard.
 */
export function useLogin() {
    const navigate = useNavigate();
    const setSession = useAuthStore((state) => state.setSession);
    const loadSettings = useSettingsStore((state) => state.loadSettings);

    return useMutation({
        mutationFn: (credentials) => authApi.login(credentials),
        onSuccess: (session) => {
            setSession(session);
            toast.success(`Welcome back, ${session.user?.name?.split(' ')[0] || 'there'}!`, 'Signed in');

            // Load full admin settings so the entire UI updates instantly
            settingsApi.getSettings().then((settings) => {
                loadSettings(settings);
            }).catch(() => {
                // Silently fail — defaults are acceptable
            });

            const targetRoute = session.user?.role === 'admin' ? ROUTES.ADMIN_DASHBOARD : ROUTES.DASHBOARD;
            navigate(targetRoute, { replace: true });
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || 'Unable to sign in. Please try again.', 'Sign in failed');
        },
    });
}