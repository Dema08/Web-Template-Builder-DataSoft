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
    Sparkles,
    LogOut,
    UserCircle2,
    ChevronDown,
    BarChart3,
    Layers,
    PanelLeftClose,
    PanelLeftOpen
} from 'lucide-react';
import { useAuth } from '@hooks';
import { ROUTES } from '@constants';
import { Spinner } from '@components/ui';

export default function AppLayout() {
    const { user, logout, isLoggingOut } = useAuth();
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const location = useLocation();

    const isAdmin = user?.role === 'admin';
    const firstName = user?.name?.split(' ')[0] || 'User';
    const profileAvatar = user?.avatar || null;
    const profileAvatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}`;

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
            { label: 'Websites', icon: Globe, to: ROUTES.WEBSITES },
            { label: 'Templates', icon: FileText, to: ROUTES.TEMPLATES },
            { label: 'Profile', icon: UserCircle2, to: ROUTES.PROFILE },
            { label: 'Settings', icon: SettingsIcon, to: ROUTES.SETTINGS },
        ];
    }

    return (
        <div className="h-screen overflow-hidden bg-[#f3f4f8] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
            <div className="flex h-screen">
                {/* Collapsible Left Sidebar */}
                <aside
                    className={`sticky top-0 hidden h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300 ease-out lg:flex shrink-0 z-20 ${
                        isSidebarCollapsed ? 'w-20' : 'w-72'
                    }`}
                >
                    {/* Sidebar Top Brand Header */}
                    <div
                        className={`flex items-center border-b border-slate-200 px-4 py-5 transition-all duration-300 ease-out ${
                            isSidebarCollapsed ? 'justify-center' : 'justify-between gap-3'
                        }`}
                    >
                        <div className="flex shrink-0 items-center justify-center overflow-hidden">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-extrabold text-white shadow-md shadow-blue-500/20">
                                DS
                            </div>
                        </div>

                        {!isSidebarCollapsed && (
                            <div className="min-w-0 flex-1">
                                <div className="text-[15px] font-extrabold text-slate-900 tracking-tight">DataSoft</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                                    {isAdmin ? 'Admin Panel' : 'Premium Plan'}
                                </div>
                            </div>
                        )}

                        <button
                            type="button"
                            aria-label={isSidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
                            onClick={() => setIsSidebarCollapsed((value) => !value)}
                            className="shrink-0 rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-600 hover:bg-slate-50"
                        >
                            {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1">
                        {sidebarItems.map(({ label, icon: Icon, to }) => {
                            const isActive = location.pathname === to;
                            return (
                                <NavLink
                                    key={label}
                                    to={to}
                                    className={`flex items-center rounded-xl py-3 text-xs font-bold transition ${
                                        isSidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-3.5'
                                    } ${
                                        isActive
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-extrabold'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                    }`}
                                >
                                    <Icon className="h-4 w-4 shrink-0 stroke-[2]" />
                                    {!isSidebarCollapsed && <span>{label}</span>}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Sidebar Bottom Action Buttons */}
                    <div className="space-y-2.5 px-4 pb-6 pt-2 border-t border-slate-100">
                        <Link
                            to={ROUTES.BUILDER}
                            className={`flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-extrabold text-white transition hover:bg-blue-700 shadow-md shadow-blue-600/20 ${
                                isSidebarCollapsed ? 'px-2' : ''
                            }`}
                        >
                            <Sparkles className="h-4 w-4 shrink-0" />
                            {!isSidebarCollapsed && <span>Create New Site</span>}
                        </Link>

                        <button
                            type="button"
                            onClick={() => logout()}
                            disabled={isLoggingOut}
                            className={`flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-red-200 hover:text-red-600 hover:bg-red-50 disabled:opacity-50 ${
                                isSidebarCollapsed ? 'px-2' : ''
                            }`}
                        >
                            {isLoggingOut ? <Spinner size="sm" /> : <LogOut className="h-4 w-4 shrink-0 text-red-500" />}
                            {!isSidebarCollapsed && <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>}
                        </button>
                    </div>
                </aside>

                {/* Main Content & Top Header Area */}
                <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-[#f8fafc]">
                    {/* Top Navbar Header */}
                    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 shadow-xs">
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                aria-label={isSidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
                                onClick={() => setIsSidebarCollapsed((value) => !value)}
                                className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:text-blue-600 lg:hidden"
                            >
                                {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
                            </button>

                            {/* Search bar */}
                            <div className="flex w-full sm:w-80 max-w-md items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-500 focus-within:ring-2 focus-within:ring-blue-600/20 focus-within:border-blue-600 transition">
                                <Search className="h-4 w-4 text-slate-400 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Search templates or sites..."
                                    className="w-full bg-transparent border-0 p-0 text-xs text-slate-800 focus:outline-none placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Top Right Actions */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            <button
                                type="button"
                                className="relative rounded-full border border-slate-200 p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition"
                                aria-label="Notifications"
                            >
                                <Bell className="h-4 w-4" />
                                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
                            </button>

                            {/* Profile Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="flex items-center gap-3 rounded-full bg-white px-2 py-1 shadow-xs ring-1 ring-slate-200 transition hover:ring-blue-300 focus:outline-none"
                                >
                                    <img
                                        src={profileAvatar || profileAvatarFallback}
                                        alt="User profile"
                                        onError={(event) => {
                                            event.currentTarget.onerror = null;
                                            event.currentTarget.src = profileAvatarFallback;
                                        }}
                                        className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200"
                                    />
                                    <div className="hidden text-left sm:block pr-1">
                                        <div className="text-xs font-bold text-slate-900 leading-tight">{firstName}</div>
                                        <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                                            {user?.role || 'User'}
                                        </div>
                                    </div>
                                    <ChevronDown className="h-3.5 w-3.5 text-slate-400 hidden sm:block" />
                                </button>

                                {userMenuOpen && (
                                    <div
                                        className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                                        onMouseLeave={() => setUserMenuOpen(false)}
                                    >
                                        <div className="px-4 py-2.5 border-b border-slate-100">
                                            <p className="text-sm font-extrabold text-slate-900 truncate">{user?.name || 'User'}</p>
                                            <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                                            <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-[10px] font-extrabold text-blue-700 uppercase tracking-wider">
                                                {isAdmin ? 'DataSoft Admin' : 'User'}
                                            </div>
                                        </div>

                                        <Link
                                            to={ROUTES.PROFILE}
                                            onClick={() => setUserMenuOpen(false)}
                                            className="flex items-center gap-2.5 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
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
                                            className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-50 transition border-t border-slate-100 disabled:opacity-50"
                                        >
                                            {isLoggingOut ? <Spinner size="sm" /> : <LogOut className="h-4 w-4 text-red-500" />}
                                            <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>

                    {/* Dynamic Page Outlet Content */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <Outlet />
                        </div>

                        {/* App Footer */}
                        <footer className="mt-12 border-t border-slate-200/80 bg-white px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                            <div>
                                <span className="font-extrabold text-slate-800">DataSoft Profile Builder</span>
                                <span className="mx-2">•</span>
                                <span>© 2026 PT DataSoft Solusindo. All rights reserved.</span>
                            </div>
                            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-slate-800 underline font-semibold">
                                Privacy Policy
                            </a>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
}
