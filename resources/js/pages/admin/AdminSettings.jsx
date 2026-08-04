import { useState, useRef } from 'react';
import { Shield, Settings, Save, RefreshCw, Image, Type, Palette, Upload, X } from 'lucide-react';
import { toast } from '@store';
import { useBrandStore } from '@store';

export default function AdminSettings() {
    const { brandName, brandBadge, brandColor, logoUrl, planLabel, setBrand, resetBrand } = useBrandStore();

    // Brand identity form state
    const [localBrandName, setLocalBrandName] = useState(brandName);
    const [localBrandBadge, setLocalBrandBadge] = useState(brandBadge);
    const [localBrandColor, setLocalBrandColor] = useState(brandColor);
    const [localPlanLabel, setLocalPlanLabel] = useState(planLabel);
    const [localLogoUrl, setLocalLogoUrl] = useState(logoUrl);
    const [logoPreview, setLogoPreview] = useState(logoUrl);

    // System settings state
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [allowRegistration, setAllowRegistration] = useState(true);
    const [defaultStorageLimit, setDefaultStorageLimit] = useState(100);

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
            setLocalLogoUrl(ev.target.result);
        };
        reader.readAsDataURL(file);
    };

    const handleRemoveLogo = () => {
        setLogoPreview(null);
        setLocalLogoUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleSaveBrand = (e) => {
        e.preventDefault();
        if (!localBrandName.trim()) {
            toast.error('Brand name cannot be empty.', 'Validation Error');
            return;
        }
        setBrand({
            brandName: localBrandName.trim(),
            brandBadge: localBrandBadge.trim().slice(0, 4).toUpperCase() || 'DS',
            brandColor: localBrandColor,
            planLabel: localPlanLabel.trim(),
            logoUrl: localLogoUrl,
        });
        toast.success('Brand identity updated successfully! Changes are now live across all panels.', 'Brand Saved');
    };

    const handleResetBrand = () => {
        if (!confirm('Reset brand to factory defaults (DataSoft)?')) return;
        resetBrand();
        setLocalBrandName('DataSoft');
        setLocalBrandBadge('DS');
        setLocalBrandColor('#2563eb');
        setLocalPlanLabel('Premium Plan');
        setLocalLogoUrl(null);
        setLogoPreview(null);
        toast.info('Brand identity reset to DataSoft defaults.', 'Brand Reset');
    };

    const handleSaveSystem = (e) => {
        e.preventDefault();
        toast.success('Platform system configuration updated successfully!', 'System Settings Saved');
    };

    return (
        <div className="p-6 sm:p-8 max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                    <Shield className="h-3.5 w-3.5" />
                    <span>Global Administration</span>
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Settings</h1>
                <p className="text-sm text-slate-500 mt-1">
                    Configure platform brand identity, registration controls, and system limits.
                </p>
            </div>

            {/* ===== BRAND IDENTITY SECTION ===== */}
            <form onSubmit={handleSaveBrand} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Palette className="h-4 w-4 text-blue-600" />
                        Brand Identity
                    </h2>
                    <button
                        type="button"
                        onClick={handleResetBrand}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
                    >
                        <RefreshCw className="h-3.5 w-3.5" />
                        Reset to Default
                    </button>
                </div>

                {/* Live Preview */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">Live Preview</p>
                    <div className="flex items-center gap-3">
                        {logoPreview ? (
                            <img
                                src={logoPreview}
                                alt="Brand Logo"
                                className="h-10 w-10 rounded-xl object-cover shadow-sm border border-slate-200"
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
                            <div className="text-base font-extrabold text-slate-900 tracking-tight">
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
                        <label className="block text-xs font-extrabold text-slate-700 mb-1.5 flex items-center gap-1.5">
                            <Type className="h-3.5 w-3.5 text-slate-400" /> Brand Name
                        </label>
                        <input
                            type="text"
                            required
                            value={localBrandName}
                            onChange={(e) => setLocalBrandName(e.target.value)}
                            placeholder="e.g. DataSoft"
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition font-semibold"
                        />
                        <p className="mt-1 text-[10px] text-slate-400">Appears in sidebar, navbar, and footer.</p>
                    </div>

                    {/* Logo Badge Text */}
                    <div>
                        <label className="block text-xs font-extrabold text-slate-700 mb-1.5 flex items-center gap-1.5">
                            <Type className="h-3.5 w-3.5 text-slate-400" /> Badge Text (max 4 chars)
                        </label>
                        <input
                            type="text"
                            value={localBrandBadge}
                            onChange={(e) => setLocalBrandBadge(e.target.value.slice(0, 4).toUpperCase())}
                            placeholder="e.g. DS"
                            maxLength={4}
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition font-semibold tracking-widest uppercase"
                        />
                        <p className="mt-1 text-[10px] text-slate-400">Shown inside the colored logo box if no image logo.</p>
                    </div>

                    {/* Plan/Role Label */}
                    <div>
                        <label className="block text-xs font-extrabold text-slate-700 mb-1.5 flex items-center gap-1.5">
                            <Type className="h-3.5 w-3.5 text-slate-400" /> Sidebar Subtitle Label
                        </label>
                        <input
                            type="text"
                            value={localPlanLabel}
                            onChange={(e) => setLocalPlanLabel(e.target.value)}
                            placeholder="e.g. Premium Plan"
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition font-semibold"
                        />
                        <p className="mt-1 text-[10px] text-slate-400">Text shown below brand name in sidebar header.</p>
                    </div>

                    {/* Brand Color */}
                    <div>
                        <label className="block text-xs font-extrabold text-slate-700 mb-1.5 flex items-center gap-1.5">
                            <Palette className="h-3.5 w-3.5 text-slate-400" /> Primary Brand Color
                        </label>
                        <div className="flex items-center gap-3">
                            <div
                                className="h-10 w-10 rounded-xl border border-slate-200 shadow-xs shrink-0"
                                style={{ backgroundColor: localBrandColor }}
                            />
                            <input
                                type="color"
                                value={localBrandColor}
                                onChange={(e) => setLocalBrandColor(e.target.value)}
                                className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer"
                            />
                        </div>
                        <p className="mt-1 text-[10px] text-slate-400">Used for logo box, active nav items, and buttons.</p>
                    </div>
                </div>

                {/* Logo Upload */}
                <div>
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5 flex items-center gap-1.5">
                        <Image className="h-3.5 w-3.5 text-slate-400" /> Custom Logo Image (optional)
                    </label>

                    {logoPreview ? (
                        <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                            <img
                                src={logoPreview}
                                alt="Logo Preview"
                                className="h-16 w-16 rounded-xl object-contain border border-slate-200 bg-white p-1 shadow-xs"
                            />
                            <div className="flex-1">
                                <p className="text-xs font-extrabold text-slate-800">Custom logo uploaded</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">This replaces the text badge box in navbar and sidebar.</p>
                            </div>
                            <button
                                type="button"
                                onClick={handleRemoveLogo}
                                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition"
                                title="Remove logo"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full flex flex-col items-center gap-2 py-6 px-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition"
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
                <div className="flex justify-end pt-2 border-t border-slate-100">
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs shadow-md shadow-blue-600/20 transition"
                    >
                        <Save className="h-4 w-4" />
                        <span>Apply Brand Changes</span>
                    </button>
                </div>
            </form>

            {/* ===== PLATFORM CONTROLS SECTION ===== */}
            <form onSubmit={handleSaveSystem} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
                    <Settings className="h-4 w-4 text-blue-600" /> Platform Controls
                </h2>

                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <div>
                        <p className="text-xs font-extrabold text-slate-900">Maintenance Mode</p>
                        <p className="text-xs text-slate-500 font-medium">Temporarily disable non-admin user access for system upgrades.</p>
                    </div>
                    <input
                        type="checkbox"
                        checked={maintenanceMode}
                        onChange={(e) => setMaintenanceMode(e.target.checked)}
                        className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                </div>

                <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <div>
                        <p className="text-xs font-extrabold text-slate-900">Allow Public User Registrations</p>
                        <p className="text-xs text-slate-500 font-medium">Enable or disable new user signups on <code className="bg-slate-100 px-1 rounded">/register</code>.</p>
                    </div>
                    <input
                        type="checkbox"
                        checked={allowRegistration}
                        onChange={(e) => setAllowRegistration(e.target.checked)}
                        className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                </div>

                <div className="pt-2">
                    <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Default User Storage Quota (MB)</label>
                    <input
                        type="number"
                        value={defaultStorageLimit}
                        onChange={(e) => setDefaultStorageLimit(Number(e.target.value))}
                        className="w-full max-w-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition"
                    />
                </div>

                <div className="flex justify-end pt-2 border-t border-slate-100">
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs shadow-md shadow-blue-600/20 transition"
                    >
                        <Save className="h-4 w-4" />
                        <span>Save System Settings</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
