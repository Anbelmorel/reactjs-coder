import React from 'react'
import Item from './Item'
import './Items.css'

function ItemList({productos}) {
  return (
    <div className='card-conteiner'>
     {productos.map((producto)=>{
            return <Item key={producto.id} producto={producto}/>
        })
     }
    </div>
  )
}

export default ItemList
