import { useState } from 'react';
import { Shield, Settings, Server, Mail, Save, RefreshCw, Database, Upload } from 'lucide-react';
import { Card, Button, Spinner } from '@components/ui';
import { toast } from '@store';

export default function AdminSettings() {
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [allowRegistration, setAllowRegistration] = useState(true);
    const [defaultStorageLimit, setDefaultStorageLimit] = useState(100);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            // Simulate an async save operation
            await new Promise((resolve) => setTimeout(resolve, 1000));
            toast.success('Platform system configuration updated successfully!', 'Admin Settings Saved');
        } catch (error) {
            toast.error('Failed to save settings. Please try again.', 'Save Error');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="p-6 sm:p-8 max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
                    <Shield className="h-3.5 w-3.5" />
                    <span>Global Administration</span>
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Settings</h1>
                <p className="text-sm text-slate-500 mt-1">
                    Configure core DataSoft platform parameters, registration controls, and system limits.
                </p>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
                {/* General Settings */}
                <Card className="p-6 sm:p-8 space-y-6">
                    <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Settings className="h-4 w-4 text-indigo-600" /> Platform Controls
                    </h2>

                    <div className="flex items-center justify-between py-4 border-b border-slate-100">
                        <div>
                            <p className="text-xs font-extrabold text-slate-900">Maintenance Mode</p>
                            <p className="text-xs text-slate-500 mt-0.5">Temporarily disable non-admin user access for system upgrades.</p>
                        </div>
                        <label className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer">
                            <input
                                type="checkbox"
                                checked={maintenanceMode}
                                onChange={(e) => setMaintenanceMode(e.target.checked)}
                                className="sr-only"
                            />
                            <span className="absolute inset-0 rounded-full bg-slate-300" />
                            <span
                                className={`absolute top-1 left-1 h-4 w-4 transform rounded-full bg-white transition ${
                                    maintenanceMode ? 'translate-x-5 bg-indigo-600' : ''
                                }`}
                            />
                        </label>
                    </div>

                    <div className="flex items-center justify-between py-4 border-b border-slate-100">
                        <div>
                            <p className="text-xs font-extrabold text-slate-900">Allow Public User Registrations</p>
                            <p className="text-xs text-slate-500 mt-0.5">Enable or disable new user signups on `/register`.</p>
                        </div>
                        <label className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer">
                            <input
                                type="checkbox"
                                checked={allowRegistration}
                                onChange={(e) => setAllowRegistration(e.target.checked)}
                                className="sr-only"
                            />
                            <span className="absolute inset-0 rounded-full bg-slate-300" />
                            <span
                                className={`absolute top-1 left-1 h-4 w-4 transform rounded-full bg-white transition ${
                                    allowRegistration ? 'translate-x-5 bg-indigo-600' : ''
                                }`}
                            />
                        </label>
                    </div>

                    <div className="pt-2">
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Default User Storage Quota (MB)</label>
                        <input
                            type="number"
                            value={defaultStorageLimit}
                            onChange={(e) => setDefaultStorageLimit(Number(e.target.value))}
                            className="w-full max-w-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                        />
                    </div>
                </Card>

                {/* Save Button */}
                <div className="flex justify-end">
                    <Button type="submit" disabled={isSaving} variant="primary">
                        {isSaving ? (
                            <>
                                <Spinner size="sm" />
                                <span>Saving...</span>
                            </>
                        ) : (
                            <>
                                <Save className="h-4 w-4" />
                                <span>Save System Settings</span>
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
