/**
 * Template Helper Utilities
 * High quality category fallback images & safe onError handlers for template thumbnails.
 */

export const DEFAULT_CATEGORY_THUMBNAILS = {
    'Korporat': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    'Corporate': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    'Holding': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    'Perusahaan': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    'Logistik': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
    'Manufaktur': 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&auto=format&fit=crop&q=80',
    'Pendidikan': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80',
    'Startup': 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80',
    'Koperasi': 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&auto=format&fit=crop&q=80',
    'Retail': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&auto=format&fit=crop&q=80',
    'Organisasi': 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80',
    'Kesehatan': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80',
    'Kuliner': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80',
    'Hospitality': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80',
    'General': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
};

export const getTemplateImage = (tpl) => {
    const rawThumb = tpl?.thumbnail || tpl?.preview_image || tpl?.image;
    if (rawThumb && typeof rawThumb === 'string' && rawThumb.trim() && !rawThumb.includes('null') && !rawThumb.includes('undefined')) {
        return rawThumb;
    }
    const catName = tpl?.industry_category?.name || tpl?.category?.name || (typeof tpl?.industry_category === 'string' ? tpl.industry_category : '') || '';
    for (const key of Object.keys(DEFAULT_CATEGORY_THUMBNAILS)) {
        if (catName.toLowerCase().includes(key.toLowerCase())) {
            return DEFAULT_CATEGORY_THUMBNAILS[key];
        }
    }
    return DEFAULT_CATEGORY_THUMBNAILS['General'];
};

export const handleImageError = (e, tpl) => {
    e.target.onerror = null;
    const catName = tpl?.industry_category?.name || tpl?.category?.name || (typeof tpl?.industry_category === 'string' ? tpl.industry_category : '') || '';
    let fallback = DEFAULT_CATEGORY_THUMBNAILS['General'];
    for (const key of Object.keys(DEFAULT_CATEGORY_THUMBNAILS)) {
        if (catName.toLowerCase().includes(key.toLowerCase())) {
            fallback = DEFAULT_CATEGORY_THUMBNAILS[key];
            break;
        }
    }
    e.target.src = fallback;
};
