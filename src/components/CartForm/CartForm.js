import React from 'react';
import styles from './CartForm.module.css'

const CartForm = ({formData,formErrors,submitOrder,handleInput}) => {
  const {container, generateButton} = styles;

  return (
    <form onSubmit={submitOrder} className={container}>
        <p>Último paso y ya terminamos!</p>
        <input name="name" type="text" placeholder="Nombre y Apellido" onChange={handleInput} value={formData.name} ></input>
        {formErrors && <span>{formErrors.name}</span>}
        <input name="email" type="email" placeholder="E-mail" onChange={handleInput} value={formData.email} ></input>
        {formErrors && <span>{formErrors.email}</span>}
        <input name="emailConfirm" type="email" placeholder="Repetir e-mail" onChange={handleInput} value={formData.emailConfirm} ></input>
        {formErrors && <span>{formErrors.emailConfirm}</span>}
        <input name="phone" type="text" placeholder="Teléfono" onChange={handleInput} value={formData.phone}  ></input>
        {formErrors && <span>{formErrors.phone}</span>}
        <button type= "submit" className={generateButton}> Enviar orden </button>
    </form>
  )
}

export default CartForm