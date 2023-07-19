import { useState } from 'react';
import Header from '../../components/header';

export default function Search() {
  const [search, setSearch] = useState('');
  const [disble, setDisable] = useState(true);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    if (value.length >= 2) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    setSearch(value);
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
            disabled={ disble }
          >
            Procurar
          </button>
        </label>
      </form>
    </>
  );
}
