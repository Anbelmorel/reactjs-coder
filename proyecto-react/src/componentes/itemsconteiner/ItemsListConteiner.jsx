import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getApi from '../data/productos';
import './Items.css';
import ItemList from './ItemList';




function ItemsListConteiner () {
  const [productos, setProductos] = useState([]);
  const {categoryId}=useParams();

  useEffect(() => {

    getApi
      .then((respuesta) => {
        if (categoryId){
          const newproductos = respuesta.filter((producto)=>producto.categoria === categoryId)
          setProductos(newproductos)
        }else{
          setProductos(respuesta)
        }
      })
      .catch((error) => {
        console.error(error);
      });

  }, [categoryId]);


  console.log(productos)
    return( 
    <>
      <div>

        <ItemList productos={productos}/>
      </div>
    </>

  )
}

export default ItemsListConteiner
