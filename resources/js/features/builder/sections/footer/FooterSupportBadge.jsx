import React from 'react';

/**
 * FooterSupportBadge
 * Uneditable and non-deletable branding badge required for all footers.
 */
export default function FooterSupportBadge({ className = '' }) {
  return (
    <div
      data-non-editable="true"
      data-microdata-support="true"
      className={`mt-4 pt-3 pb-1 text-[11px] font-medium opacity-85 select-none pointer-events-none tracking-wide flex items-center justify-center gap-1.5 text-slate-400 dark:text-slate-500 w-full text-center ${className}`}
    >
      <span>Support by</span>
      <span className="font-bold tracking-wider text-indigo-500 dark:text-indigo-400">Microdata</span>
    </div>
  );
}

