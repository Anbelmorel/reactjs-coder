import React from 'react'
import './ItemDetail.css'

function ItemDetail({producto}) {
  console.log("este es el producto",producto)
  if (!producto) {
    return <div>Cargando...</div>;
  }
  return (
    <div className='item-detail'>
      <img className='imagen-item' src={producto.img} alt={producto.nombre} />
      <div className='detalle-item'>
        <h2 className='titulo-item detalle-item'>{producto.descripcion}</h2>
        <p className='precio-item'>{producto.precio}</p>
        <button className='boton-item'>agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemDetail
