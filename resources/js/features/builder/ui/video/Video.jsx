export default function Video({
  src = '',
  youtubeId = '',
  poster = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  width = '100%',
  height = '240px',
  borderRadius = '8px',
  margin = '0',
}) {
  const style = { width, borderRadius, margin, display: 'block', maxWidth: '100%' };

  // YouTube embed
  if (youtubeId) {
    const src = `https://www.youtube.com/embed/${youtubeId}${autoPlay ? '?autoplay=1&mute=1' : ''}`;
    return (
      <div style={{ ...style, position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius }}>
        <iframe
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="Embedded YouTube video"
        />
      </div>
    );
  }

  if (!src) {
    return (
      <div style={{ ...style, height, background: '#1e1b4b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>▶</div>
          <div style={{ fontSize: '12px' }}>Video Component</div>
          <div style={{ fontSize: '11px', opacity: 0.7, marginTop: '4px' }}>Set a video URL in the inspector</div>
        </div>
      </div>
    );
  }

  return (
    <video
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
      style={{ ...style, height }}
    />
  );
}
