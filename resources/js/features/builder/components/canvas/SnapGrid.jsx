import { useBuilderStore } from '../../stores/builderStore';

export default function SnapGrid() {
  const snapEnabled = useBuilderStore(state => state.snapEnabled);
  const isPreviewMode = useBuilderStore(state => state.isPreviewMode);

  if (!snapEnabled || isPreviewMode) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none z-10"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(79, 70, 229, 0.07) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(79, 70, 229, 0.07) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
      }}
    />
  );
}
