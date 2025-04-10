import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import NavbarReactBootstrap from './components/NavbarReactBootstrap';
function App() {
  
  return (
    <>
    {/* <Navbar/> */}
    <NavbarReactBootstrap/>
    <ItemListContainer greeting='Mawless Tattoo | Insumos & Materiales'/>
    </>
  )
}

export default App
