import React, { useEffect, useState } from "react";
import axios from "axios";
// import default from "../../imagenes/default.png";
import { NavLink, useParams } from "react-router-dom";
import style from "../../styles/pelicula.module.css";

function Pelicula() {
  const [content, setContent] = useState();

  const settingContent = (res) => {
    const data = res.data;
    setContent(
      <div className={style.movieContainer}>
        <h1 className={style.title}>{data.title}</h1>
        <img
          src={/*data.backdrop_path !== null ? default :*/ `https://www.themoviedb.org/t/p/w220_and_h330_face${data.backdrop_path}`}
          alt="movie cover"
        />
        <div className={style.info}>
          <p>Fecha de salida: {data.release_date}</p>
          <h3>
            Presupuesto: {data.budget}
          </h3>
          <p>Ganancia: {data.reveneu}</p>
          <h4>Description:</h4>
          <p>{data.overview}</p>
          <p>{data.tagline}</p>
        </div>
        <a href={data.homepage} className={style.link} target="_blank" rel="noreferrer">
          Donde ver
        </a>
        <button>Agregar a favoritos</button>
      </div>
    );
  };

  const data = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${data.id}?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US`
      )
      .then((res) => {
        console.log(res);
        settingContent(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={style.body}>
        <div className={style.container}>
          <NavLink to="/account/peliculas/" className={style.link}>
            Volver
          </NavLink>
        </div>
        <div className={style.cont}>{content}</div>
      </div>
    </>
  );
}

export default Pelicula;
