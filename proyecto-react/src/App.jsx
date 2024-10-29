import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar/Navbar";
import ItemDetailContainer from "./componentes/detail/ItemDetailContainer";
import ItemsListConteiner from "./componentes/itemsconteiner/ItemsListConteiner";
import CartProvider from "./context/CartContext";
import Checkout from "./componentes/cardwidget/Checkout";
import Error from "./componentes/error/Error";

function App() {
 
  
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemsListConteiner />} />
            <Route path="/category/:categoryId" element={<ItemsListConteiner />} />
            <Route path="/detail/:productoId" element={<ItemDetailContainer />}/>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error/>}/>

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
