/**
 * Pendidikan & Pelatihan Starter Templates — Category Index
 *
 * Aggregates only the 3 exclusive premium Pendidikan & Pelatihan starter template definitions:
 * 1. Nusantara Institute of Technology (University / Higher Ed)
 * 2. CodeSphere Tech Academy (Tech Bootcamp & Career Accelerator)
 * 3. Apex Leadership & Corporate Institute (Executive Training & Certification)
 */
import eduResearchUniversity from './eduResearchUniversity.js';
import eduTechBootcamp from './eduTechBootcamp.js';
import eduExecutiveInstitute from './eduExecutiveInstitute.js';

export const category = {
  categoryName: 'Pendidikan & Pelatihan',
  templates: [
    eduResearchUniversity,
    eduTechBootcamp,
    eduExecutiveInstitute,
  ],
};
