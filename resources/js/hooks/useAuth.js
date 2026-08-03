import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi } from '@api';
import { QUERY_KEYS, ROUTES } from '@constants';
import { useAuthStore } from '@store';
import { useNavigate } from 'react-router-dom';

/**
 * Auth hooks backed by TanStack Query + Zustand.
 */
export function useAuth() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { setSession, clearSession, user } = useAuthStore();

    // Fetch the current user on mount / page refresh.
    const { data: currentUser, isLoading, isError } = useQuery({
        queryKey: [QUERY_KEYS.USER],
        queryFn: () => authApi.user(),
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: false,
    });

    // Login mutation.
    const loginMutation = useMutation({
        mutationFn: (credentials) => authApi.login(credentials),
        onSuccess: (session) => {
            setSession(session);
            queryClient.setQueryData([QUERY_KEYS.USER], session.user);
            navigate(ROUTES.DASHBOARD);
        },
    });

    // Register mutation.
    const registerMutation = useMutation({
        mutationFn: (payload) => authApi.register(payload),
        onSuccess: (session) => {
            setSession(session);
            queryClient.setQueryData([QUERY_KEYS.USER], session.user);
            navigate(ROUTES.DASHBOARD);
        },
    });

    // Logout mutation.
    const logoutMutation = useMutation({
        mutationFn: () => authApi.logout(),
        onSuccess: () => {
            clearSession();
            queryClient.clear();
            navigate(ROUTES.LOGIN);
        },
    });

    return {
        user: currentUser ?? user,
        isLoading,
        isError,
        isAuthenticated: Boolean(currentUser ?? user),
        login: loginMutation.mutate,
        register: registerMutation.mutate,
        logout: logoutMutation.mutate,
        isLoggingIn: loginMutation.isPending,
        isRegistering: registerMutation.isPending,
        isLoggingOut: logoutMutation.isPending,
        loginError: loginMutation.error,
        registerError: registerMutation.error,
    };
}
