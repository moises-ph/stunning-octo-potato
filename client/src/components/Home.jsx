import React, { useEffect, useState } from "react";
import axios from "axios";
import TopRated from "./TopRated";
import def from "../imagenes/default.png";
import github from '../imagenes/icons/github.svg'
import facebook from '../imagenes/icons/facebook.svg'
import instagram from '../imagenes/icons/instagram.svg'
import twitter from '../imagenes/icons/twitter.svg'
import style from "../styles/home.module.css";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

function Home() {
  const [movies, setMovies] = useState();

  const theMovies = (res) => {
    setMovies(
      <div>
        <img
          src={
            res.data.poster_path !== null
              ? `https://www.themoviedb.org/t/p/w220_and_h330_face${res.data.poster_path}`
              : def
          }
        />
        <h3>{res.data.title}</h3>
        <p>
          {res.data.overview.length > 0
            ? res.data.overview
            : "no hay descripcion disponible"}
        </p>
      </div>
    );
  };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/latest?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US"
      )
      .then((res) => {
        console.log(res);
        theMovies(res);
      });
  }, []);
  return (
    <>
      <Nav />
      <main>
        <h3>¿Que trata?</h3>
        <section>
          <p>
            Es una pagina creada para poder consultar la informacion de tus
            peliculas, series y libros favoritos
          </p>
        </section>
        <section>
          <h2>Lo mas nuevo</h2>
          <div>{movies}</div>
        </section>
        <section>
          <h2>Mejor rankeadas</h2>
          <TopRated />
        </section>
        <section></section>
      </main>
      <footer>
        <a href="https://github.com/moises-ph/stunning-octo-potato" target='_blank'><img src={github} /></a>
        <a href="" target='_blank'><img src={facebook} /></a>
        <a href="https://www.instagram.com/vitalysnowofficial/" target='_blank'><img src={instagram} /></a>
        <a href="https://twitter.com/Vitalys_Now" target='_blank'><img src={twitter} /></a>
      </footer>
    </>
  );
}

export default Home;
