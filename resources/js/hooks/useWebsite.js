import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { websiteApi } from '@api';
import { QUERY_KEYS } from '@constants';
import { useWebsiteStore } from '@store';

/**
 * Website builder hooks.
 */
export function useWebsite() {
    const queryClient = useQueryClient();
    const { markDirty, markSaved, setWebsite, setPublishing } = useWebsiteStore();

    // Fetch website metadata.
    const websiteQuery = useQuery({
        queryKey: [QUERY_KEYS.WEBSITE],
        queryFn: () => websiteApi.getWebsite(),
        staleTime: 60 * 1000,
    });

    // Fetch saved content (GrapesJS data).
    const contentQuery = useQuery({
        queryKey: [QUERY_KEYS.WEBSITE_CONTENT],
        queryFn: () => websiteApi.getContent(),
        staleTime: 60 * 1000,
    });

    // Save content mutation.
    const saveContentMutation = useMutation({
        mutationFn: (content) => websiteApi.saveContent(content),
        onSuccess: () => {
            markSaved();
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WEBSITE_CONTENT] });
        },
    });

    // Update settings mutation.
    const updateSettingsMutation = useMutation({
        mutationFn: (settings) => websiteApi.updateSettings(settings),
        onSuccess: (updated) => {
            setWebsite(updated);
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WEBSITE] });
        },
    });

    // Publish mutation.
    const publishMutation = useMutation({
        mutationFn: () => websiteApi.publish(),
        onMutate: () => setPublishing(true),
        onSuccess: (published) => {
            setWebsite(published);
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.WEBSITE] });
        },
        onSettled: () => setPublishing(false),
    });

    // Upload asset mutation.
    const uploadAssetMutation = useMutation({
        mutationFn: (file) => websiteApi.uploadAsset(file),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.ASSETS] });
        },
    });

    return {
        website: websiteQuery.data,
        isWebsiteLoading: websiteQuery.isLoading,
        websiteError: websiteQuery.error,

        content: contentQuery.data,
        isContentLoading: contentQuery.isLoading,
        contentError: contentQuery.error,

        saveContent: saveContentMutation.mutate,
        isSaving: saveContentMutation.isPending,
        saveError: saveContentMutation.error,

        updateSettings: updateSettingsMutation.mutate,
        isUpdatingSettings: updateSettingsMutation.isPending,
        updateSettingsError: updateSettingsMutation.error,

        publish: publishMutation.mutate,
        isPublishing: publishMutation.isPending,
        publishError: publishMutation.error,

        uploadAsset: uploadAssetMutation.mutate,
        isUploadingAsset: uploadAssetMutation.isPending,
        uploadAssetError: uploadAssetMutation.error,
    };
}
