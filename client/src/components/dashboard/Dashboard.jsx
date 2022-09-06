import React, { useState } from "react";
import Peliculas from "./Peliculas";
import { NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <nav>
        <NavLink to='/account/peliculas' >Peliculas</NavLink>
        <NavLink to='/account/series' >Series</NavLink>
      </nav>
    </>
  );
}

export default Dashboard;
