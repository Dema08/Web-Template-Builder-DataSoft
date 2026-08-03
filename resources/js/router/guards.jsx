import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@store';
import { ROUTES } from '@constants';

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
 */
export function GuestRoute({ children }) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to={ROUTES.DASHBOARD} replace />;
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
