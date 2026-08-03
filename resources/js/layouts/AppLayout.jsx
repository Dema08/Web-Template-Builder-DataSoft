import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Globe, Settings, Shield, LogOut } from 'lucide-react';
import { ROUTES } from '@constants';
import { useAuthStore } from '@store';

const navItems = [
    { to: ROUTES.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { to: ROUTES.BUILDER, label: 'Website Builder', icon: Globe },
    { to: ROUTES.SETTINGS, label: 'Settings', icon: Settings },
    { to: ROUTES.ADMIN, label: 'Admin', icon: Shield, adminOnly: true },
];

export default function AppLayout() {
    const user = useAuthStore((state) => state.user);
    const clearSession = useAuthStore((state) => state.clearSession);

    const items = user?.role === 'admin' ? navItems : navItems.filter((item) => !item.adminOnly);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="px-4 py-6 border-b border-gray-200">
                    <h1 className="text-lg font-bold text-gray-900">CP Website Builder</h1>
                </div>

                <nav className="flex-1 px-2 py-4 space-y-1">
                    {items.map(({ to, label, icon: Icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                                    isActive
                                        ? 'bg-indigo-50 text-indigo-700'
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`
                            }
                        >
                            <Icon className="h-5 w-5" />
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <div className="px-4 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {user?.name || 'User'}
                            </p>
                            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                        </div>
                        <button
                            onClick={clearSession}
                            className="p-2 text-gray-400 hover:text-gray-600"
                            title="Logout"
                            aria-label="Logout"
                        >
                            <LogOut className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}
