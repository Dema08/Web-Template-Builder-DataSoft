import { Link } from 'react-router-dom';
import { Globe, Settings, ArrowRight, ExternalLink } from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Spinner } from '@components/ui';
import { ROUTES } from '@constants';
import { useWebsite } from '@hooks';

export default function Dashboard() {
    const { user } = useAuth();
    const { data: dashboard, isLoading: isDashboardLoading } = useDashboard();
    const { website } = useWebsite();

    if (isDashboardLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <Spinner size="lg" />
            </div>
        );
    }

    const siteUrl = website?.published_url || null;

    return (
        <div className="p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name?.split(' ')[0] || 'there'}!</h1>
                <p className="mt-1 text-sm text-gray-600">Manage your company profile website from here.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Website status card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Globe className="h-6 w-6 text-indigo-600" />
                            <h2 className="font-semibold text-gray-900">Your Website</h2>
                        </div>
                    </div>
                    <div className="mt-4">
                        <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                website?.is_published
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-amber-100 text-amber-800'
                            }`}
                        >
                            {website?.is_published ? 'Published' : 'Draft'}
                        </span>
                        <p className="mt-2 text-sm text-gray-600">
                            {website?.name || 'Untitled website'}
                        </p>
                        {siteUrl && (
                            <a
                                href={siteUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-2 inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-500"
                            >
                                View live site <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                    <Link
                        to={ROUTES.BUILDER}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Open builder <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* Quick actions */}
            <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick actions</h2>
                <div className="flex flex-wrap gap-4">
                    <Link
                        to={ROUTES.BUILDER}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700"
                    >
                        <Globe className="h-4 w-4" /> Edit website
                    </Link>
                    <Link
                        to={ROUTES.SETTINGS}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50"
                    >
                        <Settings className="h-4 w-4" /> Website settings
                    </Link>
                </div>
            </div>
        </div>
    );
}
