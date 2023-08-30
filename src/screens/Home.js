import { useNavigate } from 'react-router';
import logo from './logo.svg';
export function Home () {

  const navigate = useNavigate();

  return <div className="App">
    <header className="App-header">
      <button onClick={function () {
        navigate('/list')
      }} >
        ir a los animes
      </button>
    </header>
  </div>
}
    