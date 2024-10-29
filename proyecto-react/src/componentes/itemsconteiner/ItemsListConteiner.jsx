import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Items.css';
import ItemList from './ItemList';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";




function ItemsListConteiner () {
  const [productos, setProductos] = useState([]);
  const {categoryId}=useParams();

  useEffect(() => {

    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    const q = categoryId ? query(itemsCollection, where("categoria", "==", categoryId)) : itemsCollection;

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No hay elementos en esta categoría.");
        } else {
          const itemsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProductos(itemsList);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los elementos: ", error);
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
