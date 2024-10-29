import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const { productoId } = useParams(); 
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    
    const q = query(itemsCollection, where("id", "==", productoId));

    getDocs(q)
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No se encontró el producto");
          setProducto(null);
        } else {
          const foundProduct = snapshot.docs[0].data();
          setProducto({ id: snapshot.docs[0].id, ...foundProduct });
        }
      })
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      });
  }, [productoId]);
  console.log("Producto ID:", productoId);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;


