import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {

  const [cartList, setCartList] = useState([]);
  const [cartQuantity, setcartQuantity] = useState(0)
  const [cartTotal, setcartTotal] = useState(0)

  useEffect(() => {

    const prodTotal = cartList.map((prod)=> prod.price * prod.quantity)
    const cartSum = prodTotal.reduce((a,e)=> a + e, 0)
    setcartTotal(cartSum)

    const prodQuantity = cartList.map((prod)=> prod.quantity)
    const cartProdQuantity = prodQuantity.reduce((a,e)=> a + e, 0)
    setcartQuantity(cartProdQuantity)

  }, [cartList])
  
  const isInCart = (id) => {
    const item = cartList.some((prod) => prod.id === id);
    return item
  };

  const addToCart = (product) => {
    if (isInCart(product.id)) {
      const findProduct = cartList.find((prod) => prod.id === product.id);
      const addedQuantity = findProduct.quantity + product.quantity;

      const newProduct = {
        item: findProduct.item,
        id: findProduct.id,
        price: findProduct.price,
        quantity: addedQuantity,
      };

      const cartWithoutDuplicates = cartList.filter(
        (prod) => prod.id !== product.id
      );
      const cartAddingNew = [...cartWithoutDuplicates, newProduct];
      setCartList(cartAddingNew);
    } else {
      setCartList([...cartList, product]);
    }
  };

  const clearCart = () => {
    const confirmation = window.confirm("¿Deseas vaciar el carrito?");
    if(confirmation){
      setCartList([]);
    } 
  };

  const removeItem = (id) => {
    const newCart = cartList.filter((prod) => prod.id !== id);
    setCartList(newCart);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cartList,
          cartQuantity,
          cartTotal,
          addToCart,
          clearCart,
          removeItem,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
