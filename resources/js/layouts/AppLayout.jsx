import { Outlet } from 'react-router-dom';

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-slate-100 antialiased selection:bg-blue-500 selection:text-white">
            <Outlet />
        </div>
    );
}
