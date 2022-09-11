import React, { useEffect, useState } from "react";
import style from "../../styles/peliculas.module.css";
import axios from "axios";

function Peliculas() {
  const [type, setType] = useState("popular");
  const [movie, setMovie] = useState(<></>);
  const [index, setIndex] = useState(1);
  const theMovie = (prop) => {
    const results = prop.data.results;
    setMovie(
      results.map((res, id) => {
        return (
          <div className={style.movie} key={id}>
            <h3>{res.title}</h3>
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${res.backdrop_path}`}
            />
            {/*<p>
              {res.overview.length > 0
                ? res.overview
                : "no description aviable"}
            </p>*/}
          </div>
        );
      })
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=${index}`
      )
      .then((res) => {
        console.log(res);
        theMovie(res);
      });
  }, [index, type]);
  return (
    <>
      <div className={style.body}>
        <h1>Peliculas</h1>
        <nav>
          <button onClick={() => setType("popular")}>Populares</button>
          <button onClick={() => setType("top_rated")}>
            Mejores Ranqueadas
          </button>
          <button onClick={() => setType("upcoming")}>
            Proximas a estrenarse
          </button>
        </nav>

        <button
          onClick={() => {
            setIndex(1);
          }}
        >
          Inicio
        </button>
        <button
          onClick={() => {
            setIndex(index > 1 ? index - 1 : index);
          }}
        >
          Anteriores
        </button>
        <button
          onClick={() => {
            setIndex(index < 500 ? index + 1 : index);
          }}
        >
          Siguientes
        </button>
        <button
          onClick={() => {
            setIndex(500);
          }}
        >
          Final
        </button>
        <div className={style.movies}>{movie}</div>
      </div>
    </>
  );
}

export default Peliculas;
