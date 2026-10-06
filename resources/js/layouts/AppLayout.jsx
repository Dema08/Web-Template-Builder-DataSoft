import { useState } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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
    CreditCard,
    DollarSign,
    LayoutTemplate,
    Menu,
    X,
    Trash2,
    CheckCheck,
    Info,
} from 'lucide-react';
import { useAuth } from '@hooks';
import { ROUTES } from '@constants';
import { Spinner, PageLoader, CreateSiteChoiceModal } from '@shared/components/ui';
import { notificationApi } from '@shared/api';
import { useSettingsStore } from '@store';
import { Suspense } from 'react';

export default function AppLayout() {
    const { user, logout, isLoggingOut } = useAuth();
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isChoiceOpen, setIsChoiceOpen] = useState(false);
    const location = useLocation();
    const queryClient = useQueryClient();

    const { data: notifData } = useQuery({
        queryKey: ['user-notifications'],
        queryFn: () => notificationApi.getNotifications(),
        enabled: !!user,
        refetchInterval: 30 * 1000,
    });

    const notifications = notifData?.notifications ?? [];
    const unreadCount = notifData?.unread_count ?? 0;

    const markAllReadMutation = useMutation({
        mutationFn: () => notificationApi.markAllAsRead(),
        onSuccess: () => {
            queryClient.invalidateQueries(['user-notifications']);
        },
    });

    const markReadMutation = useMutation({
        mutationFn: (id) => notificationApi.markAsRead(id),
        onSuccess: () => {
            queryClient.invalidateQueries(['user-notifications']);
        },
    });

    const isAdmin = user?.role === 'admin';
    const firstName = user?.name?.split(' ')[0] || 'User';
    const profileAvatar = user?.avatar || null;
    const profileAvatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}&background=6366f1&color=fff`;

    const { brand_name, brand_badge, brand_color, logo_path, plan_label } = useSettingsStore();

    const sidebarItems = isAdmin
        ? [
              { label: 'Beranda', icon: Home, to: ROUTES.HOME },
              { label: 'Dasbor', icon: LayoutGrid, to: ROUTES.ADMIN_DASHBOARD },
              { label: 'Analitik', icon: BarChart3, to: ROUTES.ADMIN_ANALYTICS },
              { label: 'Semua Website', icon: Globe, to: ROUTES.ADMIN_WEBSITES },
              { label: 'Kelola Template', icon: FileText, to: ROUTES.ADMIN_TEMPLATES },
              { label: 'Kategori', icon: Layers, to: ROUTES.ADMIN_CATEGORIES },
              { label: 'Manajemen Pengguna', icon: Users, to: ROUTES.ADMIN_USERS },
              { label: 'Manajemen Harga', icon: CreditCard, to: ROUTES.ADMIN_PRICELIST },
              { label: 'Laporan Transaksi', icon: DollarSign, to: ROUTES.ADMIN_TRANSACTIONS },
              { label: 'Ubah Halaman Utama', icon: Sparkles, to: ROUTES.ADMIN_LANDING },
              { label: 'Pemeliharaan & Pengaturan', icon: SettingsIcon, to: ROUTES.ADMIN_SETTINGS },
          ]
        : [
              { label: 'Beranda', icon: Home, to: ROUTES.HOME },
              { label: 'Dasbor', icon: LayoutGrid, to: ROUTES.DASHBOARD },
              { label: 'Website', icon: Globe, to: ROUTES.WEBSITES },
              { label: 'Template', icon: FileText, to: ROUTES.TEMPLATES },
              { label: 'Template Saya', icon: LayoutTemplate, to: ROUTES.MY_TEMPLATES },
              { label: 'Tagihan & Langganan', icon: CreditCard, to: ROUTES.BILLING },
              { label: 'Profil', icon: UserCircle2, to: ROUTES.PROFILE },
              { label: 'Pengaturan', icon: SettingsIcon, to: ROUTES.SETTINGS },
          ];

    return (
        <div className="h-screen overflow-hidden bg-[rgb(var(--color-surface))] text-[rgb(var(--color-text-primary))] font-sans selection:bg-indigo-600 selection:text-white transition-colors duration-300">
            <div className="flex h-screen">
                {/* Collapsible Desktop Left Sidebar */}
                <aside
                    className={`sticky top-0 hidden h-screen flex-col border-r border-[rgb(var(--color-border))] bg-[rgb(var(--color-sidebar))] transition-all duration-300 ease-out lg:flex shrink-0 z-20 ${
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
                            <img
                                src={logo_path || '/images/microdata-emblem.png'}
                                alt={brand_name || 'Microdata'}
                                className="h-10 w-auto object-contain"
                                onError={(e) => {
                                    if (!e.target.src.includes('/images/')) {
                                        e.target.src = '/images/microdata-emblem.png';
                                    } else {
                                        e.target.style.display = 'none';
                                    }
                                }}
                            />
                        </div>

                        {!isSidebarCollapsed && (
                            <div className="min-w-0 flex-1">
                                <div className="text-[15px] font-extrabold tracking-tight truncate">{brand_name}</div>
                                <div
                                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                                    style={{ color: brand_color }}
                                >
                                    {isAdmin ? 'Panel Admin' : plan_label}
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

                    {/* Sidebar Bottom Action Buttons — non-admin tampilkan pilihan template/blank */}
                    <div className="space-y-3 px-4 pb-6 pt-2 border-t border-[rgb(var(--color-border-soft))]">
                        {!isAdmin ? (
                            <button
                                type="button"
                                onClick={() => setIsChoiceOpen(true)}
                                className={`flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-xs font-extrabold text-white transition hover:bg-indigo-700 shadow-md shadow-indigo-600/20 cursor-pointer ${
                                    isSidebarCollapsed ? 'px-2' : ''
                                }`}
                            >
                                <Sparkles className="h-4 w-4 shrink-0" />
                                {!isSidebarCollapsed && <span>Buat Website Baru</span>}
                            </button>
                        ) : (
                            <Link
                                to={ROUTES.ONBOARDING}
                                className={`flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-xs font-extrabold text-white transition hover:bg-indigo-700 shadow-md shadow-indigo-600/20 ${
                                    isSidebarCollapsed ? 'px-2' : ''
                                }`}
                            >
                                <Sparkles className="h-4 w-4 shrink-0" />
                                {!isSidebarCollapsed && <span>Buat Website Baru</span>}
                            </Link>
                        )}

                        <button
                            type="button"
                            onClick={() => logout()}
                            disabled={isLoggingOut}
                            className={`flex w-full items-center justify-center gap-2 rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-4 py-2.5 text-xs font-bold text-[rgb(var(--color-text-primary))] transition hover:border-red-200 hover:text-red-600 hover:bg-red-50 disabled:opacity-50 ${
                                isSidebarCollapsed ? 'px-2' : ''
                            }`}
                        >
                            {isLoggingOut ? <Spinner size="sm" /> : <LogOut className="h-4 w-4 shrink-0 text-red-500" />}
                            {!isSidebarCollapsed && <span>{isLoggingOut ? 'Sedang keluar...' : 'Keluar'}</span>}
                        </button>
                    </div>
                </aside>

                {/* Mobile Drawer Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <div
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <aside className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-[rgb(var(--color-sidebar))] border-r border-[rgb(var(--color-border))] flex flex-col p-4 z-50 shadow-2xl transition duration-300">
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between pb-4 border-b border-[rgb(var(--color-border-soft))]">
                                <div className="flex items-center gap-3 min-w-0">
                                    <img
                                        src={logo_path || '/images/microdata-emblem.png'}
                                        alt={brand_name || 'Microdata'}
                                        className="h-8 w-auto object-contain shrink-0"
                                        onError={(e) => {
                                            e.target.src = '/images/microdata-emblem.png';
                                        }}
                                    />
                                    <div className="min-w-0 flex-1">
                                        <div className="text-sm font-extrabold tracking-tight truncate">{brand_name || 'Microdata'}</div>
                                        <div
                                            className="text-[10px] font-bold uppercase tracking-wider"
                                            style={{ color: brand_color || '#2563eb' }}
                                        >
                                            {isAdmin ? 'Panel Admin' : plan_label}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="rounded-xl p-2 text-[rgb(var(--color-text-tertiary))] hover:bg-[rgb(var(--color-surface-alt))] transition"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Mobile Nav Links */}
                            <nav className="flex-1 overflow-y-auto py-4 space-y-1 ds-scrollbar-thin">
                                {sidebarItems.map(({ label, icon: Icon, to }) => {
                                    const isActive = location.pathname === to;
                                    return (
                                        <NavLink
                                            key={label}
                                            to={to}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-xs font-bold transition-all ${
                                                isActive
                                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                                                    : 'text-[rgb(var(--color-text-secondary))] hover:bg-[rgb(var(--color-surface-alt))] hover:text-[rgb(var(--color-text-primary))]'
                                            }`}
                                        >
                                            <Icon className="h-4 w-4 shrink-0 stroke-[2]" />
                                            <span>{label}</span>
                                        </NavLink>
                                    );
                                })}
                            </nav>

                            {/* Mobile Bottom Actions — user tampilkan pilihan template/blank */}
                            <div className="space-y-2 pt-3 border-t border-[rgb(var(--color-border-soft))]">
                                {!isAdmin ? (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsChoiceOpen(true);
                                        }}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-xs font-extrabold text-white shadow-md shadow-indigo-600/20 cursor-pointer"
                                    >
                                        <Sparkles className="h-4 w-4" />
                                        <span>Buat Website Baru</span>
                                    </button>
                                ) : (
                                    <Link
                                        to={ROUTES.ONBOARDING}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-xs font-extrabold text-white shadow-md shadow-indigo-600/20"
                                    >
                                        <Sparkles className="h-4 w-4" />
                                        <span>Buat Website Baru</span>
                                    </Link>
                                )}

                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        logout();
                                    }}
                                    disabled={isLoggingOut}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-4 py-2.5 text-xs font-bold text-red-600"
                                >
                                    <LogOut className="h-4 w-4" />
                                    <span>{isLoggingOut ? 'Sedang keluar...' : 'Keluar'}</span>
                                </button>
                            </div>
                        </aside>
                    </div>
                )}

                {/* Main Content & Top Header Area */}
                <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-[rgb(var(--color-surface-alt))] transition-colors duration-300">
                    {/* Top Navbar Header */}
                    <header className="sticky top-0 z-30 flex h-20 shrink-0 items-center justify-between border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-navbar))] px-4 sm:px-6 shadow-xs transition-colors duration-300">
                        <div className="flex items-center gap-3">
                            {/* Mobile Hamburger Drawer Button */}
                            <button
                                type="button"
                                aria-label="Buka menu seluler"
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="lg:hidden rounded-xl border border-[rgb(var(--color-border))] p-2.5 text-[rgb(var(--color-text-secondary))] hover:text-indigo-600 hover:border-indigo-300 transition"
                            >
                                <Menu className="h-5 w-5" />
                            </button>

                            {/* Desktop Collapse Toggle */}
                            <button
                                type="button"
                                aria-label={isSidebarCollapsed ? 'Tampilkan bilah sisi' : 'Sembunyikan bilah sisi'}
                                onClick={() => setIsSidebarCollapsed((value) => !value)}
                                className="hidden lg:flex rounded-full border border-[rgb(var(--color-border))] p-2 text-[rgb(var(--color-text-secondary))] transition hover:border-indigo-300 hover:text-indigo-600"
                            >
                                {isSidebarCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
                            </button>

                            {/* Mobile Brand emblem */}
                            <div className="flex items-center gap-2 lg:hidden">
                                <img
                                    src={logo_path || '/images/microdata-emblem.png'}
                                    alt={brand_name || 'Microdata'}
                                    className="h-7 w-auto object-contain"
                                    onError={(e) => {
                                        e.target.src = '/images/microdata-emblem.png';
                                    }}
                                />
                                <span className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] truncate max-w-[120px] sm:max-w-none">
                                    {brand_name}
                                </span>
                            </div>

                            {/* Desktop Page Title Indicator */}
                            {(() => {
                                const activePage = sidebarItems.find(item =>
                                    item.to === location.pathname ||
                                    (item.to !== '/' && location.pathname.startsWith(item.to))
                                ) || sidebarItems.find(item => item.to === '/');
                                const PageIcon = activePage?.icon ?? Home;
                                return (
                                    <div className="hidden sm:flex items-center gap-2.5">
                                        <div className="flex items-center justify-center h-8 w-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
                                            <PageIcon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-extrabold text-[rgb(var(--color-text-primary))] leading-tight">
                                                {activePage?.label ?? 'Halaman'}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* Top Right Actions */}
                        <div className="flex items-center gap-2 sm:gap-4">
                            {/* Search bar */}
                            <div className="hidden sm:flex items-center gap-2.5 rounded-full border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface-alt))] px-3.5 py-2 text-xs text-[rgb(var(--color-text-secondary))] focus-within:ring-2 focus-within:ring-indigo-600/20 focus-within:border-indigo-600 transition">
                                <Search className="h-4 w-4 text-[rgb(var(--color-text-tertiary))] shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Cari atau ketik..."
                                    className="w-full bg-transparent border-0 p-0 text-xs text-[rgb(var(--color-text-primary))] focus:outline-none placeholder:text-[rgb(var(--color-text-tertiary))]"
                                />
                            </div>

                            {/* Notification Dropdown Button & Container */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setNotifOpen(!notifOpen)}
                                    className="relative rounded-full border border-[rgb(var(--color-border))] p-2.5 text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition focus:outline-none"
                                    aria-label="Notifikasi"
                                >
                                    <Bell className="h-4 w-4" />
                                    {unreadCount > 0 && (
                                        <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-red-600 text-[10px] font-extrabold text-white ring-2 ring-[rgb(var(--color-surface))] animate-pulse">
                                            {unreadCount > 9 ? '9+' : unreadCount}
                                        </span>
                                    )}
                                </button>

                                {notifOpen && (
                                    <div
                                        className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-[rgb(var(--color-surface))] shadow-2xl border border-[rgb(var(--color-border))] py-3 z-50 overflow-hidden text-xs ds-animate-scale-in"
                                        onMouseLeave={() => setNotifOpen(false)}
                                    >
                                        <div className="px-4 pb-2.5 border-b border-[rgb(var(--color-border))] flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Bell className="h-4 w-4 text-indigo-600" />
                                                <span className="font-extrabold text-[rgb(var(--color-text-primary))] text-sm">Notifikasi</span>
                                                {unreadCount > 0 && (
                                                    <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-extrabold text-[10px]">
                                                        {unreadCount} Baru
                                                    </span>
                                                )}
                                            </div>
                                            {unreadCount > 0 && (
                                                <button
                                                    type="button"
                                                    onClick={() => markAllReadMutation.mutate()}
                                                    disabled={markAllReadMutation.isPending}
                                                    className="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 transition flex items-center gap-1 cursor-pointer"
                                                >
                                                    <CheckCheck className="h-3.5 w-3.5" />
                                                    Tandai dibaca
                                                </button>
                                            )}
                                        </div>

                                        <div className="max-h-80 overflow-y-auto divide-y divide-[rgb(var(--color-border-soft))] ds-scrollbar-thin">
                                            {notifications.length === 0 ? (
                                                <div className="p-6 text-center text-[rgb(var(--color-text-tertiary))]">
                                                    <Bell className="h-8 w-8 mx-auto mb-2 opacity-30 text-indigo-500" />
                                                    <p className="font-medium text-xs">Belum ada notifikasi baru</p>
                                                </div>
                                            ) : (
                                                notifications.map((notif) => (
                                                    <div
                                                        key={notif.id}
                                                        onClick={() => {
                                                            if (!notif.dibaca) {
                                                                markReadMutation.mutate(notif.id);
                                                            }
                                                        }}
                                                        className={`p-3.5 transition cursor-pointer flex gap-3 ${
                                                            !notif.dibaca
                                                                ? 'bg-indigo-50/50 dark:bg-indigo-950/20 hover:bg-indigo-50 dark:hover:bg-indigo-950/40'
                                                                : 'hover:bg-[rgb(var(--color-surface-alt))]'
                                                        }`}
                                                    >
                                                        <div className="mt-0.5 shrink-0">
                                                            {notif.tipe === 'website_deleted' ? (
                                                                <div className="p-2 rounded-xl bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400">
                                                                    <Trash2 className="h-4 w-4" />
                                                                </div>
                                                            ) : (
                                                                <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                                                                    <Info className="h-4 w-4" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex-1 space-y-1">
                                                            <div className="flex items-center justify-between">
                                                                <p className={`font-bold ${!notif.dibaca ? 'text-indigo-950 dark:text-indigo-200' : 'text-[rgb(var(--color-text-primary))]'}`}>
                                                                    {notif.judul}
                                                                </p>
                                                                {!notif.dibaca && (
                                                                    <span className="h-2 w-2 rounded-full bg-indigo-600 shrink-0" />
                                                                )}
                                                            </div>
                                                            <p className="text-[11px] text-[rgb(var(--color-text-secondary))] whitespace-pre-line leading-relaxed">
                                                                {notif.pesan}
                                                            </p>
                                                            <p className="text-[10px] text-[rgb(var(--color-text-tertiary))] font-medium pt-0.5">
                                                                {notif.created_at_formatted}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Profile Dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="flex items-center gap-2 sm:gap-3 rounded-full bg-[rgb(var(--color-surface))] p-1 sm:px-2.5 sm:py-1.5 shadow-xs ring-1 ring-[rgb(var(--color-border))] transition hover:ring-indigo-300 focus:outline-none"
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
                                                {isAdmin ? 'Microdata Admin' : 'User'}
                                            </div>
                                        </div>

                                        <Link
                                            to={ROUTES.PROFILE}
                                            onClick={() => setUserMenuOpen(false)}
                                            className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] transition"
                                        >
                                            <UserCircle2 className="h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
                                            Pengaturan Profil
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
                                            <span>{isLoggingOut ? 'Sedang keluar...' : 'Keluar'}</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>

                    {/* Dynamic Page Outlet Content */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div className="flex-1 relative">
                            <Suspense fallback={<PageLoader />}>
                                <Outlet />
                            </Suspense>
                        </div>

                        {/* App Footer */}
                        <footer className="mt-12 border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[rgb(var(--color-text-secondary))] gap-4 transition-colors duration-300">
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                                <span className="font-extrabold text-[rgb(var(--color-text-primary))]">{brand_name || 'Microdata'} Profile Builder</span>
                                <span className="hidden sm:inline">•</span>
                                <span>© 2026 PT Microdata. Hak cipta dilindungi.</span>
                            </div>
                            <a
                                href="#privacy"
                                onClick={(e) => e.preventDefault()}
                                className="hover:text-[rgb(var(--color-text-primary))] underline font-semibold transition-colors"
                            >
                                Kebijakan Privasi
                            </a>
                        </footer>
                    </div>
                </main>
            </div>
            {/* Global pilihan buat website (dipakai sidebar desktop + mobile user) */}
            <CreateSiteChoiceModal isOpen={isChoiceOpen} onClose={() => setIsChoiceOpen(false)} />
        </div>
    );
}