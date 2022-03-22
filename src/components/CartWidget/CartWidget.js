import React from 'react';
import {MdShoppingCart} from 'react-icons/md'

const CartWidget = () => {

  const styleIcon = { color: "white", fontSize: "1.5em" }

  return (
    <>
        <MdShoppingCart style={styleIcon}/>
    </>
  )
}

export default CartWidget