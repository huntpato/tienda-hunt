import React from 'react';
import logo from '../../assets/logoViveruski.png'
import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css'

const NavBar = () => {
    const {container, navContainer, logotype, services} = styles;

    return (
        <div className = {container} >
            <nav className={navContainer}>
                <img src={logo} alt='Logotipo' className={logotype}/>
                <ul className={services}>
                    <li><a href=''>Interior</a></li>
                    <li><a href=''>Exterior</a></li>
                    <li><a href=''>Suculentas</a></li>
                    <li><a href=''>Cactus</a></li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
        
    )
}

export default NavBar