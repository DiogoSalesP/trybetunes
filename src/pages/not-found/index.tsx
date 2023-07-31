import ops from '../../images/Ops.png';
import notFound from '../../images/notFound.png';
import './notFound.css';

export default function NotFound() {
  return (
    <div className="container-not-found">
      <div className="not-found">
        <img src={ ops } alt="ops" />
        <img src={ notFound } alt="not-found" />
      </div>
    </div>
  );
}
