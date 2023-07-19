import { useParams } from 'react-router-dom';

export default function Album() {
  const { id } = useParams();
  return (
    <>
      <h1>Album</h1>
      <p>
        ID:
        {id}
      </p>
    </>
  );
}
