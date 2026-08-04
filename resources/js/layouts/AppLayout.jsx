import { Outlet } from 'react-router-dom';

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-gray-50">
            <main className="h-screen overflow-hidden">
                <Outlet />
            </main>
        </div>
    );
}
