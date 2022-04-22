import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  
  const { container } = styles;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() =>{
    const db = getFirestore()
    const queryProd = doc( db, 'products', itemId )

    getDoc(queryProd)
    .then(resp => setProduct( { id:resp.id, ...resp.data()} ))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  },[itemId])

  return (
    <div className={container}>
      {loading ? (
        <h2>Cargando producto...</h2>
      ) : (
        <ItemDetail
          product={product}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
