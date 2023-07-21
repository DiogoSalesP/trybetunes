import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/header';
import searchAlbumsAPI from '../../service/searchAlbumAPI';
import { AlbumsType } from '../../types';
import Loading from '../../components/loading';

export default function Search() {
  const [search, setSearch] = useState('');
  const [artist, setArtist] = useState('');
  const [disble, setDisable] = useState(true);
  const [albums, setAlbums] = useState<AlbumsType[]>();
  const [albumEmpty, setalbumEmpty] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    if (value.length >= 2) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    setSearch(value);
  }

  async function handleClick() {
    setLoading(true);
    setArtist(search);
    setSearch('');
    const searchAlbum = await searchAlbumsAPI(search);
    if (searchAlbum.length === 0) {
      setalbumEmpty(true);
    } else {
      setalbumEmpty(false);
    }
    setAlbums(searchAlbum);
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <form>
        <label htmlFor="search-artist">
          <input
            type="text"
            id="search-artist"
            name="search-artist"
            value={ search }
            onChange={ handleChange }
            placeholder="Nome do artista"
          />
          <button
            type="button"
            onClick={ handleClick }
            disabled={ disble }
          >
            Procurar
          </button>
        </label>
      </form>
      {artist && <p>{`Resultado de álbuns de: ${artist}`}</p>}
      {albumEmpty ? <h1>Nenhum album foi encontrado</h1> : (
        albums?.map((album) => (
          <NavLink to={ `/album/${album.collectionId}` } key={ album.collectionId }>
            <p>{album.collectionName}</p>
            <p>{album.artistName}</p>
          </NavLink>
        )))}

    </>
  );
}
