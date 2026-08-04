import { Outlet } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '@hooks';
import { Spinner } from '@components/ui';

export default function AppLayout() {
    const { user, logout, isLoggingOut } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                            {user?.name || 'User'}
                        </p>
                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                    </div>

                    <button
                        onClick={() => logout()}
                        disabled={isLoggingOut}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                        title="Logout"
                        aria-label="Logout"
                    >
                        {isLoggingOut ? <Spinner size="sm" /> : <LogOut className="h-4 w-4" />}
                        <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
                    </button>
                </div>
            </header>

            <main className="overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}
