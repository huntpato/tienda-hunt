import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

const ItemListContainer = ({greeting}) => {
    const {container,title} = styles;
  
  return (
    <div className={container}>
        <h1 className={title}>{greeting}</h1>
        <ItemCount stock = {5} initial = {1}/>
        <ItemList/>
    </div>      
  )
}

export default ItemListContainer