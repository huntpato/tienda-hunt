import React, { useState } from "react";
import styles from './ItemCount.module.css'

const ItemCount = ({stock, initial}) => {
  const [count, setCount] = useState(initial);
  const {container, countContainer} = styles;

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
            onClick={() => handleProduct(-1)}
            disabled={count === initial ? true : false}
            >
            -
            </button>
            <span>{count}</span>
            <button
            onClick={() => handleProduct(+1)}
            disabled={count === stock ? true : false}
            >
            +
            </button>
        </div>
        <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
