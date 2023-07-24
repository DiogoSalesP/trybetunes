import { useState } from 'react';
import addSong from '../../service/favoriteSongAPI';
import getMusic from '../../service/musicsAPI';
import Loading from '../loading';
import { AlbumType } from '../../types';

type MusicCardProps = {
  trackName: string
  previewUrl: string
  trackId: number | string
  musicsFavorites: boolean

};

export default function MusicCard({
  trackName, previewUrl, trackId, musicsFavorites }: MusicCardProps) {
  const [loanding, setLoading] = useState(false);

  async function handleChange() {
    setLoading(true);
    const music: AlbumType = await getMusic(trackId.toString());
    addSong(music[0]);
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
      <label htmlFor={ trackId.toString() }>
        <input
          type="checkbox"
          id={ trackId.toString() }
          onChange={ handleChange }
          checked={ musicsFavorites }
        />
      </label>
    </div>
  );
}
