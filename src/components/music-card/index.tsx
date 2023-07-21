import { useState } from 'react';
import addSong from '../../service/favoriteSongAPI';
import getMusic from '../../service/musicsAPI';
import Loading from '../loading';

type MusicCardProps = {
  trackName: string
  previewUrl: string
  trackId: number | string
};

export default function MusicCard({ trackName, previewUrl, trackId }: MusicCardProps) {
  const [loanding, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const music = await getMusic(trackId.toString());
    addSong(music);
    setLoading(false);
  }

  if (loanding) {
    return <Loading />;
  }
  return (
    <div>
      <p>{trackName}</p>
      <audio src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
      </audio>
      <label htmlFor="favorite">
        <input
          type="checkbox"
          onClick={ handleClick }
        />
      </label>
    </div>
  );
}
