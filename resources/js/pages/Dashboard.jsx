import { useAuth } from '@hooks';
import AdminDashboard from './admin/AdminDashboard';
import UserDashboard from './user/UserDashboard';

export default function Dashboard() {
    const { user } = useAuth();
    const isAdmin = user?.role === 'admin';

    if (isAdmin) {
        return <AdminDashboard />;
    }

    return <UserDashboard />;
}
