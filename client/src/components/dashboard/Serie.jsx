import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import style from "../../styles/serie.module.css";
import DashNav from "./DashNav";

function Serie() {
  const [content, setContent] = useState();

  const settingContent = (res) => {
    const data = res.data;
    setContent(
      <div className={style.movieContainer}>
        <h1 className={style.title}>{data.name}</h1>
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.backdrop_path}`}
        />
        <div className={style.info}>
          <p>Fecha de salida: {data.first_air_date}</p>
          <p>
            Proximo episodio: {data.next_episode_to_air.name}. Sale el{" "}
            {data.next_episode_to_air.air_date}
          </p>
          <h3>Temporada: {data.number_of_seasons}</h3>
          <h4>Description:</h4>
          <p>{data.overview}</p>
          <p>{data.tagline}</p>
        </div>
        <a href={data.homepage} className={style.link} target="_blank">
          Donde ver
        </a>
      </div>
    );
  };

  const data = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${data.id}?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US`
      )
      .then((res) => {
        console.log(res);
        settingContent(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <DashNav />
      <div className={style.body}>
        <div className={style.container}>
          <NavLink to="/account/series/" className={style.link}>
            Volver
          </NavLink>
        </div>
        <div className={style.cont}>{content}</div>
      </div>
    </>
  );
}

export default Serie;
