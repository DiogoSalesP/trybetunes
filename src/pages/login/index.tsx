import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateUserType, INITIAL_STATE } from '../../types';
import { createUser } from '../../service/userAPI';
import './login.css';
import logo from '../../images/logo.png';
import Loading from '../../components/loading';
import { imgCat } from '../../service/image';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState<CreateUserType>(INITIAL_STATE);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);

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
      image: imgCat,
    }));
  }

  function handleClick() {
    createUser(user);
    setLoading(true);
    navigate('search');
  }

  if (loading) {
    return <Loading />;
  }

  const { name } = user;
  return (
    <div className="container-login">
      <div className="login">
        <img src={ logo } alt="" />
        <form>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              value={ name }
              onChange={ handleChange }
              placeholder="Qual é o seu nome?"
              required
            />
          </label>
          <button
            type="button"
            onClick={ handleClick }
            disabled={ disable }
          >
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}
