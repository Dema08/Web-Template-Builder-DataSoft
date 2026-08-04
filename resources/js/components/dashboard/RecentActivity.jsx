import { Activity } from 'lucide-react';
import { Card } from '@components/ui';

export default function RecentActivity({ activities = [] }) {
    return (
        <Card className="p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                    <p className="text-sm font-medium text-slate-500">Recent Activity</p>
                    <h2 className="text-2xl font-semibold text-slate-900">Latest activity</h2>
                </div>
                <div className="rounded-full bg-slate-100 p-2 text-slate-600">
                    <Activity className="h-4 w-4" />
                </div>
            </div>

            <div className="space-y-3">
                {activities.slice(0, 10).map((activity, index) => (
                    <div key={`${activity.action}-${index}`} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />
                        <div className="min-w-0 flex-1">
                            <div className="text-sm font-semibold text-slate-900">{activity.action}</div>
                            <div className="text-sm text-slate-500">{activity.description}</div>
                        </div>
                        <div className="whitespace-nowrap text-xs text-slate-400">{activity.created_at || 'Recently'}</div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
