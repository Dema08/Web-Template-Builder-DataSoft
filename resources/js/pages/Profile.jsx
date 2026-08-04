import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Camera, Trash2, Shield, Globe, Sparkles } from 'lucide-react';
import { Card, Input, Button, Alert, Spinner } from '@components/ui';
import { useProfile, useWebsite } from '@hooks';
import { useAuthStore } from '@store';

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

    useEffect(() => {
        if (profile) {
            profileForm.reset({ name: profile.name || '', email: profile.email || '' });
            setAvatarPreview(profile.avatar || null);
            setUser(profile);
        }
    }, [profile, profileForm, setUser]);

    const websiteSummary = useMemo(() => ({
        name: website?.name || 'Koperasi Maju Profile',
        template: website?.template || 'Corporate Pro',
        status: website?.is_published ? 'Published' : 'Draft',
        slug: website?.subdomain || 'koperasimaju',
    }), [website]);

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

    const onAvatarPick = async (event) => {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        const tempPreview = URL.createObjectURL(file);
        setAvatarPreview(tempPreview);

        try {
            await uploadAvatar(file);
            setStatusMessage('Avatar updated successfully.');
            setStatusVariant('success');
        } catch (error) {
            setStatusMessage(error?.response?.data?.message || 'Unable to upload avatar.');
            setStatusVariant('error');
        } finally {
            event.target.value = '';
        }
    };

    const onDeleteAvatar = async () => {
        try {
            await deleteAvatar();
            setAvatarPreview(null);
            setStatusMessage('Avatar removed successfully.');
            setStatusVariant('success');
        } catch (error) {
            setStatusMessage(error?.response?.data?.message || 'Unable to delete avatar.');
            setStatusVariant('error');
        }
    };

    const onPasswordSubmit = async (values) => {
        try {
            passwordForm.clearErrors();
            await changePassword(values);
            passwordForm.reset({ current_password: '', password: '', password_confirmation: '' });
            setStatusMessage('Password changed successfully.');
            setStatusVariant('success');
        } catch (error) {
            setStatusMessage(error?.response?.data?.message || 'Unable to change password.');
            setStatusVariant('error');
            normalizeApiErrors(error, passwordForm);
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-full min-h-[420px] items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-6xl p-6 lg:p-8">
            <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-semibold text-slate-900">User Profile</h1>
                    <p className="text-sm text-slate-500">Manage your personal account details and website identity.</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                    <Sparkles className="h-3.5 w-3.5" />
                    Modern SaaS Profile
                </div>
            </div>

            {statusMessage && (
                <div className="mb-6">
                    <Alert variant={statusVariant} title={statusVariant === 'success' ? 'Success' : 'Message'}>
                        {statusMessage}
                    </Alert>
                </div>
            )}

            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.9fr]">
                <Card className="p-6">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="relative">
                            <img
                                src={avatarPreview || profile?.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(profile?.name || 'User')}
                                alt="Avatar"
                                className="h-20 w-20 rounded-full object-cover ring-4 ring-indigo-50"
                            />
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute -bottom-1 -right-1 rounded-full bg-indigo-600 p-2 text-white shadow-lg hover:bg-indigo-700"
                            >
                                <Camera className="h-4 w-4" />
                            </button>
                            <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,image/webp,image/jpg" className="hidden" onChange={onAvatarPick} />
                        </div>

                        <div className="min-w-0">
                            <p className="text-lg font-semibold text-slate-900">{profile?.name || 'User'}</p>
                            <p className="text-sm text-slate-500">{profile?.email || 'email@example.com'}</p>
                            <span className="mt-2 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                                {profile?.role || 'user'}
                            </span>
                        </div>
                    </div>

                    <div className="mb-4 flex items-center gap-2">
                        <Button type="button" variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()} disabled={isUploadingAvatar}>
                            {isUploadingAvatar ? <Spinner size="sm" /> : 'Upload avatar'}
                        </Button>
                        <Button type="button" variant="danger" size="sm" onClick={onDeleteAvatar} disabled={isDeletingAvatar || !profile?.avatar}>
                            {isDeletingAvatar ? <Spinner size="sm" /> : <Trash2 className="h-4 w-4" />}
                        </Button>
                    </div>

                    <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
                        <Input
                            label="Name"
                            placeholder="Jane Doe"
                            error={profileForm.formState.errors.name?.message}
                            {...profileForm.register('name', {
                                required: 'Name is required',
                                maxLength: { value: 100, message: 'Name must be 100 characters or fewer' },
                            })}
                        />

                        <Input
                            label="Email"
                            type="email"
                            placeholder="you@company.com"
                            error={profileForm.formState.errors.email?.message}
                            {...profileForm.register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email address',
                                },
                            })}
                        />

                        <div className="flex justify-end">
                            <Button type="submit" disabled={isUpdatingProfile}>
                                {isUpdatingProfile ? <Spinner size="sm" /> : 'Save profile'}
                            </Button>
                        </div>
                    </form>
                </Card>

                <div className="space-y-6">
                    <Card className="p-6">
                        <div className="mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-indigo-600" />
                            <h2 className="text-lg font-semibold text-slate-900">Change Password</h2>
                        </div>

                        <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                            <Input
                                label="Current Password"
                                type="password"
                                autoComplete="current-password"
                                error={passwordForm.formState.errors.current_password?.message}
                                {...passwordForm.register('current_password', {
                                    required: 'Current password is required',
                                })}
                            />

                            <Input
                                label="New Password"
                                type="password"
                                autoComplete="new-password"
                                error={passwordForm.formState.errors.password?.message}
                                {...passwordForm.register('password', {
                                    required: 'New password is required',
                                    minLength: { value: 8, message: 'Password must be at least 8 characters' },
                                })}
                            />

                            <Input
                                label="Confirm Password"
                                type="password"
                                autoComplete="new-password"
                                error={passwordForm.formState.errors.password_confirmation?.message}
                                {...passwordForm.register('password_confirmation', {
                                    required: 'Please confirm your password',
                                    validate: (value, values) => value === values.password || 'Passwords do not match',
                                })}
                            />

                            <div className="flex justify-end">
                                <Button type="submit" variant="secondary" disabled={isChangingPassword}>
                                    {isChangingPassword ? <Spinner size="sm" /> : 'Update password'}
                                </Button>
                            </div>
                        </form>
                    </Card>

                    <Card className="p-6">
                        <div className="mb-4 flex items-center gap-2">
                            <Globe className="h-5 w-5 text-indigo-600" />
                            <h2 className="text-lg font-semibold text-slate-900">Website Summary</h2>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between gap-4">
                                <span className="text-slate-500">Website Name</span>
                                <span className="font-medium text-slate-900">{websiteSummary.name}</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-slate-500">Template</span>
                                <span className="font-medium text-slate-900">{websiteSummary.template}</span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-slate-500">Status</span>
                                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                                    {websiteSummary.status}
                                </span>
                            </div>
                            <div className="flex justify-between gap-4">
                                <span className="text-slate-500">Slug</span>
                                <span className="font-medium text-slate-900">{websiteSummary.slug}</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
