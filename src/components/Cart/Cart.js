import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { MdDeleteForever } from "react-icons/md";
import styles from "./Cart.module.css";

const Cart = () => {
  const {
    container,
    container__card,
    container__product,
    item,
    itemDetail,
    emptyButton,
    backButton,
    deleteIcon,
    container__total,
    orderButton,
    container__buttons,
  } = styles;

  const { cartList, cartTotal, clearCart, removeItem } = useContext(CartContext);
  const [openForm, setopenForm] = useState(false);
  const [formData, setformData] = useState({ name: "", email: "", phone: "" });

  const submitOrder = async (e) => {
    e.preventDefault();
    let order = {};

    order.buyer = formData;
    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const title = cartItem.item;
      const price = cartItem.price * cartItem.quantity;
      const quantity = cartItem.quantity;
      return { id, title, price, quantity };
    });
    order.date = new Date().toISOString().split("T")[0];
    order.total = cartTotal;

    //create document order
    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    await addDoc(queryCollection, order)
      .then(({ id }) => alert("Anotá el id de tu compra " + id))
      .catch((error) => console.log(error))
      .finally(clearCart);

    //actualizar el stock
    const queryCollectionStock = collection(db, "products");

    const queryUpdateStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cartList.map((prod) => prod.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryUpdateStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock: res.data().stock - cartList.find((prod) => prod.id === res.id).quantity,
          })
        )
      )
      .finally(setopenForm(false));

    batch.commit();
  };

  const handleInput = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={container}>
      {cartList.length <= 0 && (
        <>
          <h6>El carrito no tiene productos</h6>
          <Link to="/">
            <button className={backButton}>Volver</button>
          </Link>
        </>
      )}
      {cartList.length > 0 && (
        <>
          {cartList.map((prod) => {
            return (
              <div key={prod.id} className={container__card}>
                <div className={container__product}>
                  <div className={item}>
                    <p> Item:</p>
                    <span>{prod.item}</span>
                  </div>
                  <div className={itemDetail}>
                    <p> Cantidad:</p>
                    <span> {prod.quantity} </span>
                  </div>
                  <div className={itemDetail}>
                    <p> Precio:</p>
                    <span>$ {prod.price}</span>
                  </div>
                  <div className={itemDetail}>
                    <p> Sub total:</p>
                    <span> $ {prod.price * prod.quantity} </span>
                  </div>
                </div>
                <MdDeleteForever
                  className={deleteIcon}
                  onClick={() => removeItem(prod.id)}
                />
              </div>
            );
          })}
          <div className={container__total}>
            <p> Total:</p>
            <span>$ {cartTotal}</span>
          </div>
          <div className={container__buttons}>
            <button className={emptyButton} onClick={clearCart}>
              Vaciar Carrito
            </button>
            <button className={orderButton} onClick={() => setopenForm(true)}>
              Finalizar Orden
            </button>
          </div>
        </>
      )}
      {openForm && (
        <form onSubmit={submitOrder}>
          <input
            name="name"
            type="text"
            placeholder="ingrese su nombre"
            onChange={handleInput}
            value={formData.name}
            required
          ></input>
          <input
            name="email"
            type="email"
            placeholder="ingrese su email"
            onChange={handleInput}
            value={formData.email}
            required
          ></input>
          <input
            name="phone"
            type="text"
            placeholder="ingrese su telefono"
            onChange={handleInput}
            value={formData.phone}
            required
          ></input>
          <button> Generar orden </button>
        </form>
      )}
    </div>
  );
};

export default Cart;
