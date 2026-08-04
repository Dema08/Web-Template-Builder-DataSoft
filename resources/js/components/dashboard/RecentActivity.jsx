import { Activity } from 'lucide-react';
import { Card } from '@components/ui';

export default function RecentActivity({ activities = [] }) {
    return (
        <Card className="p-6">
            <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recent Activity</p>
                    <h2 className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">Latest activity</h2>
                </div>
                <div className="rounded-full bg-slate-100 p-2.5 text-slate-500">
                    <Activity className="h-4 w-4" />
                </div>
            </div>

            <div className="space-y-3">
                {activities.slice(0, 10).map((activity, index) => (
                    <div key={`${activity.action}-${index}`} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 border border-slate-100">
                        <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-500 ds-animate-pulse-slow" />
                        <div className="min-w-0 flex-1">
                            <div className="text-sm font-extrabold text-slate-900">{activity.action}</div>
                            <div className="text-xs text-slate-500 mt-0.5">{activity.description}</div>
                        </div>
                        <div className="whitespace-nowrap text-[10px] font-bold text-slate-400">{activity.created_at || 'Recently'}</div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
