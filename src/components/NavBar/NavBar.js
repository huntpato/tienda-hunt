import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logoViveruski.png'
import CartWidget from '../CartWidget/CartWidget';
import MobileNavigation from './MobileNavigation';
import styles from './NavBar.module.css'
import Navigation from './Navigation';

const NavBar = () => {
    const {container, navBar, navBar__logo} = styles;

    return (
        <div className = {container} >
            <nav className={navBar}>
                <NavLink to= '/'>
                    <img src={logo} alt='Logotipo' className={navBar__logo}/>
                </NavLink>
                <Navigation/>
                <MobileNavigation/>
                <CartWidget/>
            </nav>
        </div>
        
    )
}

export default NavBar