/**
 * Application-wide constants.
 * Centralizing these prevents magic strings scattered across the codebase.
 */

export const APP_NAME = import.meta.env.VITE_APP_NAME || 'DataSoft Profile Builder';

// Dynamically resolve API URL matching the current window origin to prevent CORS / host mismatch
const DEFAULT_API_BASE_URL = typeof window !== 'undefined' ? `${window.location.origin}/api` : '/api';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || DEFAULT_API_BASE_URL;
export const API_VERSION = import.meta.env.VITE_API_VERSION || 'v1';

export const ROUTES = {
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    VERIFY_OTP: '/verify-otp',
    RESET_PASSWORD: '/reset-password',
    DASHBOARD: '/dashboard',
    WEBSITES: '/websites',
    TEMPLATES: '/templates',
    BUILDER: '/builder',
    PROFILE: '/profile',
    SETTINGS: '/settings',
    ADMIN: '/admin',
    ADMIN_DASHBOARD: '/admin/dashboard',
    ADMIN_USERS: '/admin/users',
    ADMIN_WEBSITES: '/admin/websites',
    ADMIN_TEMPLATES: '/admin/templates',
    ADMIN_CATEGORIES: '/admin/categories',
    ADMIN_ANALYTICS: '/admin/analytics',
    ADMIN_SETTINGS: '/admin/settings',
    ONBOARDING: '/onboarding',
};

export const TOKEN_STORAGE_KEY = 'cpwb_access_token';

export const USER_STORAGE_KEY = 'cpwb_user';

export const QUERY_KEYS = {
    USER: 'user',
    DASHBOARD: 'dashboard',
    WEBSITE: 'website',
    WEBSITE_CONTENT: 'website-content',
    WEBSITE_SETTINGS: 'website-settings',
    ASSETS: 'assets',
    ADMIN_USERS: 'admin-users',
    ADMIN_WEBSITES: 'admin-websites',
};

export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
};

export const DEFAULT_PAGE_SIZE = 15;

export const FILE_LIMITS = {
    MAX_IMAGE_SIZE_MB: 5,
    MAX_VIDEO_SIZE_MB: 50,
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'],
    ALLOWED_VIDEO_TYPES: ['video/mp4', 'video/webm', 'video/ogg'],
};
