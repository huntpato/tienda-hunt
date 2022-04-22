import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);
  
  const isInCart = (id) => {
    const item = cartList.some((prod) => prod.id === id);
    return item;
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
    
  const getTotal = () => {
       return cartList.reduce((acum, prod) => acum + (prod.price * prod.quantity), 0);
  }

  const getQuantity = () => {
    return cartList.reduce((acum, prod) => acum += prod.quantity, 0)
  }

  const clearCart = () => {
    setCartList([]);
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
          addToCart,
          getTotal,
          getQuantity,
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
