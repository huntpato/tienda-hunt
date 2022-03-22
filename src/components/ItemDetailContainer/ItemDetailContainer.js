import React, { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail'
import styles from './ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
    const {container} = styles
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getFetch
        .then((resp) => setProduct(resp.find(p => p.id === 1)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, []);

    
  return (
    <div className={container}>
        {loading ? <h2>Cargando producto...</h2> : <ItemDetail product = {product}/>}
    </div>
  )
}

export default ItemDetailContainer