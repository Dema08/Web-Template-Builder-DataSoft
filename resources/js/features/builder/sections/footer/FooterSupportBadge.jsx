import React from 'react';

/**
 * FooterSupportBadge
 * Uneditable and non-deletable branding badge required for all footers.
 */
export default function FooterSupportBadge({ className = '' }) {
  return (
    <div className={`mt-2 text-[11px] font-medium opacity-80 select-none pointer-events-none tracking-wide flex items-center justify-center gap-1.5 ${className}`}>
      <span>Support by</span>
      <span className="font-bold tracking-wider">Microdata</span>
    </div>
  );
}
