import React from "react";
import styles from './Item.module.css'

const Item = ({ products }) => {
    const {container, images} = styles;

  return (
    <>
      {products.map((product) => {
        return (
          <div className ={container} key={product.id}>
            <h6>{product.title}</h6>
            <img className={images} src={product.src} alt={product.pictureAlt}/>
            <p>$ {product.price}</p>
            <button>Ver detalle del producto</button>
          </div>
        );
      })}
    </>
  );
};

export default Item;
