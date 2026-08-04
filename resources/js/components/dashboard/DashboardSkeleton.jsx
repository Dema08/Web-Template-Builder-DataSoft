import { Card } from '@components/ui';

export default function DashboardSkeleton() {
    return (
        <div className="space-y-6 p-4 sm:p-6 lg:p-8">
            <Card className="p-6 lg:p-8">
                <div className="animate-pulse space-y-4">
                    <div className="h-3 w-28 rounded-full bg-slate-200" />
                    <div className="h-9 w-3/4 rounded-xl bg-slate-200" />
                    <div className="h-4 w-2/3 rounded-xl bg-slate-200" />
                </div>
            </Card>

            <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
                <div className="space-y-6">
                    <Card className="p-6">
                        <div className="animate-pulse space-y-4">
                            <div className="h-6 w-40 rounded-xl bg-slate-200" />
                            <div className="h-16 rounded-2xl bg-slate-200" />
                            <div className="grid gap-3 md:grid-cols-2">
                                <div className="h-16 rounded-2xl bg-slate-200" />
                                <div className="h-16 rounded-2xl bg-slate-200" />
                            </div>
                        </div>
                    </Card>
                    <Card className="p-6">
                        <div className="animate-pulse space-y-4">
                            <div className="h-6 w-40 rounded-xl bg-slate-200" />
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="h-24 rounded-2xl bg-slate-200" />
                                <div className="h-24 rounded-2xl bg-slate-200" />
                                <div className="h-24 rounded-2xl bg-slate-200" />
                            </div>
                        </div>
                    </Card>
                </div>

                <Card className="p-6">
                    <div className="animate-pulse space-y-4">
                        <div className="h-6 w-40 rounded-xl bg-slate-200" />
                        <div className="space-y-3">
                            <div className="h-16 rounded-2xl bg-slate-200" />
                            <div className="h-16 rounded-2xl bg-slate-200" />
                            <div className="h-16 rounded-2xl bg-slate-200" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
