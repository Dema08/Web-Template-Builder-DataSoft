import { useBuilderStore } from '../../stores/builderStore';

export default function Social({
  platforms = ['facebook', 'twitter', 'linkedin'],
  socialLinks = {},
  size = 'medium',
  styleVariant = 'default',
  align = 'left',
  color = '',
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, selectComponent, isPreviewMode } = useBuilderStore();

  const sizeStyles = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
    xlarge: 'w-8 h-8',
  };

  const iconClass = sizeStyles[size] || sizeStyles.medium;

  const isSelected = !isPreviewMode && selectedComponentId === componentId;
  const isHovered = !isPreviewMode && hoveredComponent === componentId;

  const defaultUrls = {
    facebook: 'https://facebook.com',
    twitter: 'https://x.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
    github: 'https://github.com',
    tiktok: 'https://tiktok.com',
    whatsapp: 'https://wa.me',
    discord: 'https://discord.gg',
    telegram: 'https://t.me',
    website: 'https://example.com',
  };

  const brandStyles = {
    facebook: 'bg-[#1877F2] text-white hover:bg-[#166FE5]',
    twitter: 'bg-[#000000] text-white hover:bg-[#111111]',
    instagram: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:opacity-90',
    linkedin: 'bg-[#0A66C2] text-white hover:bg-[#095196]',
    youtube: 'bg-[#FF0000] text-white hover:bg-[#D90000]',
    github: 'bg-[#24292e] text-white hover:bg-[#1b1f23]',
    tiktok: 'bg-[#000000] text-white hover:bg-[#111111]',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20bd5a]',
    discord: 'bg-[#5865F2] text-white hover:bg-[#4752C4]',
    telegram: 'bg-[#24A1DE] text-white hover:bg-[#1d8cb8]',
    website: 'bg-[#4f46e5] text-white hover:bg-[#4338ca]',
  };

  const platformIcons = {
    facebook: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    twitter: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    instagram: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    linkedin: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    youtube: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    github: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    tiktok: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.33 1.53-1.34 2.53-.01.8.31 1.59.88 2.15.63.63 1.55.94 2.44.86 1.05-.08 2.01-.73 2.45-1.69.31-.66.45-1.41.43-2.14.02-5.3.01-10.6.01-15.9z"/>
      </svg>
    ),
    whatsapp: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.285-.143-1.688-.834-1.95-.929-.262-.095-.452-.143-.642.143-.19.285-.736.929-.903 1.118-.167.19-.333.214-.618.071-.285-.143-1.206-.444-2.298-1.418-.849-.758-1.423-1.696-1.59-1.981-.167-.285-.018-.439.125-.581.129-.128.285-.333.428-.5.143-.167.19-.285.285-.476.095-.19.048-.357-.024-.5-.071-.143-.642-1.547-.88-2.118-.232-.556-.468-.48-.642-.489-.167-.008-.357-.01-.547-.01s-.5.071-.761.357c-.262.285-1 1.023-1 2.499s1.024 2.895 1.166 3.085c.143.19 2.016 3.078 4.885 4.316.682.295 1.215.471 1.63.606.687.22 1.312.189 1.807.115.551-.083 1.688-.69 1.926-1.357.238-.667.238-1.238.167-1.357-.071-.119-.262-.19-.547-.333z"/>
      </svg>
    ),
    discord: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
    telegram: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    website: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.835 11h-4.218c-.161-2.955-.862-5.696-1.986-7.798C17.65 4.544 19.715 7.491 20.835 11zM12 2.152c1.47 2.062 2.457 4.757 2.617 7.848H9.383C9.543 6.909 10.53 4.214 12 2.152zM3.165 11c1.12-3.509 3.185-6.456 6.204-7.798C8.245 5.304 7.544 8.045 7.383 11H3.165zm0 2h4.218c.161 2.955.862 5.696 1.986 7.798C6.35 19.456 4.285 16.509 3.165 13zm8.835 8.848c-1.47-2.062-2.457-4.757-2.617-7.848h5.234c-.16 3.091-1.147 5.786-2.617 7.848zm4.631-1.05c1.124-2.102 1.825-4.843 1.986-7.798h4.218c-1.12 3.509-3.185 6.456-6.204 7.798z"/>
      </svg>
    ),
  };

  const platformList = Array.isArray(platforms)
    ? platforms
    : typeof platforms === 'string'
      ? platforms.split(',').map(s => s.trim()).filter(Boolean)
      : ['facebook', 'twitter', 'linkedin'];

  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const getItemClass = (platform) => {
    if (styleVariant === 'brand') {
      return `rounded-xl p-2.5 ${brandStyles[platform] || 'bg-indigo-600 text-white'} transition flex items-center justify-center shadow-2xs hover:scale-105`;
    }
    if (styleVariant === 'circle') {
      return 'rounded-full p-2.5 bg-slate-100 hover:bg-indigo-600 text-slate-700 hover:text-white transition flex items-center justify-center shadow-2xs hover:scale-105';
    }
    if (styleVariant === 'square') {
      return 'rounded-xl p-2.5 bg-slate-100 hover:bg-indigo-600 text-slate-700 hover:text-white transition flex items-center justify-center shadow-2xs hover:scale-105';
    }
    return 'text-slate-600 hover:text-indigo-600 transition flex items-center justify-center p-1';
  };

  return (
    <div
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      onClick={(e) => {
        if (isPreviewMode) return;
        e.stopPropagation();
        selectComponent(componentId, sectionId);
      }}
      onMouseEnter={() => !isPreviewMode && setHoveredComponent(componentId)}
      onMouseLeave={() => !isPreviewMode && setHoveredComponent(null)}
      className={`flex items-center gap-3 p-1 rounded-lg transition-all ${
        alignClasses[align] || 'justify-start'
      } ${
        isSelected
          ? 'ring-2 ring-indigo-600 ring-offset-2'
          : isHovered
            ? 'ring-1 ring-indigo-400 ring-offset-1'
            : ''
      }`}
    >
      {platformList.map((platformItem) => {
        const platformKey = typeof platformItem === 'string' ? platformItem : (platformItem.id || platformItem.platform);
        const customUrl = typeof platformItem === 'object' && platformItem.url ? platformItem.url : (socialLinks[platformKey] || defaultUrls[platformKey] || '#');
        const iconSvg = platformIcons[platformKey] || platformIcons.website;

        return (
          <a
            key={platformKey}
            href={customUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!isPreviewMode) {
                e.stopPropagation();
                selectComponent(componentId, sectionId);
              }
            }}
            className={getItemClass(platformKey)}
            style={color ? { color: color } : undefined}
            title={platformKey.charAt(0).toUpperCase() + platformKey.slice(1)}
          >
            {iconSvg}
          </a>
        );
      })}
    </div>
  );
}

