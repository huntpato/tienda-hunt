import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../NavBar/NavBar";
import NotFound from "../NotFound/NotFound";

const Routesapp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="* Bienvenido al viveruski *" />}
        />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer greeting="* Bienvenido al viveruski *" />}
        />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/carrito" element={<Cart/>}/>
        <Route path="/notfound" element={<NotFound/>}/>
        <Route path='/*' element={<Navigate to='/notfound' replace/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routesapp;
