import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import getMusic from '../../service/musicsAPI';
import { AlbumType, CollectionType } from '../../types';
import MusicCard from '../../components/music-card';
import Loading from '../../components/loading';

export default function Album() {
  const { id } = useParams();
  const [artist, setArtist] = useState<CollectionType>();
  const [musics, setMusics] = useState<AlbumType[]>();
  const [loading, setLoading] = useState(true);

  async function handlefetch(albumId: string | undefined) {
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
  }, [artist]);

  useEffect(() => {
    handlefetch(id);
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
