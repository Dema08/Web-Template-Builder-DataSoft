/**
 * UMKM Starter Templates — Category Index
 *
 * Aggregates only the 3 exclusive premium UMKM starter template definitions:
 * 1. Kopi Karsa Roastery & Cafe (Culinary / F&B)
 * 2. Pusaka Heritage Studio (Craft & Wastra Nusantara)
 * 3. Sekar Arum Botanicals (Organic Skincare & Herbal Wellness)
 */
import umkmArtisanCulinary from './umkmArtisanCulinary.js';
import umkmHeritageCraft from './umkmHeritageCraft.js';
import umkmOrganicWellness from './umkmOrganicWellness.js';

export const category = {
  categoryName: 'UMKM',
  templates: [
    umkmArtisanCulinary,
    umkmHeritageCraft,
    umkmOrganicWellness,
  ],
};
