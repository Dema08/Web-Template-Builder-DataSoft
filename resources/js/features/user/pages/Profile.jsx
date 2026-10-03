import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Camera, Trash2, Shield, Crown, LayoutTemplate, X } from 'lucide-react';
import { Card, Input, Button, Alert, Spinner } from '@shared/components/ui';
import { useProfile } from '@hooks';
import { useAuthStore, useSettingsStore, useSubscriptionStore, toast } from '@store';
import { templateApi } from '@api';

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
    const setUser = useAuthStore((state) => state.setUser);
    const { brand_name } = useSettingsStore();
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
        []
    );

    const stableSetUser = useCallback(
        (u) => setUser(u),
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

    const onProfileSubmit = async (values) => {
        try {
            profileForm.clearErrors();
            await updateProfile(values);
            setStatusMessage('Profil berhasil diperbarui.');
            setStatusVariant('success');
        } catch (error) {
            setStatusMessage(error?.response?.data?.message || 'Gagal memperbarui profil.');
            setStatusVariant('error');
            normalizeApiErrors(error, profileForm);
        }
    };

    const onPasswordSubmit = async (values) => {
        try {
            passwordForm.clearErrors();
            await changePassword(values);
            setStatusMessage('Password berhasil diubah.');
            setStatusVariant('success');
            passwordForm.reset();
        } catch (error) {
            setStatusMessage(error?.response?.data?.message || 'Gagal mengubah password.');
            setStatusVariant('error');
            normalizeApiErrors(error, passwordForm);
        }
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setStatusMessage('Silakan pilih file gambar yang valid.');
            setStatusVariant('error');
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
                    <h1 className="text-3xl font-extrabold text-[rgb(var(--color-text-primary))] tracking-tight">Profil Pengguna</h1>
                    <p className="text-sm text-[rgb(var(--color-text-secondary))]">Kelola detail akun pribadi dan informasi keamanan Anda.</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-200/60 dark:bg-indigo-950/40 dark:border-indigo-800/40 px-3.5 py-1 text-xs font-bold text-indigo-700 dark:text-indigo-300">
                    <Shield className="h-3.5 w-3.5" />
                    Profil Pengguna {brand_name || 'Microdata'}
                </div>
            </div>

            {statusMessage && (
                <Alert variant={statusVariant === 'success' ? 'success' : 'error'} title={statusVariant === 'success' ? 'Berhasil' : 'Pemberitahuan'}>
                    {statusMessage}
                </Alert>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Avatar Card */}
                <Card className="p-6 space-y-4">
                    <h3 className="text-xs font-extrabold text-[rgb(var(--color-text-primary))] uppercase tracking-wider">Foto Profil</h3>
                    <div className="flex flex-col items-center gap-3">
                        <img
                            src={avatarPreview || avatarFallback}
                            alt="Foto Profil"
                            onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = avatarFallback;
                            }}
                            className="h-24 w-24 rounded-full object-cover ring-4 ring-[rgb(var(--color-border))]"
                        />
                        <div className="flex gap-2">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isUploadingAvatar}
                                title="Unggah Foto Profil Baru"
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
                                title="Hapus Foto Profil"
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

                    {/* Subscription Quota */}
                    <SubscriptionQuotaPanel />
                </Card>

                {/* Forms */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Profile Info */}
                    <Card className="p-6">
                        <h3 className="text-xs font-extrabold text-[rgb(var(--color-text-primary))] uppercase tracking-wider mb-4">Informasi Profil</h3>
                        <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">Nama Lengkap</label>
                                <Input {...profileForm.register('name', { required: 'Nama wajib diisi' })} placeholder="Nama Anda" />
                                {profileForm.formState.errors.name && (
                                    <p className="mt-1 text-xs text-red-500">{profileForm.formState.errors.name.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">Alamat Email</label>
                                <Input {...profileForm.register('email', { required: 'Email wajib diisi' })} placeholder="email@contoh.com" />
                                {profileForm.formState.errors.email && (
                                    <p className="mt-1 text-xs text-red-500">{profileForm.formState.errors.email.message}</p>
                                )}
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit" disabled={isUpdatingProfile}>
                                    {isUpdatingProfile ? <Spinner size="sm" /> : 'Simpan Perubahan'}
                                </Button>
                            </div>
                        </form>
                    </Card>

                    {/* Change Password */}
                    <Card className="p-6">
                        <h3 className="text-xs font-extrabold text-[rgb(var(--color-text-primary))] uppercase tracking-wider mb-4">Ubah Password</h3>
                        <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">Password Saat Ini</label>
                                <Input type="password" {...passwordForm.register('current_password', { required: 'Password saat ini wajib diisi' })} placeholder="••••••••" />
                                {passwordForm.formState.errors.current_password && (
                                    <p className="mt-1 text-xs text-red-500">{passwordForm.formState.errors.current_password.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">Password Baru</label>
                                <Input type="password" {...passwordForm.register('password', { required: 'Password baru wajib diisi', minLength: { value: 8, message: 'Minimal 8 karakter' } })} placeholder="••••••••" />
                                {passwordForm.formState.errors.password && (
                                    <p className="mt-1 text-xs text-red-500">{passwordForm.formState.errors.password.message}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-[rgb(var(--color-text-primary))] mb-1">Konfirmasi Password Baru</label>
                                <Input type="password" {...passwordForm.register('password_confirmation', { required: 'Konfirmasi password wajib diisi' })} placeholder="••••••••" />
                                {passwordForm.formState.errors.password_confirmation && (
                                    <p className="mt-1 text-xs text-red-500">{passwordForm.formState.errors.password_confirmation.message}</p>
                                )}
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit" disabled={isChangingPassword}>
                                    {isChangingPassword ? <Spinner size="sm" /> : 'Ubah Password'}
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}

/**
 * Panel kuota Starter di Profile: "Kuota Template: 3 / 5 digunakan"
 */
function SubscriptionQuotaPanel() {
    const fetchStatus = useSubscriptionStore((s) => s.fetchSubscriptionStatus);
    const planName = useSubscriptionStore((s) => s.planName);
    const usedCount = useSubscriptionStore((s) => s.usedTemplateCount);
    const limit = useSubscriptionStore((s) => s.templateLimit);
    const isUnlimited = useSubscriptionStore((s) => s.isUnlimited);
    const isFree = useSubscriptionStore((s) => s.isFree);
    const usedIds = useSubscriptionStore((s) => s.usedTemplateIds);
    const deactivate = useSubscriptionStore((s) => s.deactivateTemplate);
    const [names, setNames] = useState({});
    const [removingId, setRemovingId] = useState(null);

    useEffect(() => { fetchStatus(); }, []);

    useEffect(() => {
        let alive = true;
        (async () => {
            const map = {};
            for (const id of usedIds.slice(0, 20)) {
                try {
                    const res = await templateApi.getPublicById(id);
                    const d = res.data?.data ?? res.data ?? {};
                    if (d?.name) map[id] = d.name;
                } catch { /* abaikan */ }
            }
            if (alive) setNames(map);
        })();
        return () => { alive = false; };
    }, [usedIds.join(',')]);

    const pct = isUnlimited ? 100 : (typeof limit === 'number' && limit > 0 ? Math.min(100, (usedCount / limit) * 100) : 0);

    return (
        <div className="mt-4 pt-4 border-t border-[rgb(var(--color-border))]">
            <h4 className="text-xs font-extrabold text-[rgb(var(--color-text-primary))] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Crown className="h-3.5 w-3.5 text-amber-500" /> Langganan & Kuota Template
            </h4>
            <p className="text-xs font-bold text-[rgb(var(--color-text-primary))]">Paket: <span className="text-indigo-600">{planName}</span></p>
            {isUnlimited ? (
                <p className="text-[11px] text-emerald-600 font-bold mt-1">Tidak terbatas — semua template premium bebas digunakan.</p>
            ) : isFree ? (
                <p className="text-[11px] text-slate-500 mt-1">Free — hanya Blank Template. Upgrade untuk membuka template PRO.</p>
            ) : (
                <>
                    <p className="text-[11px] text-[rgb(var(--color-text-secondary))] mt-1 font-bold">Kuota Template: {usedCount} / {limit} digunakan</p>
                    <div className="h-2 rounded-full bg-slate-100 mt-2 overflow-hidden">
                        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: 'linear-gradient(90deg,#7c3aed,#4f46e5)' }} />
                    </div>
                </>
            )}
            {!isFree && !isUnlimited && usedIds.length > 0 && (
                <div className="mt-3 space-y-1.5">
                    {usedIds.map((id) => (
                        <div key={id} className="flex items-center justify-between gap-2 rounded-xl border border-[rgb(var(--color-border))] px-2.5 py-1.5">
                            <span className="text-[11px] font-bold text-[rgb(var(--color-text-primary))] flex items-center gap-1.5 truncate">
                                <LayoutTemplate className="h-3 w-3 text-indigo-500 shrink-0" />
                                <span className="truncate">{names[id] || `Template #${id}`}</span>
                            </span>
                            <button
                                type="button"
                                disabled={removingId === id}
                                onClick={async () => {
                                    setRemovingId(id);
                                    await deactivate(id);
                                    setRemovingId(null);
                                }}
                                className="p-1 rounded-lg text-red-500 hover:bg-red-50 disabled:opacity-50"
                                title="Hapus dari pilihan (kuota kembali)"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    ))}
                    <p className="text-[10px] text-slate-400">Hapus salah satu untuk memberi ruang bagi template baru (maks {limit}).</p>
                </div>
            )}
        </div>
    );
}