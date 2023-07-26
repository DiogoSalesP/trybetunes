import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MusicCard from '../../components/music-card/index';
import Header from '../../components/header';
import getMusic from '../../service/musicsAPI';
import { AlbumType, CollectionType } from '../../types';
import Loading from '../../components/loading';

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
    <>
      <Header />
      <p>{artist?.artistName}</p>
      { musics?.map((music) => (
        <MusicCard
          key={ music.trackId }
          trackName={ music.trackName }
          previewUrl={ music.previewUrl }
          trackId={ music.trackId }
        />
      ))}
    </>
  );
}
