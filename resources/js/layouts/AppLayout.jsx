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
    PanelLeftOpen,
    Home,
} from 'lucide-react';
import { useAuth } from '@hooks';
import { ROUTES } from '@constants';
import { Spinner } from '@components/ui';
import { useSettingsStore } from '@store';

export default function AppLayout() {
    const { user, logout, isLoggingOut } = useAuth();
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const location = useLocation();

    const isAdmin = user?.role === 'admin';
    const firstName = user?.name?.split(' ')[0] || 'User';
    const profileAvatar = user?.avatar || null;
    const profileAvatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}&background=6366f1&color=fff`;

    const { brandName, brandBadge, brandColor, logoUrl, planLabel } = useSettingsStore();

    const sidebarItems = isAdmin
        ? [
              { label: 'Dashboard', icon: LayoutGrid, to: ROUTES.ADMIN_DASHBOARD },
              { label: 'All Websites', icon: Globe, to: ROUTES.ADMIN_WEBSITES },
              { label: 'Manage Templates', icon: FileText, to: ROUTES.ADMIN_TEMPLATES },
              { label: 'Categories', icon: Layers, to: ROUTES.ADMIN_CATEGORIES },
              { label: 'User Management', icon: Users, to: ROUTES.ADMIN_USERS },
              { label: 'Analytics', icon: BarChart3, to: ROUTES.ADMIN_ANALYTICS },
              { label: 'Maintenance & Settings', icon: SettingsIcon, to: ROUTES.ADMIN_SETTINGS },
          ]
        : [
              { label: 'Dashboard', icon: LayoutGrid, to: ROUTES.DASHBOARD },
              { label: 'Websites', icon: Globe, to: ROUTES.WEBSITES },
              { label: 'Templates', icon: FileText, to: ROUTES.TEMPLATES },
              { label: 'Profile', icon: UserCircle2, to: ROUTES.PROFILE },
              { label: 'Settings', icon: SettingsIcon, to: ROUTES.SETTINGS },
          ];

    return (
        <div className="h-screen overflow-hidden bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-primary))] font-sans selection:bg-indigo-600 selection:text-white transition-colors duration-300">
            <div className="flex h-screen">
                {/* Collapsible Left Sidebar */}
                <aside
                    className={`sticky top-0 hidden h-screen flex-col border-r border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] transition-all duration-300 ease-out lg:flex shrink-0 z-20 ${
                        isSidebarCollapsed ? 'w-20' : 'w-72'
                    }`}
                >
                    {/* Sidebar Top Brand Header */}
                    <div
                        className={`flex items-center border-b border-[rgb(var(--color-border-soft))] px-4 py-5 transition-all duration-300 ease-out ${
                            isSidebarCollapsed ? 'justify-center' : 'justify-center gap-3'
                        }`}
                    >
                        <div className="flex shrink-0 items-center justify-center">
                            {logoUrl ? (
                                <img src={logoUrl} alt={brandName} className="h-10 w-10 rounded-xl object-contain border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-0.5 shadow-sm" />
                            ) : (
                                <div
                                    className="h-10 w-10 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md"
                                    style={{ backgroundColor: brandColor }}
                                >
                                    {brandBadge || 'DS'}
                                </div>
                            )}
                        </div>

                        {!isSidebarCollapsed && (
                            <div className="min-w-0 flex-1">
                                <div className="text-[15px] font-extrabold tracking-tight">{brandName}</div>
                                <div
                                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                                    style={{ color: brandColor }}
                                >
                                    {isAdmin ? 'Admin Panel' : planLabel}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-1.5 ds-scrollbar-thin">
                        {sidebarItems.map(({ label, icon: Icon, to }) => {
                            const isActive = location.pathname === to;
                            return (
                                <NavLink
                                    key={label}
                                    to={to}
                                    className={`flex items-center rounded-xl py-3 text-xs font-bold transition-all duration-200 ${
                                        isSidebarCollapsed ? 'justify-center px-2' : 'gap-3 px-4'
                                    } ${
                                        isActive
                                            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                                            : 'text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] hover:text-[rgb(var(--color-text-primary))]'
                                    }`}
                                >
                                    <Icon className="h-4 w-4 shrink-0 stroke-[2]" />
                                    {!isSidebarCollapsed && <span>{label}</span>}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Sidebar Bottom Action Buttons */}
                    <div className="space-y-3 px-4 pb-6 pt-2 border-t border-[rgb(var(--color-border-soft))]">
                        <Link
                            to={ROUTES.ONBOARDING}
                            className={`flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-xs font-extrabold text-white transition hover:bg-indigo-700 shadow-md shadow-indigo-600/20 ${
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
                            className={`flex w-full items-center justify-center gap-2 rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-4 py-2.5 text-xs font-bold text-[rgb(var(--color-text-primary))] transition hover:border-red-200 hover:text-red-600 hover:bg-red-50 disabled:opacity-50 ${
                                isSidebarCollapsed ? 'px-2' : ''
                            }`}
                        >
                            {isLoggingOut ? <Spinner size="sm" /> : <LogOut className="h-4 w-4 shrink-0 text-red-500" />}
                            {!isSidebarCollapsed && <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>}
                        </button>
                    </div>
                </aside>

                {/* Main Content & Top Header Area */}
                <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-[rgb(var(--color-surface-alt))] transition-colors duration-300">
                    {/* Top Navbar Header */}
                    <header className="sticky top-0 z-30 flex h-20 shrink-0 items-center justify-between border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-4 sm:px-6 shadow-xs transition-colors duration-300">
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                aria-label={isSidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
                                onClick={() => setIsSidebarCollapsed((value) => !value)}
                                className="rounded-full border border-[rgb(var(--color-border))] p-2 text-[rgb(var(--color-text-secondary))] transition hover:border-indigo-300 hover:text-indigo-600"
                            >
                                {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
                            </button>

                            {/* Breadcrumb */}
                            <nav className="hidden items-center gap-1.5 text-xs text-[rgb(var(--color-text-tertiary))] sm:flex">
                                <Home className="h-3.5 w-3.5" />
                                <span>/{location.pathname.split('/').filter(Boolean).join(' / ')}</span>
                            </nav>
                        </div>

                        {/* Top Right Actions */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Search bar */}
                            <div className="hidden sm:flex items-center gap-2.5 rounded-full border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface-alt))] px-3.5 py-2 text-xs text-[rgb(var(--color-text-secondary))] focus-within:ring-2 focus-within:ring-indigo-600/20 focus-within:border-indigo-600 transition">
                                <Search className="h-4 w-4 text-[rgb(var(--color-text-tertiary))] shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Search or type..."
                                    className="w-full bg-transparent border-0 p-0 text-xs text-[rgb(var(--color-text-primary))] focus:outline-none placeholder:text-[rgb(var(--color-text-tertiary))]"
                                />
                            </div>

                            <button
                                type="button"
                                className="relative rounded-full border border-[rgb(var(--color-border))] p-2.5 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition"
                                aria-label="Notifications"
                            >
                                <Bell className="h-4 w-4" />
                                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-600 ring-2 ring-[rgb(var(--color-surface))]" />
                            </button>

                            {/* Profile Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="flex items-center gap-3 rounded-full bg-[rgb(var(--color-surface))] px-2.5 py-1.5 shadow-xs ring-1 ring-[rgb(var(--color-border))] transition hover:ring-indigo-300 focus:outline-none"
                                >
                                    <img
                                        src={profileAvatar || profileAvatarFallback}
                                        alt="User profile"
                                        onError={(event) => {
                                            event.currentTarget.onerror = null;
                                            event.currentTarget.src = profileAvatarFallback;
                                        }}
                                        className="h-8 w-8 rounded-full object-cover ring-1 ring-[rgb(var(--color-border))]"
                                    />
                                    <div className="hidden text-left sm:block pr-1">
                                        <div className="text-xs font-bold text-[rgb(var(--color-text-primary))] leading-tight">{firstName}</div>
                                        <div className="text-[10px] font-semibold text-[rgb(var(--color-text-tertiary))] uppercase tracking-wider">
                                            {user?.role || 'User'}
                                        </div>
                                    </div>
                                    <ChevronDown className="h-3.5 w-3.5 text-[rgb(var(--color-text-tertiary))] hidden sm:block" />
                                </button>

                                {userMenuOpen && (
                                    <div
                                        className="absolute right-0 mt-2 w-56 rounded-2xl bg-[rgb(var(--color-surface))] shadow-xl border border-[rgb(var(--color-border))] py-2 z-50 ds-animate-scale-in transition-colors duration-300"
                                        onMouseLeave={() => setUserMenuOpen(false)}
                                    >
                                        <div className="px-4 py-3 border-b border-[rgb(var(--color-border))]">
                                            <p className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] truncate">{user?.name || 'User'}</p>
                                            <p className="text-xs text-[rgb(var(--color-text-secondary))] truncate">{user?.email}</p>
                                            <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-indigo-50 text-[10px] font-extrabold text-indigo-700 uppercase tracking-wider">
                                                {isAdmin ? 'DataSoft Admin' : 'User'}
                                            </div>
                                        </div>

                                        <Link
                                            to={ROUTES.PROFILE}
                                            onClick={() => setUserMenuOpen(false)}
                                            className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition"
                                        >
                                            <UserCircle2 className="h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
                                            Profile Settings
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setUserMenuOpen(false);
                                                logout();
                                            }}
                                            disabled={isLoggingOut}
                                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-red-600 hover:bg-red-50 transition border-t border-[rgb(var(--color-border))] disabled:opacity-50"
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
                        <div className="flex-1">
                            <Outlet />
                        </div>

                        {/* App Footer */}
                        <footer className="mt-12 border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[rgb(var(--color-text-secondary))] gap-4 transition-colors duration-300">
                            <div className="flex items-center gap-2">
                                <span className="font-extrabold text-[rgb(var(--color-text-primary))]">{brandName} Profile Builder</span>
                                <span>•</span>
                                <span>© 2026 PT DataSoft Solusindo. All rights reserved.</span>
                            </div>
                            <a
                                href="#privacy"
                                onClick={(e) => e.preventDefault()}
                                className="hover:text-[rgb(var(--color-text-primary))] underline font-semibold transition-colors"
                            >
                                Privacy Policy
                            </a>
                        </footer>
                    </div>
                </main>
            </div>
        </div>
    );
}