import React, { useState } from "react";
import NavLinks from "./NavLinks";
import styles from "./NavBar.module.css";
import { MdMenu, MdClose } from "react-icons/md";

const MobileNavigation = () => {

  const { mobileNavigation, burguer } = styles;
  const styleIcon = { color: "white", fontSize: "2em" };

  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className={mobileNavigation}>
    {
        open ?
        <MdClose
            className={burguer}
            style={styleIcon}
            onClick={()=> setOpen(!open)}
        /> :
        <MdMenu
            className={burguer}
            style={styleIcon}
            onClick={()=> setOpen(!open)}
        />
    }
    {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </div>
  );
};

export default MobileNavigation;