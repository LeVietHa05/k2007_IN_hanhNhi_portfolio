


export function Video() {
  return (
    <video
      width="1120"
      height="371"
      controls
      autoPlay="autoplay"
      preload="none">
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
