import { useBuilderStore } from '../../stores/builderStore';

export default function Social({
  platforms = ['facebook', 'twitter', 'linkedin'],
  size = 'medium',
  componentId = null,
  sectionId = null,
}) {
  const { selectedComponentId, hoveredComponent, setHoveredComponent, selectComponent } = useBuilderStore();

  const sizeStyles = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const iconClass = sizeStyles[size];

  const isSelected = selectedComponentId === componentId;
  const isHovered = hoveredComponent === componentId;

  const platformIcons = {
    facebook: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    twitter: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.978 4.978 0 00-8.458 4.55A14.04 14.04 0 011.64 3.162a4.96 4.96 0 001.527 6.618 4.92 4.92 0 01-2.212-.783v.06a4.978 4.978 0 003.995 4.878 5.007 5.007 0 01-2.212.085 4.977 4.977 0 004.64 3.448A9.87 9.87 0 010 19.54a13.94 13.94 0 007.548 2.212c9.058 0 14.009-7.502 14.009-14.009 0-.213 0-.425-.015-.637A9.978 9.978 0 0024 4.59l-.047-.02z"/>
      </svg>
    ),
    linkedin: (
      <svg className={`${iconClass}`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  };

  return (
    <div
      id={componentId}
      data-component-id={componentId}
      data-section-id={sectionId}
      onClick={(e) => {
        e.stopPropagation();
        selectComponent(componentId);
      }}
      onMouseEnter={() => setHoveredComponent(componentId)}
      onMouseLeave={() => setHoveredComponent(null)}
      className={`flex gap-3 p-1 rounded-lg transition-all ${
        isSelected
          ? 'ring-2 ring-indigo-600 ring-offset-2'
          : isHovered
            ? 'ring-1 ring-indigo-400 ring-offset-1'
            : ''
      }`}
    >
      {platforms.map((platform) => (
        <a key={platform} href="#" className="text-slate-600 hover:text-indigo-600 transition">
          {platformIcons[platform]}
        </a>
      ))}
    </div>
  );
}
