import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { profileApi } from '@api';
import { QUERY_KEYS } from '@constants';
import { useAuthStore, toast } from '@store';

/**
 * useProfile
 * Fetches and mutates the authenticated user's profile.
 */
export function useProfile() {
    const queryClient = useQueryClient();
    const setUser = useAuthStore((state) => state.setUser);

    const profileQuery = useQuery({
        queryKey: [QUERY_KEYS.USER],
        queryFn: () => profileApi.getProfile(),
        staleTime: 60 * 1000,
        retry: false,
    });

    const syncUser = (updatedUser) => {
        // Update Zustand auth store so storedUser reflects the latest data
        setUser(updatedUser);
        // Update the profile query cache (['user'] key used by useProfile)
        queryClient.setQueryData([QUERY_KEYS.USER], updatedUser);
        // CRITICAL: Also update the 'current-user' cache used by useCurrentUser/useAuth.
        // Without this, the navbar still reads the old user from useCurrentUser's stale cache.
        queryClient.setQueryData(['current-user'], updatedUser);
        return updatedUser;
    };

    const updateProfileMutation = useMutation({
        mutationFn: (payload) => profileApi.updateProfile(payload),
        onSuccess: (updatedUser) => {
            syncUser(updatedUser);
            toast.success('Profile updated successfully.', 'Profile saved');
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || 'Unable to update profile.', 'Profile update failed');
        },
    });

    const uploadAvatarMutation = useMutation({
        mutationFn: (file) => profileApi.uploadAvatar(file),
        onSuccess: (updatedUser) => {
            syncUser(updatedUser);
            toast.success('Avatar uploaded successfully.', 'Avatar updated');
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || 'Unable to upload avatar.', 'Avatar upload failed');
        },
    });

    const deleteAvatarMutation = useMutation({
        mutationFn: () => profileApi.deleteAvatar(),
        onSuccess: (updatedUser) => {
            syncUser(updatedUser);
            toast.success('Avatar deleted successfully.', 'Avatar removed');
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || 'Unable to delete avatar.', 'Avatar deletion failed');
        },
    });

    const changePasswordMutation = useMutation({
        mutationFn: (payload) => profileApi.changePassword(payload),
        onSuccess: () => {
            toast.success('Password changed successfully.', 'Password updated');
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || 'Unable to change password.', 'Password change failed');
        },
    });

    return {
        profile: profileQuery.data,
        isLoading: profileQuery.isLoading,
        profileError: profileQuery.error,
        updateProfile: updateProfileMutation.mutateAsync,
        isUpdatingProfile: updateProfileMutation.isPending,
        updateProfileError: updateProfileMutation.error,
        uploadAvatar: uploadAvatarMutation.mutateAsync,
        isUploadingAvatar: uploadAvatarMutation.isPending,
        uploadAvatarError: uploadAvatarMutation.error,
        deleteAvatar: deleteAvatarMutation.mutateAsync,
        isDeletingAvatar: deleteAvatarMutation.isPending,
        deleteAvatarError: deleteAvatarMutation.error,
        changePassword: changePasswordMutation.mutateAsync,
        isChangingPassword: changePasswordMutation.isPending,
        changePasswordError: changePasswordMutation.error,
    };
}
