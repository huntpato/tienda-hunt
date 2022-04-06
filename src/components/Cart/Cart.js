import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import styles from "./Cart.module.css";

const Cart = () => {
  const {
    container,
    container__card,
    container__product,
    item,
    itemDetail,
    emptyButton,
    backButton,
    deleteIcon,
    container__total
  } = styles;

  const { cartList, cartTotal, clearCart, removeItem } = useContext(CartContext);

  return (
    <div className={container}>
      {
        cartList.length <= 0 &&
        <>
          <h6>El carrito no tiene productos</h6>
          <Link to="/">
            <button className={backButton}>Volver</button>
          </Link>
        </>
      }
      {
        cartList.length > 0 &&
        <>
          {cartList.map((prod) => {
            return (
              <div key={prod.id} className={container__card}>
                <div  className={container__product}>
                  <div className={item}>
                    <p> Item:</p>
                    <span>{prod.item}</span>
                  </div>
                  <div className={itemDetail}>
                    <p> Cantidad:</p>
                    <span> {prod.quantity} </span>
                  </div>
                  <div className={itemDetail}>
                    <p> Precio:</p>
                    <span>$ {prod.price}</span>
                  </div>
                  <div className={itemDetail}>
                    <p> Sub total:</p>
                    <span> $ {prod.price * prod.quantity} </span>
                  </div>
                </div>
                <MdDeleteForever
                    className={deleteIcon}
                    onClick={() => removeItem(prod.id)}
                />
              </div>
            );
          })}
          <div className={container__total}>
            <p> Total:</p>
            <span>$ {cartTotal}</span>
          </div>
          <button className={emptyButton} onClick={clearCart}>
            Vaciar Carrito
          </button>
        </>
      }
    </div>
  );
};

export default Cart;
