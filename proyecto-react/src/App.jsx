
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './componentes/navbar/Navbar'
import ItemDetailContainer from './componentes/detail/ItemDetailContainer';
import ItemsListConteiner from './componentes/itemsconteiner/ItemsListConteiner';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemsListConteiner />} />
          <Route path="/category/:categoryId" element={<ItemsListConteiner />} />
          <Route path="/detail/:productoId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    
    
    </>
  )
}

export default App
