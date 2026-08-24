import { useAuth } from '@hooks';
import AdminDashboard from '@features/admin/pages/AdminDashboard';
import UserDashboard from '@features/user/pages/UserDashboard';

export default function Dashboard() {
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin';

    if (isAdmin) {
        return <AdminDashboard />;
    }

    return <UserDashboard />;
}
