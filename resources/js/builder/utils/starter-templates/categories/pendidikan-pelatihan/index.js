/**
 * Pendidikan & Pelatihan Starter Templates — Category Index
 *
 * Aggregates all Pendidikan & Pelatihan starter template definitions
 * into a single category object for the INDUSTRY_STARTER_TEMPLATES registry.
 */
import educationAcademy from './educationAcademy.js';
import educationUniversity from './educationUniversity.js';
import educationOnline from './educationOnline.js';

export const category = {
  categoryName: 'Pendidikan & Pelatihan',
  templates: [
    educationAcademy,
    educationUniversity,
    educationOnline,
  ],
};
