import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Sparkles,
    TrendingUp,
    Zap,
    ChevronRight as ChevronRightIcon,
} from 'lucide-react';
import { useAuth, useWebsite } from '@hooks';
import { ROUTES } from '@constants';

export default function UserDashboard() {
    const { user } = useAuth();
    const { website } = useWebsite();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const firstName = user?.name?.split(' ')[0] || 'User';

    const userTemplates = [
        {
            id: 1,
            title: 'Architectural Vanguard',
            category: 'business',
            priceType: 'Premium • Business',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
        },
        {
            id: 2,
            title: 'Street Style Hub',
            category: 'e-commerce',
            priceType: 'Free • E-commerce',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format&fit=crop&q=80',
        },
        {
            id: 3,
            title: 'SaaS Foundation',
            category: 'tech',
            priceType: 'Premium • Tech',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
        },
        {
            id: 4,
            title: 'Noir Portfolio',
            category: 'portfolio',
            priceType: 'Premium • Photography',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
        },
    ];

    const filteredUserTemplates = userTemplates.filter((t) => {
        if (selectedCategory === 'all') return true;
        return t.category === selectedCategory;
    });

    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* User Welcome Header with Preview & Continue Editing buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Welcome back, {firstName}
                    </h1>
                    <p className="text-sm text-slate-500 mt-1 font-medium">
                        Manage your projects and discover new inspirations.
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        to={ROUTES.WEBSITES}
                        className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-700 shadow-xs transition"
                    >
                        Preview
                    </Link>

                    <Link
                        to={ROUTES.BUILDER}
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/20 transition flex items-center gap-1.5"
                    >
                        <span>Continue Editing</span>
                    </Link>
                </div>
            </div>

            {/* Top 2 Cards: Website Status + Weekly Performance */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Website Status Card (Takes 2 Columns) */}
                <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            Published
                        </span>
                        <span className="text-slate-300">|</span>
                        <span className="text-xs font-bold text-slate-400">Website Status</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">ACTIVE TEMPLATE</p>
                            <h3 className="text-xl font-extrabold text-slate-900 mt-1">Corporate Pro v2</h3>
                        </div>

                        <div>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">LAST SAVED</p>
                            <h3 className="text-xl font-extrabold text-slate-900 mt-1">5 mins ago</h3>
                        </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <a
                            href={`http://${website?.subdomain || 'datasoft'}.datasoft.id`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition"
                        >
                            <Zap className="h-4 w-4 fill-blue-600" />
                            <span>View Live Site</span>
                        </a>
                    </div>
                </div>

                {/* Right Weekly Performance Card (Solid Blue Card) */}
                <div className="bg-blue-600 rounded-3xl p-6 sm:p-7 text-white shadow-lg shadow-blue-600/25 flex flex-col justify-between space-y-6 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                        <div className="h-10 w-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                            <Sparkles className="h-5 w-5 stroke-[2]" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-extrabold">Weekly Performance</h3>
                        <p className="text-xs text-blue-100 font-medium mt-1">
                            +12.4% traffic increase this week.
                        </p>
                        <div className="mt-4 flex items-baseline justify-between">
                            <span className="text-4xl font-black tracking-tight">1.2k</span>
                            <TrendingUp className="h-6 w-6 stroke-[3]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Template Library Section */}
            <div className="space-y-6 pt-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Template Library</h2>

                    <Link
                        to={ROUTES.TEMPLATES}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition"
                    >
                        <span>Browse All</span>
                        <ChevronRightIcon className="h-4 w-4" />
                    </Link>
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {[
                        { id: 'all', label: 'All Categories' },
                        { id: 'business', label: 'Business' },
                        { id: 'portfolio', label: 'Portfolio' },
                        { id: 'e-commerce', label: 'E-commerce' },
                        { id: 'tech', label: 'Tech' },
                        { id: 'minimalist', label: 'Minimalist' },
                    ].map((cat) => (
                        <button
                            key={cat.id}
                            type="button"
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                                selectedCategory === cat.id
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* 4-Column Template Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filteredUserTemplates.map((tpl) => (
                        <div
                            key={tpl.id}
                            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
                        >
                            <div className="relative h-44 bg-slate-100 overflow-hidden border-b border-slate-100">
                                <img
                                    src={tpl.image}
                                    alt={tpl.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                                <div>
                                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition truncate">
                                        {tpl.title}
                                    </h4>
                                    <p className="text-[11px] font-semibold text-slate-400 mt-1">
                                        {tpl.priceType}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
