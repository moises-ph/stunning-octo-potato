import React from "react";
import "../styles/home.css";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";


function Home() {
  return (
    <>
      <Nav />
      <main>
        <h3>¿Que trata?</h3>
        <section>
          <p>Es una pagina creada para poder consultar la informacion de tus peliculas, series y libros favoritos</p>
        </section>
        <section>{/*imagenes*/}</section>
      </main>
      <footer>{/*links */}</footer>
    </>
  );
}

export default Home;
