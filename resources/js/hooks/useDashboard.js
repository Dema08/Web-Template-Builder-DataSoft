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
    const userRole = typeof user?.role === 'string' ? user?.role : user?.role?.value;
    const isAdmin = userRole === 'admin' || (typeof window !== 'undefined' && window.location.pathname.startsWith('/admin'));

    const query = useQuery({
        queryKey: [QUERY_KEYS.DASHBOARD, isAdmin ? 'admin' : 'user', params],
        queryFn: () => isAdmin
            ? dashboardApi.getAdminDashboard(params)
            : dashboardApi.getDashboard(params),
        staleTime: 5 * 1000,
        enabled: Boolean(user),
    });

    const payload = query.data?.data ?? query.data ?? {};

    return {
        ...query,
        ...payload,
        stats: payload.stats ?? query.data?.stats,
        websites: payload.websites ?? query.data?.websites,
        recentActivity: payload.recentActivity ?? query.data?.recentActivity,
    };
}
