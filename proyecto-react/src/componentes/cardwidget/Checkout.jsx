import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { HiOutlineTrash } from 'react-icons/hi';
import './Checkout.css'

const Checkout = () => {
  const { cartItems, totalPrice , removeItemFromCart } = useContext(CartContext);


  return (
    <div className="checkout-container">
    {cartItems.map((item) => (
      <div className="checkout-item" key={item.id}>
        <div className="checkout-item-image">
          <img src={item.imageId} alt={item.title} />
        </div>
        <div className="checkout-item-details">
          <div>
            <h3>{item.description}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price}</p>
          </div>

          <div className='checkout-item-details-remove'>
             <button className="remove-button" onClick={() => removeItemFromCart(item.id)}>
              <HiOutlineTrash size={20} />
             </button>
          </div>
        </div>
      </div>
    ))}
     <p>total: {totalPrice}</p>
    <button className='confirm-button'> finalizar compra </button>
  </div>
  )
}

export default Checkout;

