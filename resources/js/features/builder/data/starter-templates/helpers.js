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

/**
 * Mobile-support normalizers for starter templates.
 *
 * Two real bugs found in this folder that break mobile rendering:
 *
 * 1) CTA button ids without the `cta` prefix.
 *    Navbar renderers split buttons via `id.startsWith('cta')` into
 *    `menuComps` (desktop row) vs `ctaComps` (also rendered inside the
 *    mobile dropdown). Ids like `nav-cta-investor` / `c-cta-lp` /
 *    `i-cta-vendor` fail that check, so the main CTA either lands in the
 *    wrong group or disappears from the mobile dropdown.
 * 2) `type: 'paragraph'` components (507 usages).
 *    The renderer registry (`componentMapper.UI_COMPONENTS`) only knows
 *    `text` — unknown types render as `null`, so all those paragraphs
 *    silently vanish on every device.
 */

/** Explicit id fixes for navbar CTAs that miss the `cta` prefix. */
export const NAV_CTA_ID_FIXES = {
  'nav-cta-investor': 'cta-investor',
  'c-cta-lp': 'cta-lp',
  'i-cta-vendor': 'cta-vendor',
};

/**
 * Tolerant CTA check shared by navbar renderers.
 * Accepts `cta-*` as well as legacy `*-cta-*` ids.
 */
export const isNavCtaId = (id) =>
  typeof id === 'string' &&
  (id.startsWith('cta') || /(^|[-_])cta([-_]|$)/i.test(id));

/** Normalize one navbar component list (CTA ids only). */
export function normalizeNavbarComponents(components) {
  if (!Array.isArray(components)) return components;
  return components.map((c) => {
    if (c && c.type === 'button' && typeof c.id === 'string' && NAV_CTA_ID_FIXES[c.id]) {
      return { ...c, id: NAV_CTA_ID_FIXES[c.id] };
    }
    return c;
  });
}

/** Normalize a single component (recursive): `paragraph` -> `text`. */
export function normalizeComponent(comp) {
  if (!comp || typeof comp !== 'object') return comp;
  const out = { ...comp };
  if (out.type === 'paragraph') out.type = 'text';
  if (Array.isArray(out.childrenComponents)) {
    out.childrenComponents = out.childrenComponents.map(normalizeComponent);
  }
  return out;
}

/**
 * Normalize a whole starter template for mobile support.
 * Deep-clones (never mutates the registry) and applies:
 * - `paragraph` -> `text` on every component (recursive)
 * - CTA id fixes on `navbar` sections so mobile dropdowns receive the CTA
 */
export function normalizeStarterTemplate(tpl) {
  if (!tpl || !Array.isArray(tpl.sections)) return tpl;
  const clone = JSON.parse(JSON.stringify(tpl));
  clone.sections = clone.sections.map((s) => {
    const comps = Array.isArray(s.components)
      ? s.components.map(normalizeComponent)
      : s.components;
    return {
      ...s,
      components: s.type === 'navbar' ? normalizeNavbarComponents(comps) : comps,
    };
  });
  return clone;
}

