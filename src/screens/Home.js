import { useNavigate } from 'react-router';
//import logo from './logo.svg';
export function Home () {

  const navigate = useNavigate();

  return <div className="App">    
    <header className="App-header">            
      <h1> Archery Score - QuieroMyHoyt</h1>
      <h3>Bienvenido Unknown</h3>
      <button onClick={function () {
        navigate('/timer')
      }} >
        Timer
      </button>
      <button onClick={function () {
        navigate('/score')
      }} >
        Score
      </button>
      <button onClick={function () {
        navigate('/history')
      }} >
        History
      </button>
      <button onClick={function () {
        navigate('/stadistics')
      }} >
        Stadistics
      </button>
      <button onClick={function () {
        navigate('/comparison')
      }} >
        Comparison
      </button>
    </header>
    <body>
      <h2>Aquí podemos poner un menu sensual</h2>
      
    </body>
    
  </div>
}
    