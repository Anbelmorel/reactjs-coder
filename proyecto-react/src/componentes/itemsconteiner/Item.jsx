import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css';

function Item({ producto }) {
  
  return (
    <div className='tarjeta'>
        <img className='imagen-tarjeta' src={producto.img} alt={producto.nombre} />
        <Link className='descripcion-tarjeta' to={`/detail/${producto.id} `}>{producto.descripcion}</Link>
        <p className='precio-tarjeta'>Precio: ${producto.precio}</p>
    </div>
  )
}

export default Item
