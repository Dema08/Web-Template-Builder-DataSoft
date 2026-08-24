/**
 * Industry Starter Templates Registry — v2.0
 * 32 professionally distinct starter templates across 10 Indonesian industry categories.
 *
 * ── MODULAR REFACTOR NOTE ─────────────────────────────────────────
 * This file has been refactored into a modular directory structure.
 * All template definitions now live under:
 *
 *   resources/js/builder/utils/starter-templates/
 *
 *   ├── index.js          → barrel: re-exports INDUSTRY_STARTER_TEMPLATES + utilities
 *   ├── helpers.js        → shared utility functions (sid, etc.)
 *   └── categories/
 *       ├── umkm/          → 5 templates (Modern, E-Commerce, Premium, Minimalist, Creative)
 *       ├── logistik-transportasi/ → 3 templates (Corporate, Premium, Tracking)
 *       ├── group-perusahaan/       → 3 templates (Enterprise, Investor, Premium)
 *       ├── perusahaan-jasa/        → 3 templates (Agency Modern, Consulting Premium, Professional)
 *       ├── pendidikan-pelatihan/   → 3 templates (Academy, University, Online Learning)
 *       ├── organisasi-asosiasi/    → 3 templates (Community, Association, Event)
 *       ├── industri-manufaktur/    → 3 templates (Factory, Premium, Modern)
 *       ├── koperasi/               → 3 templates (Classic, Modern, Premium)
 *       ├── perdagangan-retail/     → 3 templates (Modern, Premium, Commerce)
 *       └── koperasi-susu/          → 3 templates (Dairy Coop, Dairy Premium, Farmer Network)
 *
 * TO ADD A NEW TEMPLATE:
 *   1. Create a new file in the appropriate sector folder (export default { ... })
 *   2. Import and register it in the sector's index.js
 *   3. It will automatically appear in the registry.
 *
 * This file re-exports everything from ./starter-templates/index.js
 * for backward compatibility with existing imports:
 *   import { INDUSTRY_STARTER_TEMPLATES, getCategoryStarterTemplates } from '@builder/utils/industryStarterTemplates';
 * ────────────────────────────────────────────────────────────────
 */

export {
  INDUSTRY_STARTER_TEMPLATES,
  getCategoryStarterTemplates,
  getStarterTemplateById,
  getTotalStarterTemplateCount,
  sid,
} from './starter-templates/index.js';
