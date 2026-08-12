/**
 * Perusahaan Jasa Starter Templates — Category Index
 *
 * Aggregates all Perusahaan Jasa starter template definitions
 * into a single category object for the INDUSTRY_STARTER_TEMPLATES registry.
 */
import serviceAgencyModern from './serviceAgencyModern.js';
import serviceConsultingPremium from './serviceConsultingPremium.js';
import serviceProfessional from './serviceProfessional.js';

export const category = {
  categoryName: 'Perusahaan Jasa',
  templates: [
    serviceAgencyModern,
    serviceConsultingPremium,
    serviceProfessional,
  ],
};
