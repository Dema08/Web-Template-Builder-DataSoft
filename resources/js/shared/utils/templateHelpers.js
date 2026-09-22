/**
 * Template Helper Utilities
 * Default Microdata template banner & safe fallback image handlers.
 */

export const DEFAULT_TEMPLATE_BANNER = '/images/default-template-banner.png';

export const getTemplateImage = (tpl) => {
    const rawThumb = tpl?.thumbnail || tpl?.preview_image || tpl?.image;
    if (rawThumb && typeof rawThumb === 'string' && rawThumb.trim() && !rawThumb.includes('null') && !rawThumb.includes('undefined')) {
        return rawThumb;
    }
    return DEFAULT_TEMPLATE_BANNER;
};

export const handleImageError = (e, tpl) => {
    e.target.onerror = null;
    e.target.src = DEFAULT_TEMPLATE_BANNER;
};
