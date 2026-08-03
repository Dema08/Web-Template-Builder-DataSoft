import { Outlet } from 'react-router-dom';
import { Logo } from '@components/ui';

export default function GuestLayout() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                <Logo className="mb-8" />
                <Outlet />
            </div>
        </div>
    );
}
