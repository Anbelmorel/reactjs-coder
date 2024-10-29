import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css';

function Item({ producto }) {
  
  return (
    <div className='tarjeta'>
        <img className='imagen-tarjeta' src={producto.imageId} alt={producto.title} />
        <Link className='descripcion-tarjeta' to={`/detail/${producto.id} `}>{producto.description}</Link>
        <p className='precio-tarjeta'>Precio: ${producto.price}</p>
    </div>
  )
}

export default Item
