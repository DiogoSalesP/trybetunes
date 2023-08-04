/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import { CreateUserType, INITIAL_STATE } from '../../types';
import Loading from '../../components/loading';
import { getUser, updateUser } from '../../service/userAPI';
import './profile-edit.css';

export default function ProfileEdit() {
  const [user, setUser] = useState<CreateUserType>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [disable, setDisble] = useState<boolean>(true);
  const navegate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setUser(getUser());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (validateForm() && validateInput()) {
      setDisble(false);
    } else {
      setDisble(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function validateForm() {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { email } = user;
    return !!(email.length > 8 && pattern.test(email));
  }

  function validateInput() {
    const { name, description, image } = user;
    return !!(name.length > 2 && description.length > 2 && image.length > 2);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleClick() {
    updateUser(user);
    navegate('/profile');
  }

  if (loading || !user) {
    return <Loading />;
  }
  return (
    <div className="container-geral">
      <div className="container-header">
        <Header />
      </div>
      <div className="container-principal">
        <div className="container-search" />
        <div className="form-profile">
          <img className="image-profile" src={ user.image } alt={ user.image } />
          <form className="user-profile">
            <label htmlFor="name">
              Nome
              <input
                type="text"
                name="name"
                id="name"
                value={ user.name }
                onChange={ handleChange }
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                name="email"
                id="email"
                type="text"
                value={ user.email }
                onChange={ handleChange }
              />
            </label>
            <label htmlFor="description">
              Description
              <input
                name="description"
                id="description"
                type="text"
                value={ user.description }
                onChange={ handleChange }
              />
            </label>
            <label htmlFor="image">
              Foto
              <input
                name="image"
                id="image"
                value={ user.image }
                src={ user.image }
                alt={ `Foto de ${user.name}` }
                onChange={ handleChange }
              />
            </label>
            <button
              type="button"
              disabled={ disable }
              onClick={ handleClick }
            >
              Editar Profile
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
