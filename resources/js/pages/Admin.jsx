import { ShieldAlert } from 'lucide-react';

export default function Admin() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Admin Panel</h1>
            <p className="text-sm text-gray-600 mb-8">Manage platform users and websites.</p>

            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
                <ShieldAlert className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h2 className="text-lg font-semibold text-gray-900">Admin features coming soon</h2>
                <p className="mt-2 text-sm text-gray-600">
                    User management, site moderation, and platform analytics will be available in a future feature.
                </p>
            </div>
        </div>
    );
}
