import { lazy, Suspense } from 'react' //Importación carga perezosa
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; //En el video enviado como ejemplo lo agregaron a index.js
import './App.css'
import NavBar from './components/NavBar/NavBar'
//import ItemListContainer from './container/List/ItemListContainer'
import ItemDetailContainer from "./container/Item/ItemDetailContainer.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Componente404 from "./components/Componente404/Componente404"
import CartContextProv from "./context/cartContext"

const ItemListContainer = lazy (() => import ('./container/List/ItemListContainer')) //Const que solo lo importa cuando lo uso

function App() { //Componente contenedor
  return (
    <Suspense fallback={<h1>Cargando ...</h1>}>
      <BrowserRouter>
      <CartContextProv>
        <div className="App border border-danger border-3">
          <NavBar/>          
          <Routes>
              <Route path="/" element={ <ItemListContainer/>}/> 
              <Route path="/categoria/:id" element={ <ItemListContainer/>}/> 
              <Route path="/tipo/:tipoId" element={ <ItemDetailContainer/>}/>  
              <Route path="/*" element={ <Navigate to='/'/> }/> 
              <Route path="/NotFound" element={ <Componente404/> }/> 
              <Route path="/*" element={ <Navigate to='NotFound'/> }/> 
              <Route path="/cart" element={ <Cart/>}/> 
          </Routes>
        </div>
      </CartContextProv>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

