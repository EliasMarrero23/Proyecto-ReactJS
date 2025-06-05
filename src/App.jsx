import './App.css'
import Contacto from './components/Contacto';
import Cursos from './components/Cursos';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/TemaOscuro.css';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart';

function App() {
 
  return (
    <BrowserRouter>
    <CartProvider>
      <NavbarReactBootstrap/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Mawless Tattoo | Insumos & Materiales'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Categoría: '/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
