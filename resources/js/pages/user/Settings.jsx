import { useState, useEffect } from 'react';
import { Bell, BellOff, Shield, Save, Sun, Moon, Globe } from 'lucide-react';
import { Card, Button, Spinner } from '@components/ui';
import { toast } from '@store';
import LanguageSelector from '@components/common/LanguageSelector';

export default function Settings() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

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
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-bold mb-2 dark:bg-indigo-900/40 dark:text-indigo-100">
                    <Shield className="h-3.5 w-3.5" />
                    <span>Account Settings</span>
                </div>
                <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Settings</h1>
                <p className="text-sm text-[rgb(var(--color-text-secondary))] mt-1">
                    Manage your account preferences and notification controls.
                </p>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
                {/* Preferences Section */}
                <Card className="p-6 sm:p-8 space-y-6">
                    <h2 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] flex items-center gap-2">
                        <Bell className="h-4 w-4 text-indigo-600" /> Notifications
                    </h2>

                    <div className="flex items-center justify-between py-4 border-b border-[rgb(var(--color-border))]">
                        <div>
                            <p className="text-sm font-bold text-[rgb(var(--color-text-primary))]">Email Notifications</p>
                            <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-0.5">Receive weekly activity and update notifications by email.</p>
                        </div>
                        <label className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none cursor-pointer">
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={(e) => setNotifications(e.target.checked)}
                                className="sr-only"
                            />
                            <span className="absolute inset-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                            <span
                                className={`absolute top-1 left-1 h-4 w-4 transform rounded-full bg-white transition ${
                                    notifications ? 'translate-x-5 bg-indigo-600' : ''
                                }`}
                              />
                        </label>
                    </div>
                </Card>

            {/* Language Section */}
            <Card className="p-6 sm:p-8 space-y-6">
                <h2 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] flex items-center gap-2">
                    <Globe className="h-4 w-4 text-indigo-600" /> Language
                </h2>

                <div className="max-w-md">
                    <LanguageSelector variant="settings" showLabel={true} />
                </div>
            </Card>

            {/* Appearance Section */}
            <Card className="p-6 sm:p-8 space-y-6">
                <h2 className="text-base font-extrabold text-[rgb(var(--color-text-primary))] flex items-center gap-2">
                    {darkMode ? <Moon className="h-4 w-4 text-indigo-600" /> : <Sun className="h-4 w-4 text-indigo-600" />} Appearance
                </h2>

                    <div className="flex items-center justify-between py-2">
                        <div>
                            <p className="text-sm font-bold text-[rgb(var(--color-text-primary))]">Dark Mode</p>
                            <p className="text-xs text-[rgb(var(--color-text-secondary))] mt-0.5">Switch between light and dark theme</p>
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
                                    darkMode ? 'translate-x-5 bg-indigo-600' : ''
                                }`}
                              />
                        </label>
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
