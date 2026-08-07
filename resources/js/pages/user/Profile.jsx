import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Camera, Trash2, Shield, Globe } from 'lucide-react';
import { Card, Input, Button, Alert, Spinner } from '@components/ui';
import { useProfile, useWebsite } from '@hooks';
import { useAuthStore, useSettingsStore } from '@store';

const normalizeApiErrors = (error, form) => {
    const fieldErrors = error?.response?.data?.errors;

    if (!fieldErrors || typeof fieldErrors !== 'object') {
        return;
    }

    Object.entries(fieldErrors).forEach(([field, messages]) => {
        form.setError(field, {
            type: 'server',
            message: Array.isArray(messages) ? messages[0] : messages,
        });
    });
};

export default function Profile() {
    const { profile, isLoading, updateProfile, isUpdatingProfile, uploadAvatar, isUploadingAvatar, deleteAvatar, isDeletingAvatar, changePassword, isChangingPassword } = useProfile();
    const { website } = useWebsite();
    const setUser = useAuthStore((state) => state.setUser);
    const { brand_name, brand_badge, brand_color } = useSettingsStore();
    const fileInputRef = useRef(null);

    const [avatarPreview, setAvatarPreview] = useState(null);
    const [statusMessage, setStatusMessage] = useState(null);
    const [statusVariant, setStatusVariant] = useState('success');

    const profileForm = useForm({
        defaultValues: { name: '', email: '' },
    });

    const passwordForm = useForm({
        defaultValues: { current_password: '', password: '', password_confirmation: '' },
    });

    const stableReset = useCallback(
        (vals) => profileForm.reset(vals),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const stableSetUser = useCallback(
        (u) => setUser(u),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    useEffect(() => {
        if (profile) {
            stableReset({ name: profile.name || '', email: profile.email || '' });
            setAvatarPreview(profile.avatar || null);
            stableSetUser(profile);
        }
    }, [profile, stableReset, stableSetUser]);

    const avatarFallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile?.name || 'User')}&background=6366f1&color=fff`;

    const websiteSummary = useMemo(
        () => ({
            name: website?.name || 'My Company Profile',
            template: website?.template || 'Corporate Pro v2',
            status: website?.is_published ? 'Published' : 'Draft',
            slug: website?.subdomain || 'mycompany',
        }),
        [website]
    );

    const onProfileSubmit = async (values) => {
        try {
            profileForm.clearErrors();
            await updateProfile(values);
            setStatusMessage('Profile updated successfully.');
            setStatusVariant('success');
        } catch (error) {
            setStatusMessage(error?.response?.data?.message || 'Unable to update your profile right now.');
            setStatusVariant('error');
            normalizeApiErrors(error, profileForm);
        }
    };

    const onPasswordSubmit = async (values) => {
        try {
            passwordForm.clearErrors();
            await changePassword(values);
            setStatusMessage('Password changed successfully.');
            setStatusVariant('success');
            passwordForm.reset();
        } catch (error) {
            setStatusMessage(error?.response?.data?.message || 'Unable to change password.');
            setStatusVariant('error');
            normalizeApiErrors(error, passwordForm);
        }
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setStatusMessage('Please select a valid image file.', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (ev) => {
            setAvatarPreview(ev.target.result);
            uploadAvatar(file);
        };
        reader.readAsDataURL(file);
    };

    const handleDeleteAvatar = () => {
        setAvatarPreview(null);
        deleteAvatar();
    };

    return (
        <div className="mx-auto max-w-6xl p-6 lg:p-8 space-y-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">User Profile</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))]">Manage your personal account details and website identity.</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-200/60 dark:bg-indigo-950/40 dark:border-indigo-800/40 px-3.5 py-1 text-xs font-bold text-indigo-700 dark:text-indigo-300">
                    <Shield className="h-3.5 w-3.5" />
                    {brand_name} User Profile
                </div>
            </div>

            {statusMessage && (
                <Alert variant={statusVariant === 'success' ? 'success' : 'error'} title={statusVariant === 'success' ? 'Success' : 'Message'}>
                    {statusMessage}
                </Alert>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Avatar Card */}
                <Card className="p-6 space-y-4">
                    <h3 className="text-xs font-extrabold text-[rgb(var(--color-text-primary))] uppercase tracking-wider">Profile Photo</h3>
                    <div className="flex flex-col items-center gap-3">
                        <img
                            src={avatarPreview || avatarFallback}
                            alt="Profile"
                            className="h-24 w-24 rounded-full object-cover ring-4 ring-[rgb(var(--color-border))]"
                        />
                        <div className="flex gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isUploadingAvatar}
                            >
                                {isUploadingAvatar ? <Spinner size="sm" /> : <Camera className="h-4 w-4" />}
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={handleDeleteAvatar}
                                disabled={isDeletingAvatar}
                                className="text-red-600 hover:text-red-700"
                            >
                                {isDeletingAvatar ? <Spinner size="sm" /> : <Trash2 className="h-4 w-4" />}
                            </Button>
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleAvatarChange}
                        />
                    </div>

                    {/* Website Summary */}
                    <div className="mt-4 pt-4 border-t border-[rgb(var(--color-border))]">
                        <h4 className="text-xs font-extrabold text-[rgb(var(--color-text-primary))] uppercase tracking-wider mb-3">Your Website</h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Globe className="h-4 w-4 text-[rgb(var(--color-text-tertiary))]" />
                                <span className="text-xs font-bold text-[rgb(var(--color-text-primary))]">{websiteSummary.name}</span>
                            </div>
                            <p className="text-[10px] text-[rgb(var(--color-text-secondary))] ml-6">Template: {websiteSummary.template}</p>
                            <p className="text-[10px] text-[rgb(var(--color-text-secondary))] ml-6">Status: {websiteSummary.status}</p>
                        </div>
                    </div>
                </Card>

                {/* Forms */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Profile Info */}
                    <Card className="p-6">
                        <h3 className="text-xs font-extrabold text-[rgb(var(--color-text-primary))] uppercase tracking-wider mb-4">Profile Information</h3>
                        <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">Full Name</label>
                                <Input {...profileForm.register('name', { required: 'Name is required' })} placeholder="Your name" />
                                {profileForm.formState.errors.name && (
                                    <p className="mt-1 text-xs text-red-500">{profileForm.formState.errors.name.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">Email Address</label>
                                <Input {...profileForm.register('email', { required: 'Email is required' })} placeholder="you@example.com" />
                                {profileForm.formState.errors.email && (
                                    <p className="mt-1 text-xs text-red-500">{profileForm.formState.errors.email.message}</p>
                                )}
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit" disabled={isUpdatingProfile}>
                                    {isUpdatingProfile ? <Spinner size="sm" /> : 'Save Changes'}
                                </Button>
                            </div>
                        </form>
                    </Card>

                    {/* Change Password */}
                    <Card className="p-6">
                        <h3 className="text-xs font-extrabold text-[rgb(var(--color-text-primary))] uppercase tracking-wider mb-4">Change Password</h3>
                        <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">Current Password</label>
                                <Input type="password" {...passwordForm.register('current_password', { required: 'Current password is required' })} placeholder="••••••••" />
                                {passwordForm.formState.errors.current_password && (
                                    <p className="mt-1 text-xs text-red-500">{passwordForm.formState.errors.current_password.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">New Password</label>
                                <Input type="password" {...passwordForm.register('password', { required: 'New password is required', minLength: { value: 8, message: 'Min 8 characters' } })} placeholder="••••••••" />
                                {passwordForm.formState.errors.password && (
                                    <p className="mt-1 text-xs text-red-500">{passwordForm.formState.errors.password.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">Confirm New Password</label>
                                <Input type="password" {...passwordForm.register('password_confirmation', { required: 'Please confirm password' })} placeholder="••••••••" />
                                {passwordForm.formState.errors.password_confirmation && (
                                    <p className="mt-1 text-xs text-red-500">{passwordForm.formState.errors.password_confirmation.message}</p>
                                )}
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit" disabled={isChangingPassword}>
                                    {isChangingPassword ? <Spinner size="sm" /> : 'Change Password'}
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}