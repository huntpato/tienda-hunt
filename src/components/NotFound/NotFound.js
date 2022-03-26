import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css'

const NotFound = () => {

    const {container,container__message, container__button} = styles;

  return (
    <div className={container}>
        <div className={container__message}>
            <h2>404</h2>
            <h5>Page Not Found</h5>
            <p>Oops parece ser que te perdiste en la selva...</p>
            <Link to="/" style={{width:"60%"}}>
                <button className={container__button}>Volver al home</button>
            </Link> 
        </div>
    </div>
  )
}

export default NotFound