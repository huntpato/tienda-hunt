import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc,collection,documentId,getDocs,getFirestore,query,where,writeBatch } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { MdClose } from "react-icons/md";
import CartForm from "../CartForm/CartForm";
import CartList from "../CartList/CartList";
import validation from "./validation";
import styles from "./Cart.module.css";

const Cart = () => {
  const {
    container,
    backButton,
    container__buttons,
    emptyButton,
    orderButton,
    container__form,
    closeIcon,
  } = styles;

  const { cartList, getTotal, clearCart } = useContext(CartContext);
  const [openForm, setopenForm] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    phone: "",
  });
  const [formErrors, setformErrors] = useState({});
  const [isSubmitable, setisSubmitable] = useState(false);

  const submitOrder = async (e) => {
    e.preventDefault();
    setformErrors(validation(formData));
    setisSubmitable(true);

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
    order.total = getTotal();

    if (Object.keys(formErrors).length === 0 && isSubmitable) {

      //create document order
      const db = getFirestore();
      const queryCollection = collection(db, "orders");
      await addDoc(queryCollection, order)
        .then(({ id }) => alert("Anotá el id de tu compra " + id))
        .catch((error) => console.log(error))
        .finally(clearCart);

      //update stock
      const queryCollectionStock = collection(db, "products");
      const queryUpdateStock = query(
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
              stock:
                res.data().stock -
                cartList.find((prod) => prod.id === res.id).quantity,
            })
          )
        )
        .finally(setopenForm(false));

      batch.commit();
    }
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
          <CartList openForm={openForm} />
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
        <div className={container__form}>
          <CartForm
            formData={formData}
            formErrors={formErrors}
            submitOrder={submitOrder}
            handleInput={handleInput}
          />
          <MdClose className={closeIcon} onClick={() => setopenForm(false)} />
        </div>
      )}
    </div>
  );
};

export default Cart;
