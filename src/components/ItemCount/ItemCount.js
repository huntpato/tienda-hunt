import React, { useState } from "react";
import ItemDetailButtons from "../ItemDetailButtons/ItemDetailButtons";
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, initial, handleCount, product, count }) => {
  
  const { container, countContainer, cart__button, cartSum__button } = styles;
  const [open, setOpen] = useState(false);

  const onAdd = () => {
    setOpen(true);
  };

  return (
    <>
      {!open ? (
        <div className={container}>
          <div className={countContainer}>
            <button
              className={cartSum__button}
              onClick={() => handleCount(-1)}
              disabled={count === initial ? true : false}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className={cartSum__button}
              onClick={() => handleCount(+1)}
              disabled={count === stock ? true : false}
            >
              +
            </button>
          </div>
          <button className={cart__button} onClick={onAdd}>
            Agregar al carrito
          </button>
        </div>
      ) : (
        <ItemDetailButtons />
      )}
    </>
  );
};

export default ItemCount;
