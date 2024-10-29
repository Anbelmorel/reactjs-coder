import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext"; 
import Swal from "sweetalert2";
import Error from "../error/Error";

function ItemDetail({ producto }) {
  const { addItemToCart, error, setError } = useContext(CartContext); 
  const [selectedQuantity, setSelectedQuantity] = useState(1); 
  
  

  if (!producto) {
    return <Error/>;
  }

  
  const handleAddToCart = () => {
    addItemToCart({ ...producto, quantity: selectedQuantity });
    setSelectedQuantity(1); 
  

    Swal.fire({
       title: "Producto agregado!",
       icon: "success",
       width: "400px",
       iconColor: "#32CD32",
       position: "top-end",
       showConfirmButton: false,
       timer: 1500
     });
 };

  
  const incrementQuantity = () => {
    if (selectedQuantity < producto.stock) {
      setSelectedQuantity(selectedQuantity + 1);
    }
  };

  
  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };
 
  return (
    <div className="item-detail">
      <img className="imagen-item" src={producto.imageId} alt={producto.title} />
      <div className="detalle-item">
        <h2 className="titulo-item detalle-item">{producto.description}</h2>
        <p className="precio-item">Precio: ${producto.price}</p>
        <div className="quantity-controls">
          <button className="botonMenosMas" onClick={decrementQuantity} disabled={selectedQuantity === 1}>
            -
          </button>
          <span className="quantity" >{selectedQuantity}</span>
          <button className="botonMenosMas" onClick={incrementQuantity} disabled={selectedQuantity === producto.stock} >
            +
          </button>
        </div>
        <button className="boton-item"  onClick={handleAddToCart} disabled={producto.stock === 0}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemDetail;
