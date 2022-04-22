import React from "react";
import { Link } from "react-router-dom";
import styles from "./ItemDetailButtons.module.css";

const ItemDetailButtons = () => {
    
  const { container, container__cartButton, container__keepButton } = styles;

  return (
    <div className={container}>
      <div className={container__cartButton}>
        <Link to="/cart">
          <button>Ir al carrito</button>
        </Link>
      </div>
      <div className={container__keepButton}>
        <Link to="/">
          <button>Seguir comprando</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetailButtons;
