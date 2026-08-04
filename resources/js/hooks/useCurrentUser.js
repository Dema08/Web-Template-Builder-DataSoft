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
        // Use a distinct key to avoid conflicting with useProfile which also uses ['user']
        queryKey: ['current-user'],
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
