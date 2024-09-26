import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import getApi from '../data/productos';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {
  const {productoId} = useParams();
  const [producto , setProducto]= useState(null);


  useEffect(()=>{
    getApi
    .then((respuesta)=> {
      const encontrado = respuesta.find((item)=> item.id == productoId)
      setProducto(encontrado)
    })
    .catch((error) => {
      console.error('Error al obtener los productos:', error);
    });
  },[productoId])

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
     
  )
}

export default ItemDetailContainer
