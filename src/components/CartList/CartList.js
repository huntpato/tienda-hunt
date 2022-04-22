import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { MdDeleteForever } from "react-icons/md";
import styles from "./CartList.module.css"

const CartList = () => {

  const {container__card, container__product, item, itemDetail, deleteIcon, container__total} = styles;
  const { cartList, getTotal, removeItem } = useContext(CartContext);

  return (
    <>
        {cartList.map((prod) => {
            return (
            <div key={prod.id} className={container__card}>
            <div className={container__product}>
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
            <span>$ {getTotal()}</span>
        </div>
    </>
  )
}

export default CartList