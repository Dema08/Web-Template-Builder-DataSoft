import { useQuery } from '@tanstack/react-query';
import { dashboardApi } from '@api';
import { QUERY_KEYS } from '@constants';

/**
 * Dashboard data hook.
 */
export function useDashboard() {
    return useQuery({
        queryKey: [QUERY_KEYS.DASHBOARD],
        queryFn: () => dashboardApi.getDashboard(),
        staleTime: 60 * 1000, // 1 minute
    });
}
