import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { MdShoppingCart } from "react-icons/md";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  
  const styleIcon = { color: "white", fontSize: "1.5rem" };
  const { container, cart } = styles;

  const { getQuantity } = useContext(CartContext);

  return (
    <div className={container}>
      <NavLink to="/cart" className={cart}>
        <MdShoppingCart style={styleIcon} />
      </NavLink>
      {getQuantity() > 0 && <span> ({getQuantity()})</span>}
    </div>
  );
};

export default CartWidget;
