import axios from "axios";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import style from "../styles/topRated.module.css";

function TopRated() {
  const [movies, setMovies] = useState();

  const theMovies = (res) => {
    setMovies(
      res.data.results.map((res, index) => {
        return (
          <NavLink to={`/account/peliculas/${res.id}`} 
          key={index} className={style.movie}>
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${res.poster_path}`}
              className={style.poster} alt="movie cover"
            />
            <h3 className={style.title}>{res.title}</h3>
            <span className={style.rate}>Rate: {res.vote_average}</span>
          </NavLink>
        );
      })
    );
  };

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=1"
      )
      .then((res) => {
        console.log(res);
        theMovies(res);
      });
  }, []);
  return (
    <>
      <div className={style.movies}>{movies}</div>
    </>
  );
}

export default TopRated;
