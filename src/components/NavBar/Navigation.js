import React from 'react';
import NavLinks from './NavLinks';
import styles from './NavBar.module.css'

const Navigation = () => {

    const {navigation} = styles;

  return (
      <div className={navigation}>
        <NavLinks/>
      </div>
  )
}

export default Navigation