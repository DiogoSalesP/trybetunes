import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../components/header';
import Loading from '../../components/loading';
import { getUser } from '../../service/userAPI';
import { CreateUserType } from '../../types';

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<CreateUserType>();

  useEffect(() => {
    setLoading(true);
    setUser(getUser());
    setLoading(false);
  }, []);

  if (loading || !user) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <NavLink to="/profile/edit">Editar perfil</NavLink>
      <div>
        <p>
          Nome:
          {' '}
          {user.name}
        </p>
        <p>
          E-mail:
          {' '}
          {user.email}
        </p>
        <p>
          Description:
          {' '}
          {user.description}
        </p>
        <img src={ user.image } alt={ `Foto de ${user.name}` } />
      </div>
    </>
  );
}
