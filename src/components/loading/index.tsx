import loading from '../../images/icon _Spinner.png';
import loading2 from '../../images/Carregando....png';
import './loading.css';

export default function Loading() {
  return (
    <div className="container-loading">
      <div className="loading">
        <img src={ loading } alt="Circulo carregando" width={ 61 } height={ 61 } />
        <img src={ loading2 } alt="Carregando..." />
      </div>
    </div>
  );
}
