/**
 * Perusahaan Jasa Starter Templates — Category Index
 *
 * Aggregates only the 3 exclusive premium Perusahaan Jasa starter template definitions:
 * 1. Aurelius Strategic Advisory (Consulting)
 * 2. Nexus Creative & Digital Studio (Creative Agency)
 * 3. Synapse Enterprise Tech Solutions (Tech Solutions)
 */
import serviceEliteConsulting from './serviceEliteConsulting.js';
import serviceCreativeAgency from './serviceCreativeAgency.js';
import serviceTechSolutions from './serviceTechSolutions.js';

export const category = {
  categoryName: 'Perusahaan Jasa',
  templates: [
    serviceEliteConsulting,
    serviceCreativeAgency,
    serviceTechSolutions,
  ],
};
