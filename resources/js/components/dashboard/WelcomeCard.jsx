import { Sparkles, Globe, Edit2 } from 'lucide-react';
import { Card } from '@components/ui';

export default function WelcomeCard({ user, website }) {
    const firstName = user?.name?.split(' ')[0] || 'User';
    const hasWebsite = Boolean(website);

    return (
        <Card className="overflow-hidden p-6 lg:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        <Sparkles className="h-3.5 w-3.5" />
                        Dashboard overview
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
                        Welcome back, {firstName}!
                    </h1>
                    <p className="text-sm text-slate-500 lg:text-base max-w-lg">
                        {hasWebsite
                            ? 'Your website is ready for updates, publishing, and review.'
                            : 'Create your first website and start shaping your brand story.'}
                    </p>
                </div>

                <div className="grid w-full max-w-sm grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                        <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-slate-400">Role</div>
                        <div className="mt-2 text-lg font-extrabold text-slate-900">{user?.role || 'User'}</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                        <div className="text-[10px] uppercase tracking-[0.22em] font-bold text-slate-400">Status</div>
                        <div className="mt-2 text-lg font-extrabold text-slate-900">{hasWebsite ? 'Active' : 'Draft'}</div>
                    </div>
                </div>
            </div>

            {hasWebsite && (
                <div className="mt-5 flex items-center gap-3 text-xs text-slate-600">
                    <Globe className="h-3.5 w-3.5 text-indigo-600" />
                    <span className="font-medium">Live site ready — make your edits now.</span>
                </div>
            )}
        </Card>
    );
}
