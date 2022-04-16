import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
  const { container, title } = styles;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() =>{

    const db = getFirestore()
    const queryCollection = collection( db, 'products')
    
    if(categoryId){
      const queryFilter = query( queryCollection, where( 'category', '==', categoryId ))
      getDocs(queryFilter)
      .then((resp)=> setProducts( resp.docs.map( (item) => ( { id: item.id, ...item.data() } ))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
    } else {
      getDocs(queryCollection)
      .then((resp)=> setProducts( resp.docs.map( (item) => ( { id: item.id, ...item.data() } ))))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
    }

  },[categoryId])

  return (
    <div className={container}>
      <h1 className={title}>{greeting}</h1>
      {loading ? (
        <h2>Cargando productos...</h2>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
