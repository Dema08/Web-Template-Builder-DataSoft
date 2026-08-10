import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '@api';
import { QUERY_KEYS } from '@constants';

/**
 * Dashboard data hook.
 */
export function useDashboard(params = {}) {
    const query = useQuery({
        queryKey: [QUERY_KEYS.DASHBOARD, params],
        queryFn: () => dashboardApi.getDashboard(params),
        staleTime: 10 * 1000, // 10 seconds
    });

    return {
        ...query,
        ...(query.data || {}),
    };
}
