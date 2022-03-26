import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavLinks = (props) => {
  const { navBar__links, navBar__linksTo, navBar__linksToActive } = styles;
  const { isMobile, closeMobileMenu } = props;

  return (
    <>
      <ul className={navBar__links}>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink
            to="/category/interior"
            className={({ isActive }) =>
              isActive ? navBar__linksToActive : navBar__linksTo
            }
          >
            Interior
          </NavLink>
        </li>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink
            to="/category/exterior"
            className={({ isActive }) =>
              isActive ? navBar__linksToActive : navBar__linksTo
            }
          >
            Exterior
          </NavLink>
        </li>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink
            to="/category/suculentas"
            className={({ isActive }) =>
              isActive ? navBar__linksToActive : navBar__linksTo
            }
          >
            Suculentas
          </NavLink>
        </li>
        <li onClick={() => isMobile && closeMobileMenu()}>
          <NavLink
            to="/category/cactus"
            className={({ isActive }) =>
              isActive ? navBar__linksToActive : navBar__linksTo
            }
          >
            Cactus
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
