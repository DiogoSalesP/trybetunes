import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../service/userAPI';
import { CreateUserType } from '../../types';

export default function Header() {
  const [user, setUser] = useState<CreateUserType>();

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <header>
      <div>
        <NavLink to="/search">Pesquisar</NavLink>
        <NavLink to="/favorites">Músicas favoritas</NavLink>
        <NavLink to="/profile">Perfil</NavLink>
      </div>
      <p>{user?.name}</p>
    </header>
  );
}
