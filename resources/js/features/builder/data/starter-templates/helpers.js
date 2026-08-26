/**
 * Starter Templates Helper Utilities
 *
 * Utility helpers used across all industry starter template definitions.
 */

/**
 * Generate a unique section ID based on a prefix and template key.
 * Useful for avoiding ID collisions when the same template is instantiated
 * multiple times on a single page.
 *
 * @param {string} prefix - e.g. 'section' | 'hero'
 * @param {string} tpl    - template identifier e.g. 'umkm-modern'
 * @returns {string} e.g. 'section-umkm-modern-1701234567890'
 */
export const sid = (prefix, tpl) => `${prefix}-${tpl}-${Date.now()}`;
