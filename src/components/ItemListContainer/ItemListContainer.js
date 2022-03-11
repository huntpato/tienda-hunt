import React from 'react';
import styles from './ItemListContainer.module.css'

const ItemListContainer = ({greeting}) => {
    const {container,title} = styles
  return (
    <div className={container}>
        <h1 className={title}>{greeting}</h1>
    </div>      
  )
}

export default ItemListContainer