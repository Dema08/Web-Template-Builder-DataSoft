import { useQuery } from '@tanstack/react-query';
import { authApi } from '@api';
import { QUERY_KEYS } from '@constants';
import { useAuthStore } from '@store';

/**
 * useCurrentUser
 *
 * Fetches the authenticated user via /auth/me and keeps the
 * Zustand store in sync. Used to hydrate the session on refresh.
 */
export function useCurrentUser() {
    const setUser = useAuthStore((state) => state.setUser);

    return useQuery({
        queryKey: [QUERY_KEYS.USER],
        queryFn: async () => {
            const user = await authApi.me();
            setUser(user);
            return user;
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: false,
        enabled: Boolean(useAuthStore.getState().isAuthenticated),
    });
}
