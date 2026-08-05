import { Outlet } from 'react-router-dom';

export default function GuestLayout() {
    return (
        <div className="min-h-screen w-full bg-[rgb(var(--color-surface))] flex items-center justify-center p-4 sm:p-6 lg:p-8 antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300">
            <Outlet />
        </div>
    );
}
