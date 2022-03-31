import React from 'react';
import {MdShoppingCart} from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import styles from './CartWidget.module.css'

const CartWidget = () => {

  const styleIcon = { color: "white", fontSize: "1.5em" }

  return (
    <>
        <NavLink to="/cart" className={styles.cart}>
          <MdShoppingCart style={styleIcon}/>
        </NavLink>
    </>
  )
}

export default CartWidget