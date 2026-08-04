import { useState } from 'react';
import { Bell, BellOff, Globe, Shield, Save } from 'lucide-react';
import { Card, Button, Spinner } from '@components/ui';
import { toast } from '@store';

export default function Settings() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');
    const [timezone, setTimezone] = useState('Asia/Jakarta');
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            // Simulate an async save
            await new Promise((resolve) => setTimeout(resolve, 1000));
            toast.success('Your settings have been saved successfully!', 'Settings Saved');
        } catch (error) {
            toast.error('Unable to save settings. Please try again.', 'Save Error');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 lg:p-8 space-y-8">
            {/* Page Header */}
            <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
                    <Shield className="h-3.5 w-3.5" />
                    <span>Account Settings</span>
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Settings</h1>
                <p className="text-sm text-slate-500 mt-1">
                    Manage your account preferences, notification controls, and language settings.
                </p>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
                {/* Preferences Section */}
                <Card className="p-6 sm:p-8 space-y-6">
                    <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Bell className="h-4 w-4 text-indigo-600" /> Notifications
                    </h2>

                    <div className="flex items-center justify-between py-4 border-b border-slate-100">
                        <div>
                            <p className="text-sm font-bold text-slate-900">Email Notifications</p>
                            <p className="text-xs text-slate-500 mt-0.5">Receive weekly activity and update notifications by email.</p>
                        </div>
                        <label className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer">
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={(e) => setNotifications(e.target.checked)}
                                className="sr-only"
                            />
                            <span className="absolute inset-0 rounded-full bg-slate-300" />
                            <span
                                className={`absolute top-1 left-1 h-4 w-4 transform rounded-full bg-white transition ${
                                    notifications ? 'translate-x-5 bg-indigo-600' : ''
                                }`}
                              />
                        </label>
                    </div>

                    <div className="flex items-center justify-between py-2">
                        <div>
                            <p className="text-sm font-bold text-slate-900">Push / Browser Notifications</p>
                            <p className="text-xs text-slate-500 mt-0.5">Enable web push notifications for real-time updates.</p>
                        </div>
                        <label className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={(e) => setDarkMode(e.target.checked)}
                                className="sr-only"
                            />
                            <span className="absolute inset-0 rounded-full bg-slate-300" />
                            <span
                                className={`absolute top-1 left-1 h-4 w-4 transform rounded-full bg-white transition ${
                                    darkMode ? 'translate-x-5 bg-indigo-600' : ''
                                }`}
                              />
                        </label>
                    </div>
                </Card>

                {/* Language & Region */}
                <Card className="p-6 sm:p-8 space-y-6">
                    <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-indigo-600" /> Language & Region
                    </h2>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Language</label>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                            >
                                <option value="en">English (US)</option>
                                <option value="id">Bahasa Indonesia</option>
                                <option value="es">Español</option>
                                <option value="fr">Français</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1.5">Timezone</label>
                            <select
                                value={timezone}
                                onChange={(e) => setTimezone(e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                            >
                                <option value="Asia/Jakarta">Asia/Jakarta (UTC+7)</option>
                                <option value="UTC">UTC</option>
                                <option value="America/New_York">America/New_York (UTC-5)</option>
                                <option value="Europe/London">Europe/London (UTC+0)</option>
                            </select>
                        </div>
                    </div>
                </Card>

                {/* Save Button */}
                <div className="flex justify-end">
                    <Button type="submit" variant="primary" disabled={isSaving}>
                        {isSaving ? (
                            <>
                                <Spinner size="sm" />
                                <span>Saving...</span>
                            </>
                        ) : (
                            <>
                                <Save className="h-4 w-4" />
                                <span>Save Settings</span>
                            </>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
