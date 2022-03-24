import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import Item from "../Item/Item";
import styles from "./ItemList.module.css"

const ItemList = () => {
  const {container}=styles
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoriaId} = useParams()

  useEffect(() => {
    if(categoriaId){
      getFetch
      .then((resp) => setProducts(resp.filter(product => product.category === categoriaId)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    } else{
      getFetch
      .then((resp) => setProducts(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  return(
      <div className={container}>
          {loading ? <h2>Cargando productos...</h2> : <Item products = {products} />}
      </div>
  );
};

export default ItemList;
