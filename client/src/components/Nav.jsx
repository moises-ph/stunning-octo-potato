import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../imagenes/logo.jfif"

function Nav() {
  return (
    <>
      <nav>
        <img src={Logo} alt="" />
        <h1 className="title">Express Entertainment</h1>
        <div className="links">
          <NavLink to='/'>Home</NavLink>
          <NavLink to="/login" className="link">
            Log in
          </NavLink>
          <NavLink to="/register" className="link registro">
            Registro
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Nav;
