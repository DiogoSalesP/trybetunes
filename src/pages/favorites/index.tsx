import { useEffect, useState } from 'react';
import Header from '../../components/header';
import { getFavoriteSongs, removeSong } from '../../service/favoriteSongAPI';
import { AlbumType } from '../../types';
import Loading from '../../components/loading';
import MusicCard from '../../components/music-card';

export default function Favorites() {
  const [favoriteSong, setFavoriteSong] = useState<AlbumType[]>([]);
  const [loading, setLoading] = useState(false);

  function handleClick(song: number) {
    removeSong(song);
    handleGetFavoriteSongs();
  }

  function handleGetFavoriteSongs() {
    setFavoriteSong(getFavoriteSongs());
  }

  useEffect(() => {
    setLoading(true);
    handleGetFavoriteSongs();
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container-geral">
      <div className="container-header">
        <Header />
      </div>
      <div className="container-principal">
        <div className="container-search">
          {favoriteSong.length !== 0
            ? <h1>Músicas Favoritas</h1>
            : <h1>Sem Músicas Favoritas</h1>}
        </div>
        <div className="container-musicas">
          {favoriteSong.map((song) => (
            <MusicCard
              key={ song.trackId }
              trackName={ song.trackName }
              previewUrl={ song.previewUrl }
              trackId={ song.trackId }
              handleClick={ () => handleClick(song.trackId) }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
