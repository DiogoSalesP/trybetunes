import { useParams } from 'react-router-dom';
import Header from '../../components/header';

export default function Album() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <h1>Album</h1>
      <p>
        ID:
        {id}
      </p>
    </>
  );
}
