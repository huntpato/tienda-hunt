import React from "react";
import Item from "../Item/Item";
import styles from "./ItemList.module.css"

const ItemList = ({products}) => {

  const {container}=styles

  return(
      <div className={container}>
          <Item products = {products} />
      </div>
  );
};

export default ItemList;
