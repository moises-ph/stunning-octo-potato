import React from 'react'
import style from '../styles/error404.module.css'
import {NavLink} from 'react-router-dom'

function Error404() {
  return (
    <>
      <h1>Error 404, pagina no econtrada</h1>
      <NavLink to='/'>Volver al home</NavLink>
    </>
  )
}

export default Error404