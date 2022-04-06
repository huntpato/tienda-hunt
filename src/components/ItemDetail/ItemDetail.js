import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product }) => {
  const {
    container,
    detailcard,
    detailcard__category,
    detailcard__images,
    detailcard__description,
    detailcard__price,
  } = styles;

  const [count, setCount] = useState(product.initialCount);

  const handleCount = (num) => {
    setCount(count + num);
  };
 
  return (
    <div className={container}>
      <img
        className={detailcard__images}
        src={product.src}
        alt={product.pictureAlt}
      />
      <div className={detailcard}>
        <h6>{product.title}</h6>
        <span className={detailcard__category}>
          Categoria: {product.category}
        </span>
        <hr />
        <p className={detailcard__description}>{product.description}</p>
        <p className={detailcard__price}>
          Precio por unidad: $ {product.price}
        </p>
        <ItemCount
          stock={product.stock}
          initial={product.initialCount}
          handleCount={handleCount}
          product={product}
          count={count}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
