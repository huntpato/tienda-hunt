import React from 'react'
import styles from './ItemDetail.module.css'

const ItemDetail = ({product}) => {

    const{container, detailcard, detailcard__title, detailcard__images, detailcard__description, detailcard__price} = styles;

  return (
    <div className={container}>
        <div className={detailcard}>
            <span className={detailcard__title}>soy el detalle del producto</span>
            <h6>{product.title}</h6>
            <p className={detailcard__description}>{product.description}</p>
            <p className={detailcard__price}>$ {product.price}</p>
        </div>
        <img className={detailcard__images} src={product.src} alt={product.pictureAlt}/>
    </div>
  )
}

export default ItemDetail