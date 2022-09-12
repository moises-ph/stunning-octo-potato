import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import style from '../../styles/tv.module.css'
import axios from "axios";

function Tv() {
  const [type, setType] = useState("popular");
  const [movie, setMovie] = useState(<></>);
  const [index, setIndex] = useState(1);
  const theMovie = (prop) => {
    const results = prop.data.results;
    setMovie(
      results.map((res, id) => {
        return (
          <NavLink to={`/account/series/${res.id}`} className={style.movie} key={id}>
            <div className={style.contTitle}>
              <h3 className={style.title}>{res.name}</h3>
            </div>
            <img
              className={style.img}
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${res.backdrop_path}`}
            />
            {/*<p>
              {res.overview.length > 0
                ? res.overview
                : "no description aviable"}
            </p>*/}
          </NavLink>
        );
      })
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${type}?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=${index}`
      )
      .then((res) => {
        console.log(res);
        theMovie(res);
      });
  }, [index, type]);
  return (
    <>
      <div className={style.body}>
        <nav className={style.nav}>
          <h1>Peliculas</h1>
          <div className={style.nbotones}>
            <button
              className={style.sbutton}
              onClick={() => setType("popular")}
            >
              Populares
            </button>
            <button
              className={style.sbutton}
              onClick={() => setType("top_rated")}
            >
              Mejores Ranqueadas
            </button>
            <button
              className={style.sbutton}
              onClick={() => setType("on_the_air")}
            >
              Proximas a estrenarse
            </button>
          </div>
        </nav>

        <div className={style.buttons}>
          <div className={style.menos}>
            <button
              className={style.boton}
              onClick={() => {
                setIndex(1);
              }}
            >
              Inicio
            </button>
            <button
              className={style.boton}
              onClick={() => {
                setIndex(index > 1 ? index - 1 : index);
              }}
            >
              Anteriores
            </button>
          </div>
          <div className={style.mas}>
            <button
              className={style.boton}
              onClick={() => {
                setIndex(index < 500 ? index + 1 : index);
              }}
            >
              Siguientes
            </button>
            <button
              className={style.boton}
              onClick={() => {
                setIndex(500);
              }}
            >
              Final
            </button>
          </div>
        </div>
        <div className={style.movies}>{movie}</div>

        <div className={style.buttons}>
          <div className={style.menos}>
            <button
              className={style.boton}
              onClick={() => {
                setIndex(1);
              }}
            >
              Inicio
            </button>
            <button
              className={style.boton}
              onClick={() => {
                setIndex(index > 1 ? index - 1 : index);
              }}
            >
              Anteriores
            </button>
          </div>
          <div className={style.mas}>
            <button
              className={style.boton}
              onClick={() => {
                setIndex(index < 500 ? index + 1 : index);
              }}
            >
              Siguientes
            </button>
            <button
              className={style.boton}
              onClick={() => {
                setIndex(500);
              }}
            >
              Final
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tv;
