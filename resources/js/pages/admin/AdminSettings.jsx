import { useState, useRef, useEffect } from 'react';
import { Shield, Settings, Save, RefreshCw, Image, Type, Palette, Upload, X, Sun, Moon, AlertTriangle, Wrench } from 'lucide-react';
import { toast, useSettingsStore } from '@store';
import { Card } from '@components/ui';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '@api';
import { useSettings } from '@hooks';

export default function AdminSettings() {
    const { brand_name, brand_badge, brand_color, plan_label, logo_path, setSettings, updateSetting, resetSettings } = useSettingsStore();
    const { updateSettings, uploadLogo, removeLogo, isUpdating, isUploadingLogo, isRemovingLogo } = useSettings();
    const queryClient = useQueryClient();

    // Theme state
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    // Local form state
    const [localBrandName, setLocalBrandName] = useState(brand_name);
    const [localBrandBadge, setLocalBrandBadge] = useState(brand_badge);
    const [localBrandColor, setLocalBrandColor] = useState(brand_color);
    const [localPlanLabel, setLocalPlanLabel] = useState(plan_label);
    const [logoPreview, setLogoPreview] = useState(logo_path);

    // System settings state
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [allowRegistration, setAllowRegistration] = useState(true);
    const [defaultStorageLimit, setDefaultStorageLimit] = useState(100);

    // Fetch all settings from database
    const { data: settingsData, isLoading: settingsLoading } = useQuery({
        queryKey: ['settings'],
        queryFn: async () => {
            const response = await http.get('/admin/settings');
            return response.data;
        },
    });

    // Initialize form state from database
    useEffect(() => {
        if (settingsData?.data) {
            const brand = settingsData.data;
            const system = settingsData.data;

            setLocalBrandName(brand.brand_name || 'DataSoft');
            setLocalBrandBadge(brand.brand_badge || 'DS');
            setLocalBrandColor(brand.brand_color || '#2563eb');
            setLocalPlanLabel(brand.plan_label || 'Premium Plan');
            setLogoPreview(brand.logo_path || null);

            setMaintenanceMode(Boolean(system.maintenance_mode));
            setAllowRegistration(Boolean(system.allow_registration));
            setDefaultStorageLimit(Number(system.default_storage_limit) || 100);
        }
    }, [settingsData]);

    // Update maintenance mode mutation
    const updateMaintenanceMutation = useMutation({
        mutationFn: async (enabled) => {
            const response = await http.patch('/admin/system/maintenance', { maintenance_mode: enabled });
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['system', 'maintenance'] });
            queryClient.invalidateQueries({ queryKey: ['settings'] });
            toast.success(data.message || 'Maintenance mode updated successfully', 'Success');
        },
        onError: (error) => {
            const message = error?.response?.data?.message || 'Failed to update maintenance mode';
            toast.error(message, 'Error');
        },
    });

    const fileInputRef = useRef(null);

    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            toast.error('Please upload a valid image file (PNG, JPG, SVG).', 'Invalid File');
            return;
        }

        const reader = new FileReader();
        reader.onload = (ev) => {
            setLogoPreview(ev.target.result);
        };
        reader.readAsDataURL(file);

        // Upload to server
        uploadLogo(file);
    };

    const handleRemoveLogo = () => {
        setLogoPreview(null);
        removeLogo();
    };

    const handleSaveBrand = async (e) => {
        e.preventDefault();
        if (!localBrandName.trim()) {
            toast.error('Brand name cannot be empty.', 'Validation Error');
            return;
        }

        try {
            const payload = {
                brand_name: localBrandName.trim(),
                brand_badge: localBrandBadge.trim().slice(0, 4).toUpperCase() || 'DS',
                brand_color: localBrandColor,
                plan_label: localPlanLabel.trim(),
            };

            const updated = await updateSettingsAsync(payload);
            setSettings(updated);
            toast.success('Brand settings updated successfully', 'Success');
        } catch (error) {
            // Error is handled in mutation
        }
    };

    const handleResetBrand = () => {
        if (!confirm('Reset brand to factory defaults (DataSoft)?')) return;
        resetSettings();
        setLocalBrandName('DataSoft');
        setLocalBrandBadge('DS');
        setLocalBrandColor('#2563eb');
        setLocalPlanLabel('Premium Plan');
        setLogoPreview(null);
        toast.info('Brand identity reset to DataSoft defaults.', 'Brand Reset');
    };

    const handleSaveSystem = async (e) => {
        e.preventDefault();
        
        try {
            const payload = {
                maintenance_mode: maintenanceMode,
                allow_registration: allowRegistration,
                default_storage_limit: defaultStorageLimit,
            };

            const updated = await updateSettingsAsync(payload);
            setSettings(updated);

            // Always update maintenance mode via dedicated endpoint for immediate effect
            // This ensures both enabling AND disabling works properly
            await updateMaintenanceMutation.mutateAsync(maintenanceMode);

            toast.success('Platform system configuration updated successfully!', 'System Settings Saved');
        } catch (error) {
            // Error is handled in mutation
        }
    };

    return (
        <div className="p-6 sm:p-8 max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-bold mb-2">
                    <Shield className="h-3.5 w-3.5" />
                    <span>Global Administration</span>
                </div>
                <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">System Settings</h1>
                <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                    Configure platform brand identity, theme appearance, registration controls, and system limits.
                </p>
            </div>

            {/* ===== APPEARANCE / THEME SECTION ===== */}
            <Card className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] pb-4">
                    <h2 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] flex items-center gap-2">
                        {darkMode ? <Moon className="h-4 w-4 text-blue-600" /> : <Sun className="h-4 w-4 text-blue-600" />}
                        Appearance & Theme Mode
                    </h2>
                </div>

                <div className="flex items-center justify-between py-2">
                    <div>
                        <p className="text-sm font-bold text-[rgb(var(--color-text-primary))]">Dark Mode (Mode Gelap)</p>
                        <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-0.5">Switch between light mode and dark mode across admin & user dashboards.</p>
                    </div>
                    <label className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={(e) => setDarkMode(e.target.checked)}
                            className="sr-only"
                        />
                        <span className="absolute inset-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                        <span
                            className={`absolute top-1 left-1 h-4 w-4 transform rounded-full bg-white transition ${
                                darkMode ? 'translate-x-5 bg-blue-600' : ''
                            }`}
                        />
                    </label>
                </div>
            </Card>

            {/* ===== BRAND IDENTITY SECTION ===== */}
            <form onSubmit={handleSaveBrand} className="bg-[rgb(var(--color-surface))] rounded-3xl p-6 sm:p-8 border border-[rgb(var(--color-border))] shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] pb-4">
                    <h2 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] flex items-center gap-2">
                        <Palette className="h-4 w-4 text-blue-600" />
                        Brand Identity
                    </h2>
                    <button
                        type="button"
                        onClick={handleResetBrand}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-text-primary))] hover:bg-[rgb(var(--color-surface-alt))] rounded-lg transition"
                    >
                        <RefreshCw className="h-3.5 w-3.5" />
                        Reset to Default
                    </button>
                </div>

                {/* Live Preview */}
                <div className="rounded-2xl bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] p-5">
                    <p className="text-[10px] font-extrabold text-[rgb(var(--color-text-tertiary))] uppercase tracking-widest mb-3">Live Preview</p>
                    <div className="flex items-center gap-3">
                        {logoPreview ? (
                            <img
                                src={logoPreview}
                                alt="Brand Logo"
                                className="h-10 w-10 rounded-xl object-cover shadow-sm border border-[rgb(var(--color-border))]"
                            />
                        ) : (
                            <div
                                className="h-10 w-10 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md"
                                style={{ backgroundColor: localBrandColor }}
                            >
                                {localBrandBadge.slice(0, 4) || 'DS'}
                            </div>
                        )}
                        <div>
                            <div className="text-base font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">
                                {localBrandName || 'DataSoft'}
                            </div>
                            <div
                                className="text-[10px] font-extrabold uppercase tracking-[0.18em]"
                                style={{ color: localBrandColor }}
                            >
                                {localPlanLabel || 'Premium Plan'}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Brand Name */}
                    <div>
                        <label className="block text-xs font-extrabold text-[rgb(var(--color-text-primary))] mb-1.5 flex items-center gap-1.5">
                            <Type className="h-3.5 w-3.5 text-[rgb(var(--color-text-tertiary))]" /> Brand Name
                        </label>
                        <input
                            type="text"
                            required
                            value={localBrandName}
                            onChange={(e) => setLocalBrandName(e.target.value)}
                            placeholder="e.g. DataSoft"
                            className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition font-semibold"
                        />
                        <p className="mt-1 text-[10px] text-[rgb(var(--color-text-tertiary))]">Appears in sidebar, navbar, and footer.</p>
                    </div>

                    {/* Logo Badge Text */}
                    <div>
                        <label className="block text-xs font-extrabold text-[rgb(var(--color-text-primary))] mb-1.5 flex items-center gap-1.5">
                            <Type className="h-3.5 w-3.5 text-[rgb(var(--color-text-tertiary))]" /> Badge Text (max 4 chars)
                        </label>
                        <input
                            type="text"
                            value={localBrandBadge}
                            onChange={(e) => setLocalBrandBadge(e.target.value.slice(0, 4).toUpperCase())}
                            placeholder="e.g. DS"
                            maxLength={4}
                            className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition font-semibold tracking-widest uppercase"
                        />
                        <p className="mt-1 text-[10px] text-[rgb(var(--color-text-tertiary))]">Shown inside the colored logo box if no image logo.</p>
                    </div>

                    {/* Plan/Role Label */}
                    <div>
                        <label className="block text-xs font-extrabold text-[rgb(var(--color-text-primary))] mb-1.5 flex items-center gap-1.5">
                            <Type className="h-3.5 w-3.5 text-[rgb(var(--color-text-tertiary))]" /> Sidebar Subtitle Label
                        </label>
                        <input
                            type="text"
                            value={localPlanLabel}
                            onChange={(e) => setLocalPlanLabel(e.target.value)}
                            placeholder="e.g. Premium Plan"
                            className="w-full px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] placeholder-[rgb(var(--color-text-tertiary))] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition font-semibold"
                        />
                        <p className="mt-1 text-[10px] text-[rgb(var(--color-text-tertiary))]">Text shown below brand name in sidebar header.</p>
                    </div>

                    {/* Brand Color */}
                    <div>
                        <label className="block text-xs font-extrabold text-[rgb(var(--color-text-primary))] mb-1.5 flex items-center gap-1.5">
                            <Palette className="h-3.5 w-3.5 text-[rgb(var(--color-text-tertiary))]" /> Primary Brand Color
                        </label>
                        <div className="flex items-center gap-3">
                            <div
                                className="h-10 w-10 rounded-xl border border-[rgb(var(--color-border))] shadow-xs shrink-0"
                                style={{ backgroundColor: localBrandColor }}
                            />
                            <input
                                type="color"
                                value={localBrandColor}
                                onChange={(e) => setLocalBrandColor(e.target.value)}
                                className="w-full h-10 rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface-alt))] cursor-pointer"
                            />
                        </div>
                        <p className="mt-1 text-[10px] text-[rgb(var(--color-text-tertiary))]">Used for logo box, active nav items, and buttons.</p>
                    </div>
                </div>

                {/* Logo Upload */}
                <div>
                    <label className="block text-xs font-extrabold text-[rgb(var(--color-text-primary))] mb-1.5 flex items-center gap-1.5">
                        <Image className="h-3.5 w-3.5 text-[rgb(var(--color-text-tertiary))]" /> Custom Logo Image (optional)
                    </label>

                    {logoPreview ? (
                        <div className="flex items-center gap-4 p-4 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-2xl">
                            <img
                                src={logoPreview}
                                alt="Logo Preview"
                                className="h-16 w-16 rounded-xl object-contain border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-1 shadow-xs"
                            />
                            <div className="flex-1">
                                <p className="text-xs font-extrabold text-[rgb(var(--color-text-primary))]">Custom logo uploaded</p>
                                <p className="text-[10px] text-[rgb(var(--color-text-tertiary))] mt-0.5">This replaces the text badge box in navbar and sidebar.</p>
                            </div>
                            <button
                                type="button"
                                onClick={handleRemoveLogo}
                                disabled={isRemovingLogo}
                                className="p-2 text-[rgb(var(--color-text-tertiary))] hover:text-red-600 hover:bg-red-50 rounded-xl transition disabled:opacity-50"
                                title="Remove logo"
                            >
                                {isRemovingLogo ? <Spinner size="sm" /> : <X className="h-4 w-4" />}
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full flex flex-col items-center gap-2 py-6 px-4 border-2 border-dashed border-[rgb(var(--color-border))] rounded-2xl text-[rgb(var(--color-text-tertiary))] hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition"
                        >
                            <Upload className="h-6 w-6" />
                            <div className="text-center">
                                <p className="text-xs font-extrabold">Click to upload logo image</p>
                                <p className="text-[10px] mt-0.5">PNG, JPG, SVG — recommended 48×48px or larger</p>
                            </div>
                        </button>
                    )}

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png,image/jpeg,image/svg+xml,image/webp"
                        className="hidden"
                        onChange={handleLogoUpload}
                    />
                </div>

                {/* Save Brand Button */}
                <div className="flex justify-end pt-2 border-t border-[rgb(var(--color-border))]">
                    <button
                        type="submit"
                        disabled={isUpdating || isUploadingLogo}
                        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs shadow-md shadow-blue-600/20 transition disabled:opacity-50"
                    >
                        <Save className="h-4 w-4" />
                        <span>{isUpdating ? 'Saving...' : 'Apply Brand Changes'}</span>
                    </button>
                </div>
            </form>

            {/* ===== PLATFORM & MAINTENANCE CONTROLS SECTION ===== */}
            <form onSubmit={handleSaveSystem} className="bg-[rgb(var(--color-surface))] rounded-3xl p-6 sm:p-8 border border-[rgb(var(--color-border))] shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] pb-4">
                    <h2 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-blue-600" /> Maintenance & Platform Controls
                    </h2>
                    {maintenanceMode && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 animate-pulse">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            Maintenance Active
                        </span>
                    )}
                </div>

                {maintenanceMode && (
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-xs font-bold text-amber-900 dark:text-amber-200">
                                Mode Pemeliharaan (Maintenance Mode) Sedang Aktif!
                            </p>
                            <p className="text-xs text-amber-700 dark:text-amber-300 mt-1 leading-relaxed">
                                Seluruh akun user non-admin yang sedang aktif akan di-logout otomatis dan tidak dapat login kembali sampai Admin menonaktifkan modus pemeliharaan ini.
                            </p>
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between py-3 border-b border-[rgb(var(--color-border))]">
                    <div>
                        <p className="text-xs font-extrabold text-[rgb(var(--color-text-primary))]">Aktifkan Maintenance Mode</p>
                        <p className="text-xs text-[rgb(var(--color-text-secondary))] font-medium">
                            Nonaktifkan akses pengguna biasa sementara waktu untuk perbaikan atau pemeliharaan sistem.
                        </p>
                    </div>
                    <label className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer">
                        <input
                            type="checkbox"
                            checked={maintenanceMode}
                            onChange={(e) => setMaintenanceMode(e.target.checked)}
                            className="sr-only"
                        />
                        <span className={`absolute inset-0 rounded-full transition ${maintenanceMode ? 'bg-amber-500' : 'bg-slate-300 dark:bg-slate-600'}`} />
                        <span
                            className={`absolute top-1 left-1 h-4 w-4 transform rounded-full bg-white transition ${
                                maintenanceMode ? 'translate-x-5' : ''
                            }`}
                        />
                    </label>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[rgb(var(--color-border))]">
                    <div>
                        <p className="text-xs font-extrabold text-[rgb(var(--color-text-primary))]">Izinkan Pendaftaran Pengguna Baru</p>
                        <p className="text-xs text-[rgb(var(--color-text-secondary))] font-medium">Aktifkan atau nonaktifkan form registrasi di <code className="bg-[rgb(var(--color-surface-alt))] px-1 rounded">/register</code>.</p>
                    </div>
                    <input
                        type="checkbox"
                        checked={allowRegistration}
                        onChange={(e) => setAllowRegistration(e.target.checked)}
                        className="h-5 w-5 rounded border-[rgb(var(--color-border))] text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                </div>

                <div className="pt-2">
                    <label className="block text-xs font-extrabold text-[rgb(var(--color-text-primary))] mb-1.5">Kuota Penyimpanan Bawaan User (MB)</label>
                    <input
                        type="number"
                        value={defaultStorageLimit}
                        onChange={(e) => setDefaultStorageLimit(Number(e.target.value))}
                        className="w-full max-w-xs px-3.5 py-2.5 bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))] rounded-xl text-xs text-[rgb(var(--color-text-primary))] focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                    />
                </div>

                <div className="flex justify-end pt-2 border-t border-[rgb(var(--color-border))]">
                    <button
                        type="submit"
                        disabled={updateMaintenanceMutation.isPending || isUpdating}
                        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold rounded-xl text-xs shadow-md shadow-blue-600/20 transition disabled:opacity-50"
                    >
                        <Save className="h-4 w-4" />
                        <span>{updateMaintenanceMutation.isPending || isUpdating ? 'Saving...' : 'Save Settings'}</span>
                    </button>
                </div>
            </form>
        </div>
    );
}