import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavLinks = () => {
    const {navBar__links} = styles

  return (
    <>
        <ul className={navBar__links}>
            <li><NavLink to="/categoria/interior">Interior</NavLink></li>
            <li><NavLink to="/categoria/exterior">Exterior</NavLink></li>
            <li><NavLink to="/categoria/suculentas">Suculentas</NavLink></li>
            <li><NavLink to="/categoria/cactus">Cactus</NavLink></li>
        </ul>
    </>
  )
}

export default NavLinks
