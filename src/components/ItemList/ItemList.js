import React, { useEffect, useState } from "react";
import { getFetch } from "../../helpers/getFetch";
import Item from "../Item/Item";
import styles from "./ItemList.module.css"

const ItemList = () => {
  const {container}=styles
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return(
      <div className={container}>
          {loading ? <h2>Cargando productos...</h2> : <Item products = {products} />}
      </div>
  );
};

export default ItemList;
