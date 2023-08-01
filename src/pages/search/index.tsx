import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/header';
import searchAlbumsAPI from '../../service/searchAlbumAPI';
import { AlbumsType } from '../../types';
import Loading from '../../components/loading';
import error from '../../images/icon _circle_error.png';
import nenhumAlbum from '../../images/nenhum_album_foi_encontrado.png';
import './seach.css';

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

  return (
    <div className="container-geral">
      <div className="container-header">
        <Header />
      </div>
      <div className="container-principal">
        <form className="container-search">
          <label htmlFor="search-artist">
            <input
              type="text"
              id="search-artist"
              name="search-artist"
              value={ search }
              onChange={ handleChange }
              placeholder="DIGITE SUA PESQUISA"
            />
          </label>
          <button
            type="button"
            onClick={ handleClick }
            disabled={ disble }
          >
            PROCURAR
          </button>
        </form>
        {loading ? <Loading /> : (
          <div className="container-musicas">
            {albumEmpty ? (
              <div className="container-album-not-found">
                <img
                  src={ error }
                  alt="imagem circulo erro"
                  width={ 70 }
                  height={ 70 }
                />
                <img
                  src={ nenhumAlbum }
                  alt="Nenhum álbum foi encontrado"
                  width={ 448 }
                  height={ 30 }
                />
              </div>
            ) : (
              <div className="container-albums">
                {albums && <h2>{`Resultado de álbuns de ${artist}:`}</h2>}
                <div className="albums">
                  {albums?.map((album) => (
                    <div className="album" key={ album.collectionId }>
                      <NavLink
                        to={ `/album/${album.collectionId}` }
                        key={ album.collectionId }
                      >
                        <img
                          src={ album.artworkUrl100 }
                          alt={ `Album ${album.collectionName}` }
                        />
                        <p>{album.collectionName}</p>
                        <p>{album.artistName}</p>
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
