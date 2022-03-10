//import logo from './logo.svg';
//import Titulo from './components/Titulo/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Container/ItemListContainer';


function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Hello welcome e-bags _luk_c'/>
    </div>
    </>
  );
}

export default App;
