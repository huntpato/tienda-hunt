import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../NavBar/NavBar";

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
          path="/categoria/:categoriaId"
          element={<ItemListContainer greeting="* Bienvenido al viveruski *" />}
        />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>} />
        <Route path="/carrito" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routesapp;
