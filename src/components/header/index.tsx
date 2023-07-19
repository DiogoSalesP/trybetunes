import { useEffect, useState } from 'react';
import { getUser } from '../../service/userAPI';
import { CreateUserType } from '../../types';

export default function Header() {
  const [user, setUser] = useState<CreateUserType>();

  function getLocalstorage() {
    const data = getUser();
    return data;
  }

  useEffect(() => {
    setUser(getLocalstorage());
  }, []);

  return (
    <header>
      <p>Nome</p>
      <p>{user?.name}</p>
    </header>
  );
}
