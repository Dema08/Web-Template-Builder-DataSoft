import { useMutation, useQueryClient } from '@tanstack/react-query';
import { settingsApi } from '@api';
import { useSettingsStore, toast } from '@store';

/**
 * useSettings
 *
 * React Query mutation hooks for updating system settings.
 * Each mutation also syncs the Zustand settings store so that
 * every component using useSettingsStore re-renders instantly
 * without a page reload.
 */
export function useSettings() {
    const queryClient = useQueryClient();
    const { loadSettings, updateSetting } = useSettingsStore();

    // --- Update general settings (PUT /admin/settings) ---
    const updateSettingsMutation = useMutation({
        mutationFn: (payload) => settingsApi.updateSettings(payload),
        onSuccess: (settings) => {
            loadSettings(settings);
            queryClient.invalidateQueries({ queryKey: ['settings'] });
            toast.success('Settings updated successfully', 'Success');
        },
        onError: (error) => {
            const message = error?.response?.data?.message || 'Failed to update settings';
            toast.error(message, 'Error');
        },
    });

    // --- Upload logo image (POST /admin/settings/logo) ---
    const uploadLogoMutation = useMutation({
        mutationFn: (file) => settingsApi.uploadLogo(file),
        onSuccess: (response) => {
            updateSetting('logo_path', response?.logo_path ?? null);
            queryClient.invalidateQueries({ queryKey: ['settings'] });
            toast.success('Logo uploaded successfully', 'Success');
        },
        onError: (error) => {
            const message = error?.response?.data?.message || 'Failed to upload logo';
            toast.error(message, 'Error');
        },
    });

    // --- Remove logo image (DELETE /admin/settings/logo) ---
    const removeLogoMutation = useMutation({
        mutationFn: () => settingsApi.removeLogo(),
        onSuccess: (response) => {
            updateSetting('logo_path', null);
            queryClient.invalidateQueries({ queryKey: ['settings'] });
            toast.success('Logo removed successfully', 'Success');
        },
        onError: (error) => {
            const message = error?.response?.data?.message || 'Failed to remove logo';
            toast.error(message, 'Error');
        },
    });

    return {
        // Mutate functions
        updateSettings: updateSettingsMutation.mutate,
        uploadLogo: uploadLogoMutation.mutate,
        removeLogo: removeLogoMutation.mutate,
        // Async mutate helpers (return a promise)
        updateSettingsAsync: updateSettingsMutation.mutateAsync,
        uploadLogoAsync: uploadLogoMutation.mutateAsync,
        removeLogoAsync: removeLogoMutation.mutateAsync,
        // Loading state flags
        isUpdating: updateSettingsMutation.isPending,
        isUploadingLogo: uploadLogoMutation.isPending,
        isRemovingLogo: removeLogoMutation.isPending,
    };
}
