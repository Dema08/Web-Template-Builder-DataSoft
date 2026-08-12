/**
 * Organisasi & Asosiasi Starter Templates — Category Index
 *
 * Aggregates all Organisasi & Asosiasi starter template definitions
 * into a single category object for the INDUSTRY_STARTER_TEMPLATES registry.
 */
import orgCommunity from './orgCommunity.js';
import orgAssociation from './orgAssociation.js';
import orgEvent from './orgEvent.js';

export const category = {
  categoryName: 'Organisasi & Asosiasi',
  templates: [
    orgCommunity,
    orgAssociation,
    orgEvent,
  ],
};
