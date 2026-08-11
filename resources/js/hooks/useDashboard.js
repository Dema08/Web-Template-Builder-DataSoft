import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '@api';
import { QUERY_KEYS } from '@constants';
import { useAuthStore } from '@store';

/**
 * Dashboard data hook.
 * - Admins use /admin/dashboard-summary (not gated by maintenance middleware)
 * - Regular users use /dashboard (gated by maintenance middleware)
 */
export function useDashboard(params = {}) {
    const user = useAuthStore((state) => state.user);
    const isAdmin = user?.role === 'admin';

    const query = useQuery({
        queryKey: [QUERY_KEYS.DASHBOARD, isAdmin ? 'admin' : 'user', params],
        queryFn: () => isAdmin
            ? dashboardApi.getAdminDashboard(params)
            : dashboardApi.getDashboard(params),
        staleTime: 10 * 1000, // 10 seconds
        // Only fetch once we know the user's role
        enabled: Boolean(user),
    });

    return {
        ...query,
        ...(query.data || {}),
    };
}
