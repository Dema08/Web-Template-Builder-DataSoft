import { ArrowRight, Sparkles, Edit3, Settings, FileText } from 'lucide-react';
import { Card } from '@components/ui';

const iconMap = {
    sparkles: <Sparkles className="h-5 w-5 text-indigo-600" />,
    'layout-grid': <FileText className="h-5 w-5 text-blue-600" />,
    'user-circle': <Edit3 className="h-5 w-5 text-purple-600" />,
    default: <Sparkles className="h-5 w-5 text-indigo-600" />,
};

export default function QuickActionCard({ quickActions = [] }) {
    return (
        <Card className="p-6">
            <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quick Actions</p>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-1 tracking-tight">Launch faster</h2>
                <p className="text-xs text-slate-500 mt-1.5">Common tasks to publish & optimize your site</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {quickActions.map((action) => (
                    <a
                        key={action.label}
                        href={action.href || '#'}
                        className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-white hover:shadow-md"
                    >
                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm ring-1 ring-slate-200 group-hover:ring-indigo-200">
                            {iconMap[action.icon] || iconMap.default}
                        </div>
                        <div className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition">{action.label}</div>
                        <p className="mt-1 text-xs text-slate-500 font-medium">{action.description}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-indigo-600">
                            <span>Open</span> <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                        </div>
                    </a>
                ))}
            </div>
        </Card>
    );
}
