/**
 * Formatting helpers.
 */
export function formatBytes(bytes, decimals = 2) {
    if (!bytes) return '0 B';

    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
}

export function formatDate(date, options = {}) {
    if (!date) return '—';

    try {
        return new Intl.DateTimeFormat(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            ...options,
        }).format(new Date(date));
    } catch {
        return String(date);
    }
}

export function formatRelativeTime(date) {
    if (!date) return '—';

    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
    };

    for (const [unit, secondsInUnit] of Object.entries(intervals)) {
        const value = Math.floor(seconds / secondsInUnit);
        if (value >= 1) return `${value} ${unit}${value === 1 ? '' : 's'} ago`;
    }

    return 'just now';
}
