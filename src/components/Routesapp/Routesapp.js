import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartContextProvider from "../../context/CartContext";
import NavBar from "../NavBar/NavBar";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Cart from "../Cart/Cart";
import NotFound from "../NotFound/NotFound";

const Routesapp = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="* Bienvenido al viveruski *" />
            }
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default Routesapp;
