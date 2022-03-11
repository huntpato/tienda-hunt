import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import NavBar from '../NavBar/NavBar'

const Routesapp = () => {
  return (
    <>
        <NavBar/>
        <ItemListContainer greeting = '* Bienvenido al viveruski *'/>
    </>
  )
}

export default Routesapp