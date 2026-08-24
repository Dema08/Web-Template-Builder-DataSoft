/**
 * Industry Starter Templates Registry — v2.0 (Modular)
 *
 * This barrel file aggregates all 32 professionally distinct starter templates
 * across 10 Indonesian industry categories.
 *
 * Each sector lives in its own subfolder under `categories/` and each template
 * is defined in its own file for maximum maintainability.
 *
 * To add a new starter template:
 *   1. Create a new `<templateName>.js` file in the appropriate sector folder
 *      (export the template object as default).
 *   2. Import it in the sector's `index.js` and add it to the `templates` array.
 *   3. The category will automatically appear in the registry below.
 *
 * Hero layout reference:
 *  hero-01 → Indigo gradient, centered, white text
 *  hero-02 → White split (text left, image right), light
 *  hero-03 → Dark slate-900, centered, white text
 *  hero-04 → Indigo-to-purple gradient, centered, white text
 *  hero-05 → Soft indigo/purple gradient, split (CTA left, visual right)
 *  hero-06 → Dark with radial glow (glassmorphism feel), centered
 *  hero-07 → Pure white, centered, dark text — ultra minimal
 *  hero-08 → Solid indigo + radial light, split layout
 */

import { sid } from './helpers.js';

import { category as umkm } from './categories/umkm/index.js';
import { category as logistik } from './categories/logistik-transportasi/index.js';
import { category as groupPerusahaan } from './categories/group-perusahaan/index.js';
import { category as perusahaanJasa } from './categories/perusahaan-jasa/index.js';
import { category as pendidikan } from './categories/pendidikan-pelatihan/index.js';
import { category as organisasi } from './categories/organisasi-asosiasi/index.js';
import { category as industri } from './categories/industri-manufaktur/index.js';
import { category as koperasi } from './categories/koperasi/index.js';
import { category as retail } from './categories/perdagangan-retail/index.js';
import { category as koperasiSusu } from './categories/koperasi-susu/index.js';

/**
 * The complete registry of industry starter templates.
 *
 * Keys are the industry category slugs used throughout the application
 * (matching INDUSTRY_CONFIGS in `industryConfigs.js`).
 *
 * @type {Record<string, { categoryName: string, templates: Array }>}
 */
export const INDUSTRY_STARTER_TEMPLATES = {
  'umkm': umkm,
  'logistik-transportasi': logistik,
  'group-perusahaan': groupPerusahaan,
  'perusahaan-jasa': perusahaanJasa,
  'pendidikan-pelatihan': pendidikan,
  'organisasi-asosiasi': organisasi,
  'industri-manufaktur': industri,
  'koperasi': koperasi,
  'perdagangan-retail': retail,
  'koperasi-susu': koperasiSusu,
};

/**
 * Get all starter templates for a given industry category slug.
 *
 * @param {string} categorySlug - The industry category slug (e.g. 'umkm', 'logistik-transportansi').
 * @returns {Array} Array of starter template objects, or empty array if not found.
 */
export const getCategoryStarterTemplates = (categorySlug) => {
  if (!categorySlug) return [];

  // Normalize slug: map Laravel Str::slug-generated slugs to registry keys
  const slugMap = {
    'group-perusahaan-holding-company': 'group-perusahaan',
    'logistik-transportasi': 'logistik-transportasi',
    'perusahaan-jasa': 'perusahaan-jasa',
    'umkm': 'umkm',
    'pendidikan-pelatihan': 'pendidikan-pelatihan',
    'organisasi-asosiasi': 'organisasi-asosiasi',
    'industri-manufaktur': 'industri-manufaktur',
    'koperasi': 'koperasi',
    'perdagangan-retail': 'perdagangan-retail',
    'koperasi-susu': 'koperasi-susu',
  };

  const normalizedSlug = slugMap[categorySlug] || categorySlug;
  const categoryData = INDUSTRY_STARTER_TEMPLATES[normalizedSlug];
  return categoryData ? categoryData.templates : [];
};

/**
 * Get a single starter template by its unique ID.
 *
 * @param {string} templateId - The template id (e.g. 'umkm-modern').
 * @returns {object|null} The template object, or null if not found.
 */
export const getStarterTemplateById = (templateId) => {
  for (const category of Object.values(INDUSTRY_STARTER_TEMPLATES)) {
    const found = category.templates.find(t => t.id === templateId);
    if (found) return found;
  }
  return null;
};

/**
 * Get the total number of starter templates across all categories.
 *
 * @returns {number} Total template count.
 */
export const getTotalStarterTemplateCount = () => {
  return Object.values(INDUSTRY_STARTER_TEMPLATES).reduce(
    (count, category) => count + category.templates.length,
    0
  );
};

// Re-export the sid helper for downstream consumers
export { sid };
