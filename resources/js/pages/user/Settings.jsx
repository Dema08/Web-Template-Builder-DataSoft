import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Button, Input, Spinner } from '@components/ui';
import { useWebsite } from '@hooks';

export default function Settings() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { name: '', tagline: '', description: '', logo_url: '' },
    });

    const { website, isWebsiteLoading, updateSettings, isUpdatingSettings, updateSettingsError } = useWebsite();

    useEffect(() => {
        if (website) {
            reset({
                name: website.name || '',
                tagline: website.tagline || '',
                description: website.description || '',
                logo_url: website.logo_url || '',
            });
        }
    }, [website, reset]);

    const onSubmit = (values) => {
        updateSettings(values);
    };

    if (isWebsiteLoading) {
        return (
            <div className="flex items-center justify-center h-full min-h-[400px]">
                <Spinner size="lg" />
            </div>
        );
    }

    return (
        <div className="p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Website Settings</h1>
                <p className="text-sm text-slate-500 mt-1">Configure your DataSoft company profile details and branding.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-5 shadow-xs" noValidate>
                <Input
                    label="Website name"
                    placeholder="DataSoft Enterprise Profile"
                    error={errors.name?.message}
                    {...register('name', {
                        required: 'Website name is required',
                        maxLength: { value: 100, message: 'Name must be 100 characters or fewer' },
                    })}
                />

                <Input
                    label="Tagline"
                    placeholder="Innovating Digital Solutions"
                    error={errors.tagline?.message}
                    {...register('tagline', {
                        maxLength: { value: 200, message: 'Tagline must be 200 characters or fewer' },
                    })}
                />

                <div className="w-full">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                    <textarea
                        rows={4}
                        placeholder="A short description of your company"
                        className={`w-full rounded-xl border ${
                            errors.description ? 'border-red-500' : 'border-slate-200'
                        } px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600`}
                        {...register('description', {
                            maxLength: { value: 1000, message: 'Description must be 1000 characters or fewer' },
                        })}
                    />
                    {errors.description && (
                        <p className="mt-1 text-xs text-red-600">{errors.description.message}</p>
                    )}
                </div>

                <Input
                    label="Logo URL"
                    placeholder="https://example.com/logo.png"
                    error={errors.logo_url?.message}
                    {...register('logo_url')}
                />

                {updateSettingsError && (
                    <p className="text-xs text-red-600">
                        {updateSettingsError?.response?.data?.message || 'Failed to save settings.'}
                    </p>
                )}

                <div className="flex justify-end pt-4 border-t border-slate-100">
                    <Button type="submit" disabled={isUpdatingSettings}>
                        {isUpdatingSettings ? <Spinner size="sm" /> : 'Save settings'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
