import React from 'react';
import logo from '../../assets/logoViveruski.png'
import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css'

const NavBar = () => {
    const {container, navContainer, logotype, nav__categories, nav__categoriesLinks} = styles;

    return (
        <div className = {container} >
            <nav className={navContainer}>
                <img src={logo} alt='Logotipo' className={logotype}/>
                <ul className={nav__categories}>
                    <li><a className={nav__categoriesLinks} href=''>Interior</a></li>
                    <li><a className={nav__categoriesLinks} href=''>Exterior</a></li>
                    <li><a className={nav__categoriesLinks} href=''>Suculentas</a></li>
                    <li><a className={nav__categoriesLinks} href=''>Cactus</a></li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
        
    )
}

export default NavBar