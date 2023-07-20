type MusicCardProps = {
  trackName: string
  previewUrl: string
};

export default function MusicCard({ trackName, previewUrl }: MusicCardProps) {
  return (
    <div>
      <p>{trackName}</p>
      <audio src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
      </audio>
    </div>
  );
}
