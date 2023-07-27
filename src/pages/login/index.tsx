import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateUserType, INITIAL_STATE } from '../../types';
import { createUser } from '../../service/userAPI';

// type LoginProps = {
//   setCreateUser: (user: CreateUserType) => void
// };

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState<CreateUserType>(INITIAL_STATE);
  const [disable, setDisable] = useState(true);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (value.length >= 3) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    setUser((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  function handleClick() {
    createUser(user);
    navigate('search');
  }

  const { name } = user;
  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          id="name"
          name="name"
          value={ name }
          onChange={ handleChange }
          required
        />
      </label>
      <button
        type="button"
        onClick={ handleClick }
        disabled={ disable }
      >
        Entrar
      </button>
    </form>
  );
}
