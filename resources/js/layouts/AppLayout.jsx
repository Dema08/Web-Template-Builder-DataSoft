import { useState } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import {
    Search,
    Bell,
    LayoutGrid,
    Globe,
    FileText,
    Users,
    Settings as SettingsIcon,
    Plus,
    LogOut,
    UserCircle2,
    ChevronDown,
    BarChart3,
    Layers
} from 'lucide-react';
import { useAuth } from '@hooks';
import { ROUTES } from '@constants';
import { Spinner } from '@components/ui';

export default function AppLayout() {
    const { user, logout, isLoggingOut } = useAuth();
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const location = useLocation();

    const isAdmin = user?.role === 'admin';
    const firstName = user?.name?.split(' ')[0] || 'User';

    let sidebarItems = [];

    if (isAdmin) {
        sidebarItems = [
            { label: 'Dashboard', icon: LayoutGrid, to: ROUTES.DASHBOARD },
            { label: 'All Websites', icon: Globe, to: ROUTES.ADMIN_WEBSITES },
            { label: 'Manage Templates', icon: FileText, to: ROUTES.ADMIN_TEMPLATES },
            { label: 'Categories', icon: Layers, to: ROUTES.ADMIN_CATEGORIES },
            { label: 'User Management', icon: Users, to: ROUTES.ADMIN_USERS },
            { label: 'Analytics', icon: BarChart3, to: ROUTES.ADMIN_ANALYTICS },
            { label: 'System Settings', icon: SettingsIcon, to: ROUTES.ADMIN_SETTINGS },
        ];
    } else {
        sidebarItems = [
            { label: 'Dashboard', icon: LayoutGrid, to: ROUTES.DASHBOARD },
            { label: 'My Websites', icon: Globe, to: ROUTES.WEBSITES },
            { label: 'Templates', icon: FileText, to: ROUTES.TEMPLATES },
            { label: 'Settings', icon: SettingsIcon, to: ROUTES.SETTINGS },
        ];
    }

    return (
        <div className="h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800 selection:bg-blue-600 selection:text-white overflow-hidden">
            {/* Top Navbar — Fixed Header */}
            <header className="shrink-0 z-30 bg-white border-b border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between px-6 py-3.5">
                    {/* Brand Logo + Top Links */}
                    <div className="flex items-center gap-8">
                        <Link to={ROUTES.DASHBOARD} className="flex items-center gap-2.5">
                            <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 font-black text-sm tracking-tighter">
                                DS
                            </div>
                            <span className="text-xl font-extrabold text-slate-900 tracking-tight">DataSoft</span>
                        </Link>

                        {/* Top Nav Links */}
                        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
                            <NavLink
                                to={ROUTES.DASHBOARD}
                                className={({ isActive }) =>
                                    `py-1 border-b-2 transition-all ${isActive
                                        ? 'border-blue-600 text-blue-600 font-extrabold'
                                        : 'border-transparent text-slate-600 hover:text-slate-900'
                                    }`
                                }
                            >
                                Dashboard
                            </NavLink>
                            <NavLink
                                to={ROUTES.WEBSITES}
                                className={({ isActive }) =>
                                    `py-1 border-b-2 transition-all ${isActive
                                        ? 'border-blue-600 text-blue-600 font-extrabold'
                                        : 'border-transparent text-slate-600 hover:text-slate-900'
                                    }`
                                }
                            >
                                Websites
                            </NavLink>
                            <NavLink
                                to={ROUTES.TEMPLATES}
                                className={({ isActive }) =>
                                    `py-1 border-b-2 transition-all ${isActive
                                        ? 'border-blue-600 text-blue-600 font-extrabold'
                                        : 'border-transparent text-slate-600 hover:text-slate-900'
                                    }`
                                }
                            >
                                Templates
                            </NavLink>
                        </nav>
                    </div>

                    {/* Right Utilities (Search, Notifications, Profile) */}
                    <div className="flex items-center gap-4">
                        {/* Search input */}
                        <div className="relative hidden sm:block w-64 lg:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search DataSoft resources..."
                                className="w-full pl-9 pr-4 py-2 bg-slate-100/80 border border-slate-200/60 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                            />
                        </div>

                        {/* Bell Icon */}
                        <button
                            type="button"
                            className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition"
                            aria-label="Notifications"
                        >
                            <Bell className="h-5 w-5 stroke-[1.8]" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white"></span>
                        </button>

                        {/* User Dropdown */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center gap-2.5 p-1 rounded-full hover:bg-slate-100 transition focus:outline-none"
                            >
                                <div className="h-9 w-9 rounded-full bg-slate-900 text-white font-semibold text-xs flex items-center justify-center shadow-sm">
                                    {user?.avatar ? (
                                        <img src={user.avatar} alt={user.name} className="h-full w-full rounded-full object-cover" />
                                    ) : (
                                        firstName.slice(0, 2).toUpperCase()
                                    )}
                                </div>
                                <ChevronDown className="h-3.5 w-3.5 text-slate-500 hidden sm:block" />
                            </button>

                            {/* Dropdown Menu */}
                            {userMenuOpen && (
                                <div
                                    className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                                    onMouseLeave={() => setUserMenuOpen(false)}
                                >
                                    <div className="px-4 py-2.5 border-b border-slate-100">
                                        <p className="text-sm font-bold text-slate-900 truncate">{user?.name || 'User'}</p>
                                        <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                                        <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-[10px] font-bold text-blue-700 uppercase tracking-wider">
                                            {isAdmin ? 'DataSoft Admin' : 'User'}
                                        </div>
                                    </div>

                                    <Link
                                        to={ROUTES.PROFILE}
                                        onClick={() => setUserMenuOpen(false)}
                                        className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                                    >
                                        <UserCircle2 className="h-4 w-4 text-slate-400" />
                                        Profile Settings
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setUserMenuOpen(false);
                                            logout();
                                        }}
                                        disabled={isLoggingOut}
                                        className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition border-t border-slate-100 disabled:opacity-50"
                                    >
                                        {isLoggingOut ? <Spinner size="sm" /> : <LogOut className="h-4 w-4 text-red-500" />}
                                        <span>{isLoggingOut ? 'Logging out...' : 'Sign Out'}</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Body Wrapper — Flex 1 and overflow hidden to pin sidebar */}
            <div className="flex-1 flex min-h-0 overflow-hidden">
                {/* Left Sidebar — Fixed in position, non-scrolling */}
                <aside className="w-64 bg-white border-r border-slate-200/80 p-5 flex flex-col justify-between shrink-0 hidden md:flex overflow-y-auto">
                    <div>
                        {/* Organization Card */}
                        <div className="flex items-center gap-3 p-3 bg-slate-50/80 border border-slate-200/60 rounded-2xl mb-6">
                            <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
                                DS
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-sm font-extrabold text-slate-900 truncate">DataSoft Studio</h3>
                                <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase">ENTERPRISE</span>
                            </div>
                        </div>

                        {/* Sidebar Navigation */}
                        <nav className="space-y-1.5">
                            {sidebarItems.map(({ label, icon: Icon, to }) => {
                                const isActive = location.pathname === to;
                                return (
                                    <NavLink
                                        key={label}
                                        to={to}
                                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all relative ${isActive
                                                ? 'bg-blue-50 text-blue-600 font-extrabold'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        {isActive && (
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-blue-600 rounded-r-full" />
                                        )}
                                        <Icon className={`h-4 w-4 stroke-[2] ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                                        <span>{label}</span>
                                    </NavLink>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-4 border-t border-slate-100">
                        <Link
                            to={ROUTES.BUILDER}
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl text-xs shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
                        >
                            <Plus className="h-4 w-4 stroke-[3]" />
                            <span>Create New Site</span>
                        </Link>
                    </div>
                </aside>

                {/* Content Outlet — Independent scrollable area */}
                <main className="flex-1 min-w-0 overflow-y-auto bg-[#f8fafc] flex flex-col justify-between">
                    <div>
                        <Outlet />
                    </div>

                    {/* Footer */}
                    <footer className="mt-12 border-t border-slate-200/80 bg-white px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                        <div>
                            <span className="font-bold text-slate-800">DataSoft Profile Builder</span>
                            <span className="mx-2">•</span>
                            <span>© 2026 PT DataSoft Solusindo. All rights reserved.</span>
                        </div>
                        <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-800 underline font-medium">
                            Privacy Policy
                        </a>
                    </footer>
                </main>
            </div>
        </div>
    );
}
