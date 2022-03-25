import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavLinks = (props) => {
  const { navBar__links } = styles;
  const { isMobile, closeMobileMenu } = props;

  return (
    <>
      <ul className={navBar__links}>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink to="/category/interior">Interior</NavLink>
        </li>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink to="/category/exterior">Exterior</NavLink>
        </li>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink to="/category/suculentas">Suculentas</NavLink>
        </li>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink to="/category/cactus">Cactus</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
