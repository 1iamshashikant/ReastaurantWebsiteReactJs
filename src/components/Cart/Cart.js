import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartCntxt from '../../store/cart-context';


const Cart = (props) => {
  const cartcntx =useContext(CartCntxt);
  const cartItems = (
    <ul className={classes['cart-items']}>
    {cartcntx.items.map((item) => (
        <li>Name:{item.name} Price:{item.price} quantity:{item.quantity}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;