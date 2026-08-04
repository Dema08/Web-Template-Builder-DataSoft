import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from '@store';
import { onboardingApi } from '@api';
import { useOnboardingStore } from '@store/onboardingStore';
import { useAuthStore } from '@store';
import { ROUTES } from '@constants';

/**
 * Fetch all active categories.
 */
export function useCategories() {
    const setCategories = useOnboardingStore((state) => state.setCategories);

    return useQuery({
        queryKey: ['onboarding', 'categories'],
        queryFn: async () => {
            const data = await onboardingApi.getCategories();
            setCategories(data);
            return data;
        },
    });
}

/**
 * Fetch templates by category ID.
 */
export function useTemplates(categoryId) {
    const setTemplates = useOnboardingStore((state) => state.setTemplates);

    return useQuery({
        queryKey: ['onboarding', 'templates', categoryId],
        queryFn: async () => {
            const data = await onboardingApi.getTemplatesByCategory(categoryId);
            setTemplates(data.data, data.meta);
            return data;
        },
        enabled: !!categoryId,
    });
}

/**
 * Fetch single template details.
 */
export function useTemplate(id) {
    return useQuery({
        queryKey: ['onboarding', 'template', id],
        queryFn: async () => {
            return await onboardingApi.getTemplate(id);
        },
        enabled: !!id,
    });
}

/**
 * Check slug availability with debounce.
 */
export function useCheckSlug() {
    const setSlugStatus = useOnboardingStore((state) => state.setSlugStatus);

    return useMutation({
        mutationFn: async (slug) => {
            setSlugStatus('checking');
            return await onboardingApi.checkSlug(slug);
        },
        onSuccess: (data) => {
            setSlugStatus(data.available ? 'available' : 'unavailable');
        },
        onError: () => {
            setSlugStatus('unavailable');
        },
    });
}

/**
 * Create website (onboarding completion).
 */
export function useCreateWebsite() {
    const queryClient = useQueryClient();
    const setIsSubmitting = useOnboardingStore((state) => state.setIsSubmitting);
    const reset = useOnboardingStore((state) => state.reset);

    return useMutation({
        mutationFn: async (data) => {
            setIsSubmitting(true);
            return await onboardingApi.createWebsite(data);
        },
        onSuccess: (website) => {
            queryClient.invalidateQueries(['onboarding']);
            queryClient.invalidateQueries(['dashboard']);
            queryClient.invalidateQueries(['website']);

            useAuthStore.getState().setUser({
                ...useAuthStore.getState().user,
                has_website: true,
                website: website,
            });

            toast.success('Website created successfully! Redirecting to builder...', 'Success');
            reset();

            setTimeout(() => {
                window.location.href = ROUTES.BUILDER;
            }, 1500);
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || 'Failed to create website.', 'Error');
        },
        onSettled: () => {
            setIsSubmitting(false);
        },
    });
}
