import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MagnifyingGlass, Star, UserCircle } from '@phosphor-icons/react';
import { getUser } from '../../service/userAPI';
import { CreateUserType } from '../../types';
import logo from '../../images/logo.png';
import './header.css';

export default function Header() {
  const [user, setUser] = useState<CreateUserType>();

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <header>
      <img src={ logo } alt="Logo" width={ 170 } height={ 95 } />
      <div className="nav-link">
        <NavLink to="/search">
          <MagnifyingGlass size={ 21 } color="#444955" />
          Pesquisa
        </NavLink>
        <NavLink to="/favorites">
          <Star size={ 21 } color="#444955" />
          Favoritas
        </NavLink>
        <NavLink to="/profile">
          <UserCircle size={ 21 } color="#444955" />
          Perfil
        </NavLink>
      </div>
      <div className="img-p">
        <img src="https://avatars.githubusercontent.com/u/102091772?v=4" alt="" width={ 150 } height={ 150 } />
        <p>{user?.name}</p>
      </div>
    </header>
  );
}
