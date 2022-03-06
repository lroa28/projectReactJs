import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App" style={ {backgroundColor:'red'} }>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lu Roa
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NavBar/>
      </header>
      <Titulo/>
    </div>
  );
}

export default App;
