/* eslint-disable react/jsx-max-depth */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MusicCard from '../../components/music-card/index';
import Header from '../../components/header';
import getMusic from '../../service/musicsAPI';
import { AlbumType, CollectionType } from '../../types';
import Loading from '../../components/loading';
import './album.css';

export default function Album() {
  const { id } = useParams();
  const [artist, setArtist] = useState<CollectionType>();
  const [musics, setMusics] = useState<AlbumType[]>();
  const [loading, setLoading] = useState(true);

  async function handleFetch(albumId: string | undefined) {
    if (albumId) {
      const result = await getMusic(id);
      setArtist(result[0]);
      setMusics(result.slice(1));
    }
  }

  useEffect(() => {
    if (!musics) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artist]);

  useEffect(() => {
    handleFetch(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="container-search" />
        <div className="container-musicas">
          <div className="container-image">
            <img
              src={ artist?.artworkUrl100 }
              alt={ `Album de ${artist?.collectionName}` }
              className="img-album"
            />
            <div className="container-image-p">
              <h2>{artist?.collectionName}</h2>
              <p>{artist?.artistName}</p>
            </div>
          </div>
          <div>
            <div className="musics-artist">
              { musics?.map((music) => (
                <MusicCard
                  key={ music.trackId }
                  trackName={ music.trackName }
                  previewUrl={ music.previewUrl }
                  trackId={ music.trackId }
                  handleClick={ () => {} }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
