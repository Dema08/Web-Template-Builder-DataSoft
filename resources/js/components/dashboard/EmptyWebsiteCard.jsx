import { Link } from 'react-router-dom';
import { Sparkles, Globe } from 'lucide-react';
import { Card } from '@components/ui';
import { ROUTES } from '@constants';

export default function EmptyWebsiteCard() {
    return (
        <Card className="overflow-hidden p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        <Sparkles className="h-3.5 w-3.5" />
                        Empty website state
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 lg:text-4xl tracking-tight">
                        You have not created a website yet.
                    </h2>
                    <p className="mt-2 max-w-md text-sm text-slate-500 lg:text-base">
                        Start building your company profile, publish a polished landing page, and manage everything from one dashboard.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            to={ROUTES.BUILDER}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700 shadow-md shadow-indigo-600/20"
                        >
                            <Globe className="h-4 w-4" />
                            Create Website
                        </Link>
                        <Link
                            to={ROUTES.PROFILE}
                            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                        >
                            View Profile
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 -z-10 h-72 w-full rounded-[28px] bg-gradient-to-br from-indigo-100 via-white to-sky-100" />
                    <div className="grid gap-3 rounded-3xl bg-white/80 p-4 shadow-sm">
                        <div className="h-28 rounded-2xl bg-gradient-to-br from-sky-100 to-indigo-50" />
                        <div className="grid grid-cols-3 gap-2">
                            <div className="h-10 rounded-xl bg-slate-100" />
                            <div className="h-10 rounded-xl bg-slate-100" />
                            <div className="h-10 rounded-xl bg-slate-100" />
                        </div>
                        <div className="h-16 rounded-2xl bg-slate-50" />
                    </div>
                </div>
            </div>
        </Card>
    );
}
