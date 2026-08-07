import { Link } from 'react-router-dom';
import {
    Sparkles,
    Globe,
    Activity,
    ArrowRight,
    ChevronRight,
} from 'lucide-react';
import { useAuth, useDashboard } from '@hooks';
import { Spinner, Card } from '@components/ui';
import { ROUTES } from '@constants';
import { useSettingsStore } from '@store';

const templateCards = [
    { title: 'Architectural Vanguard', subtitle: 'Premium • Business', accent: 'from-indigo-100 via-white to-white' },
    { title: 'Street Style Hub', subtitle: 'Free • E-commerce', accent: 'from-slate-100 via-white to-white' },
    { title: 'SaaS Foundation', subtitle: 'Premium • Tech', accent: 'from-blue-100 via-white to-white' },
    { title: 'Noir Portfolio', subtitle: 'Premium • Photography', accent: 'from-zinc-100 via-white to-white' },
];

export default function UserDashboard() {
    const { user } = useAuth();
    const { websites, isLoading } = useDashboard();
    const { brand_name } = useSettingsStore();

    const firstName = user?.name?.split(' ')[0] || 'User';
    const myWebsite = websites?.[0];

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Welcome Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                        Welcome back, {firstName}
                    </h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                        Here's what's happening with your websites today.
                    </p>
                </div>
                <Link
                    to={ROUTES.ONBOARDING}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition shadow-md shadow-blue-600/20"
                >
                    <Sparkles className="h-4 w-4" />
                    Create New Site
                </Link>
            </div>

            {/* Website Summary Card */}
            <Card className="p-6 flex flex-col justify-between">
                <div>
                    <div className="mb-4 flex items-center justify-between gap-4">
                        <div>
                            <p className="text-xs font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">Website Summary</p>
                            <h2 className="text-2xl font-extrabold text-[rgb(var(--color-text-primary))] mt-1">{myWebsite?.name || 'My Company Profile'}</h2>
                        </div>
                        <span className="rounded-full bg-[rgb(var(--color-surface-alt))] px-3 py-1 text-xs font-bold text-[rgb(var(--color-text-primary))]">
                            {myWebsite?.is_published ? 'Published' : 'Draft'}
                        </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 mt-4">
                        <div className="p-4 bg-[rgb(var(--color-surface-alt))] rounded-xl">
                            <p className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider mb-1">Template</p>
                            <p className="text-sm font-extrabold text-[rgb(var(--color-text-primary))]">{myWebsite?.template || 'Corporate Pro v2'}</p>
                        </div>
                        <div className="p-4 bg-[rgb(var(--color-surface-alt))] rounded-xl">
                            <p className="text-[10px] font-bold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider mb-1">Subdomain</p>
                            <p className="text-sm font-extrabold text-[rgb(var(--color-text-primary))]">{myWebsite?.subdomain || 'mycompany'}</p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Quick Actions & Templates */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Quick Actions */}
                <Card className="p-6">
                    <h3 className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                        <Link to={ROUTES.BUILDER} className="flex items-center gap-3 p-3 bg-[rgb(var(--color-surface-alt))] rounded-xl hover:bg-indigo-50 transition">
                            <Globe className="h-5 w-5 text-indigo-600" />
                            <div>
                                <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Edit Website</p>
                                <p className="text-[10px] text-[rgb(var(--color-text-secondary))]">Open in builder</p>
                            </div>
                        </Link>
                        <Link to={ROUTES.TEMPLATES} className="flex items-center gap-3 p-3 bg-[rgb(var(--color-surface-alt))] rounded-xl hover:bg-indigo-50 transition">
                            <Activity className="h-5 w-5 text-indigo-600" />
                            <div>
                                <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Browse Templates</p>
                                <p className="text-[10px] text-[rgb(var(--color-text-secondary))]">Find a new design</p>
                            </div>
                        </Link>
                    </div>
                </Card>

                {/* Template Recommendations */}
                <Card className="p-6 lg:col-span-2">
                    <h3 className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] mb-4">Recommended Templates</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {templateCards.map((template) => (
                            <div key={template.title} className={`p-4 rounded-xl bg-gradient-to-br ${template.accent} border border-[rgb(var(--color-border))]`}>
                                <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">{template.title}</p>
                                <p className="text-[10px] text-[rgb(var(--color-text-secondary))] mt-1">{template.subtitle}</p>
                                <Link to={ROUTES.TEMPLATES} className="inline-flex items-center gap-1 mt-3 text-[10px] font-bold text-indigo-600 hover:text-indigo-700">
                                    Use template <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}