import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const Item = ({ products }) => {
  
  const { container, images, product__detail } = styles;

  return (
    <>
      {products.map((product) => {
        return (
          <div className={container} key={product.id}>
            <h6>{product.title}</h6>
            <img
              className={images}
              src={product.src}
              alt={product.pictureAlt}
            />
            <p>$ {product.price}</p>
            <Link to={`/item/${product.id}`}>
              <button className={product__detail}>Ver detalle</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Item;
