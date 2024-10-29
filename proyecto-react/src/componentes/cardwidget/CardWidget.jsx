import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {CartContext } from '../../context/CartContext';




function CardWidget  ()  {

  const { cartItems } = useContext(CartContext);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  

  return (
    <>
    <Link to="/checkout" className='car' >

      <AiOutlineShoppingCart size={50}/>

      {totalQuantity > 0 && <span className='placa'>{totalQuantity}</span>}
    </Link>  

    </>

  );
}


export default CardWidget
