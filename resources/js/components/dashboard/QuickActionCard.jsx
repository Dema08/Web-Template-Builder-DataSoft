import { ArrowRight } from 'lucide-react';
import { Card } from '@components/ui';

const iconMap = {
    sparkles: '✨',
    'layout-grid': '▦',
    'user-circle': '◉',
};

export default function QuickActionCard({ quickActions = [] }) {
    return (
        <Card className="p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                    <p className="text-sm font-medium text-slate-500">Quick Actions</p>
                    <h2 className="text-2xl font-semibold text-slate-900">Launch faster</h2>
                </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {quickActions.map((action) => (
                    <a
                        key={action.label}
                        href={action.href || '#'}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white"
                    >
                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm ring-1 ring-slate-200">
                            {iconMap[action.icon] || '•'}
                        </div>
                        <div className="text-base font-semibold text-slate-900">{action.label}</div>
                        <p className="mt-1 text-sm text-slate-500">{action.description}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700">
                            Open <ArrowRight className="h-4 w-4" />
                        </div>
                    </a>
                ))}
            </div>
        </Card>
    );
}
