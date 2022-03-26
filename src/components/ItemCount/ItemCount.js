import React, { useState } from "react";
import styles from './ItemCount.module.css'

const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(initial);
  const {container, countContainer, cart__button, cartSum__button} = styles;

  const onAdd = () => {
    alert(`Agregaste ${count} items al carrito`)
  }

  const handleProduct = (num) => {
    setCount(count + num);
  };


  return (
    <div className = {container}>
        <div className = {countContainer}>
            <button
            className = {cartSum__button}
            onClick={() => handleProduct(-1)}
            disabled={count === initial ? true : false}
            >
            -
            </button>
            <span>{count}</span>
            <button
            className = {cartSum__button}
            onClick={() => handleProduct(+1)}
            disabled={count === stock ? true : false}
            >
            +
            </button>
        </div>
        <button className = {cart__button} onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
