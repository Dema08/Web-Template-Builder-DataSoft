import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { Button, Input, Spinner } from '@components/ui';
import { useWebsite } from '@hooks';

export default function Settings() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { name: '', tagline: '', description: '', logo_url: '' },
    });

    const { website, isWebsiteLoading, updateSettings, isUpdatingSettings, updateSettingsError } = useWebsite();

    // Populate the form once the website data loads.
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
            <div className="flex items-center justify-center h-full">
                <Spinner size="lg" />
            </div>
        );
    }

    return (
        <div className="p-8 max-w-2xl">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Website Settings</h1>
            <p className="text-sm text-gray-600 mb-8">Configure your company profile details.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl border border-gray-200 p-6 space-y-5 shadow-sm" noValidate>
                <Input
                    label="Website name"
                    placeholder="Acme Corporation"
                    error={errors.name?.message}
                    {...register('name', {
                        required: 'Website name is required',
                        maxLength: { value: 100, message: 'Name must be 100 characters or fewer' },
                    })}
                />

                <Input
                    label="Tagline"
                    placeholder="Building the future"
                    error={errors.tagline?.message}
                    {...register('tagline', {
                        maxLength: { value: 200, message: 'Tagline must be 200 characters or fewer' },
                    })}
                />

                <div className="w-full">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        rows={4}
                        placeholder="A short description of your company"
                        className={`w-full rounded-lg border ${
                            errors.description ? 'border-red-500' : 'border-gray-300'
                        } px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
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
                    <p className="text-sm text-red-600">
                        {updateSettingsError?.response?.data?.message || 'Failed to save settings.'}
                    </p>
                )}

                <div className="flex justify-end">
                    <Button type="submit" disabled={isUpdatingSettings}>
                        {isUpdatingSettings ? <Spinner size="sm" /> : 'Save settings'}
                    </Button>
                </div>
            </form>
        </div>
    );
}
