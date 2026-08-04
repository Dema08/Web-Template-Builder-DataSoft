import { useState } from 'react';
import { TrendingUp, Users, Globe, Eye, Server, Shield, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function AdminAnalytics() {
    return (
        <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                    <Shield className="h-3.5 w-3.5" />
                    <span>System Intelligence</span>
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Platform Analytics</h1>
                <p className="text-sm text-slate-500 mt-1">
                    Real-time performance, server load, traffic trends, and user engagement insights across DataSoft.
                </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                        <span className="text-xs font-bold uppercase tracking-wider">Total Monthly Visits</span>
                        <Eye className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900">1,420,890</p>
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        <span>+18.4% vs last month</span>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                        <span className="text-xs font-bold uppercase tracking-wider">Active Deployments</span>
                        <Globe className="h-4 w-4 text-emerald-600" />
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900">1,284</p>
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        <span>+9.2% increase</span>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                        <span className="text-xs font-bold uppercase tracking-wider">Server CPU Load</span>
                        <Server className="h-4 w-4 text-purple-600" />
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900">14.2%</p>
                    <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span>Optimal Health</span>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-400">
                        <span className="text-xs font-bold uppercase tracking-wider">Storage Usage</span>
                        <TrendingUp className="h-4 w-4 text-amber-600" />
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900">48.6 GB</p>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-500">
                        <span>of 500 GB total</span>
                    </div>
                </div>
            </div>

            {/* Visual Chart Graphic Section */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-extrabold text-slate-900">Traffic Growth & Visitor Bandwidth</h2>
                        <p className="text-xs text-slate-500">Aggregated HTTP requests served across all subdomains</p>
                    </div>

                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">
                        Live Metrics
                    </span>
                </div>

                <div className="h-56 bg-gradient-to-b from-blue-50/50 to-white rounded-2xl border border-slate-100 flex items-end p-6 gap-3">
                    {[35, 45, 60, 52, 70, 85, 78, 90, 95, 88, 100, 92].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                            <div
                                className="w-full bg-blue-600 rounded-t-lg group-hover:bg-blue-700 transition duration-300 relative"
                                style={{ height: `${val}%` }}
                            >
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded transition">
                                    {val * 1000}
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-400">M{idx + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
