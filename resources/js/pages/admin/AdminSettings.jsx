import { useState } from 'react';
import { Shield, Settings, Server, Mail, Save, RefreshCw } from 'lucide-react';
import { toast } from '@store';

export default function AdminSettings() {
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [allowRegistration, setAllowRegistration] = useState(true);
    const [defaultStorageLimit, setDefaultStorageLimit] = useState(100);

    const handleSave = (e) => {
        e.preventDefault();
        toast.success('Platform system configuration updated successfully!', 'Admin Settings Saved');
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
                    Configure core DataSoft platform parameters, registration controls, and system limits.
                </p>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
                {/* General Settings */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
                    <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Settings className="h-4 w-4 text-blue-600" /> Platform Controls
                    </h2>

                    <div className="flex items-center justify-between py-3 border-b border-slate-100">
                        <div>
                            <p className="text-xs font-extrabold text-slate-900">Maintenance Mode</p>
                            <p className="text-xs text-slate-500">Temporarily disable non-admin user access for system upgrades.</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={maintenanceMode}
                            onChange={(e) => setMaintenanceMode(e.target.checked)}
                            className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-slate-100">
                        <div>
                            <p className="text-xs font-extrabold text-slate-900">Allow Public User Registrations</p>
                            <p className="text-xs text-slate-500">Enable or disable new user signups on `/register`.</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={allowRegistration}
                            onChange={(e) => setAllowRegistration(e.target.checked)}
                            className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                    </div>

                    <div className="pt-2">
                        <label className="block text-xs font-bold text-slate-700 mb-1">Default User Storage Quota (MB)</label>
                        <input
                            type="number"
                            value={defaultStorageLimit}
                            onChange={(e) => setDefaultStorageLimit(Number(e.target.value))}
                            className="w-full max-w-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800"
                        />
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md shadow-blue-600/20 transition"
                    >
                        <Save className="h-4 w-4" />
                        <span>Save System Settings</span>
                    </button>
                </div>
            </form>
        </div>
    );
}
