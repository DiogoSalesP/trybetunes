import { useEffect, useState } from 'react';
import addSong, { getFavoriteSongs } from '../../service/favoriteSongAPI';
import getMusic from '../../service/musicsAPI';
import Loading from '../loading';
import { AlbumType } from '../../types';

type MusicCardProps = {
  trackName: string
  previewUrl: string
  trackId: number | string
};

export default function MusicCard({ trackName, previewUrl, trackId }: MusicCardProps) {
  const [loanding, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleResult() {
    const favoriteSongs: AlbumType[] = getFavoriteSongs();
    setChecked(favoriteSongs.some((song) => song.trackId === trackId));
  }

  useEffect(() => {
    setLoading(true);
    handleResult();
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleChange() {
    setLoading(true);
    const music: AlbumType = await getMusic(trackId.toString());
    addSong(music[0]);
    handleResult();
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
          checked={ checked }
        />
      </label>
    </div>
  );
}
