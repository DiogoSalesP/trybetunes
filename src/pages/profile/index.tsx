/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import Loading from '../../components/loading';
import { getUser } from '../../service/userAPI';
import { CreateUserType } from '../../types';
import './profile.css';

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<CreateUserType>();
  const navegate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setUser(getUser());
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user?.email.length === 0) {
      navegate('/profile/edit');
    }
  });

  function handleClick() {
    navegate('/profile/edit');
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
        <div className="container-profile">
          <img
            className="image-profile"
            src={ user.image }
            alt={ `Foto de ${user.name}` }
          />
          <div className="user-profile">
            <p>
              <b>Nome:</b>
              {' '}
              {user.name}
            </p>
            <p>
              <b>Email:</b>
              {' '}
              {user.email}
            </p>
            <p>
              <b>Descrição:</b>
              {' '}
              {user.description}
            </p>
            <button onClick={ handleClick }>
              Editar perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
