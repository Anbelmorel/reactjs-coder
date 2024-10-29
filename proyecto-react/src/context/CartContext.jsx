import React, { createContext, useState, useEffect } from 'react';
import { getFirestore, getDocs, collection } from "firebase/firestore";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productos, setProductos] = useState([]); 
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection)
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No se encontraron productos en la colección.");
        } else {
          const itemsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProductos(itemsList); 
        }
      })
      .catch((error) => {
        console.error("noy hay productos", error);
        setError("hubo un error en los productos");
      });
  }, []);

  const addItemToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];

      updatedCartItems[existingItemIndex].quantity += item.quantity;
      
      setCartItems(updatedCartItems);
      setError(null);
    } else {
      setCartItems([...cartItems, item]);
      setError(null);
    }
  };

  const removeItemFromCart = (itemId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{cartItems,addItemToCart,removeItemFromCart,clearCart,totalPrice,productos,error,setError}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;