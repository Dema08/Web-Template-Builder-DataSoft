import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@store';
import { ROUTES, TOKEN_STORAGE_KEY } from '@constants';

/**
 * Protects routes: redirects unauthenticated users to /login.
 */
export function ProtectedRoute({ children }) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    return children;
}

/**
 * Redirects authenticated users away from guest pages (login/register).
 * If clear_session parameter is present, clears existing auth state to force login.
 */
export function GuestRoute({ children }) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const user = useAuthStore((state) => state.user);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('clear_session') === '1' || searchParams.get('logout') === '1') {
        useAuthStore.getState().clearSession();
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        localStorage.removeItem('cpwb_user');
        return children;
    }

    if (isAuthenticated) {
        const targetRoute = user?.role === 'admin' ? ROUTES.ADMIN_DASHBOARD : ROUTES.DASHBOARD;
        return <Navigate to={targetRoute} replace />;
    }

    return children;
}

/**
 * Protects admin routes: requires the user to have an admin role.
 */
export function AdminRoute({ children }) {
    const user = useAuthStore((state) => state.user);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace />;
    }

    if (!user || user.role !== 'admin') {
        return <Navigate to={ROUTES.DASHBOARD} replace />;
    }

    return children;
}
