import React from 'react';
import {MdShoppingCart} from 'react-icons/md'
import styles from './CartWidget.module.css'

const CartWidget = () => {

  const styleIcon = { color: "white", fontSize: "1.5em" }

  return (
    <>
        <MdShoppingCart className={styles.cart} style={styleIcon}/>
    </>
  )
}

export default CartWidget