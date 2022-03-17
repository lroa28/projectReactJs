import 'bootstrap/dist/css/bootstrap.min.css'; //en el video enviado como ejemplo lo agregaron a index.js
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './container/Item/ItemListContainer'


function App() {
  return (
    <>
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
    </>
    
  );
}

export default App;
