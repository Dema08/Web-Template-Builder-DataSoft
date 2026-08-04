import { Sparkles } from 'lucide-react';
import { Card } from '@components/ui';

export default function WelcomeCard({ user, website }) {
    const firstName = user?.name?.split(' ')[0] || 'User';
    const hasWebsite = Boolean(website);

    return (
        <Card className="overflow-hidden p-6 lg:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        <Sparkles className="h-3.5 w-3.5" />
                        Dashboard overview
                    </div>
                    <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl">Welcome back, {firstName}!</h1>
                    <p className="mt-2 text-sm text-slate-500 lg:text-base">
                        {hasWebsite
                            ? 'Your website is ready for updates, publishing, and review.'
                            : 'Create your first website and start shaping your brand story.'}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:w-[320px]">
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Role</div>
                        <div className="mt-2 text-lg font-semibold text-slate-900">{user?.role || 'User'}</div>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-4">
                        <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Status</div>
                        <div className="mt-2 text-lg font-semibold text-slate-900">{hasWebsite ? 'Active' : 'Draft'}</div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
