import './App.css'
//Importación de los estilos CSS desde reactjs bootstraps: https://react-bootstrap.github.io/getting-started/introduction 
import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './Container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />  
      <ItemListContainer greeting='Hello wellcome e-bags _luk_c'/>
    </div>
  )
}

export default App