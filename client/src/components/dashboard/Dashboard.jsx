import React, { useState } from "react";
import Peliculas from "./Peliculas";
import style from "../../styles/dashboard.module.css";
import Favs from "./favs/Favs";
import { NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <nav className={style.nav}>
        <h1 className={style.title}>Express Entertainment</h1>
        <div className={style.links}>
          <NavLink to="/account/peliculas" className={style.link}>
            Peliculas
          </NavLink>
          <NavLink to="/account/series" className={style.link}>
            Series
          </NavLink>
          <NavLink to="/account/libros" className={style.link}>
            Libros
          </NavLink>
        </div>
      </nav>
      <main className={style.mainContainer}>
        <section className={style.section}>
          <p className={style.description}>
            Aqui podras ver y guardar tus series, libros y peliculas favoritas y
            tambien podras ver en lugar donde podrsa encontrar mas informacion
            al respecto de los mismos
          </p>
        </section>
        <section>
          <Favs />
        </section>
      </main>
    </>
  );
}

export default Dashboard;
