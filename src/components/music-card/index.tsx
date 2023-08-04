import { useEffect, useState } from 'react';
import { Heart } from '@phosphor-icons/react';
import { addSong, getFavoriteSongs, removeSong } from '../../service/favoriteSongAPI';
import getMusic from '../../service/musicsAPI';
import { AlbumType } from '../../types';
import load from '../../images/Carregando....png';
import './music-card.css';

type MusicCardProps = {
  trackName: string
  previewUrl: string
  trackId: number
  handleClick: (song: number) => void
};

export default function MusicCard({ trackName, previewUrl, trackId,
  handleClick }: MusicCardProps) {
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
    if (checked) {
      removeSong(trackId);
      handleResult();
    } else {
      const music: AlbumType = await getMusic(trackId.toString());
      addSong(music[0]);
    }
    handleResult();
    setLoading(false);
  }

  if (loanding) {
    return <img className="carregando-album" src={ load } alt="Carregando..." />;
  }
  return (
    <div className="music-track-id">
      <p>{trackName}</p>
      <audio src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
      </audio>
      <div className="container-heart">
        <label htmlFor={ trackId.toString() }>
          <input
            type="checkbox"
            id={ trackId.toString() }
            onChange={ handleChange }
            checked={ checked }
            onClick={ () => handleClick(trackId) }
          />
          <Heart
            className="heart"
            size={ 40 }
            weight="fill"
            color={ checked ? '#EC5050' : '#eeeeee' }
          />
        </label>
      </div>
    </div>
  );
}
