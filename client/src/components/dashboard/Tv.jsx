import React, { useEffect, useState } from "react";
import axios from "axios";

function Tv() {
  const [serie, setSerie] = useState(<></>);
  const [index, setIndex] = useState(1);
  const theSerie = (prop) => {
    const results = prop.data.results
    setSerie( results.map((res, id)=>{
      return <div key={id}>
        <h3>{res.name}</h3>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${res.backdrop_path}`}/>
        <p>{res.overview.length > 0 ? res.overview : 'no description aviable'}</p>
      </div>
    })
    )
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=${index}`
      )
      .then((res) => {
        console.log(res);
        theSerie(res);
      });
  }, [index]);
  return (
    <>
      <h1>Series</h1>
      <button onClick={()=>{setIndex(1)}}>Inicio</button>
      <button onClick={()=>{setIndex(index>1 ? index-1 : index)}}>Anteriores</button>
      <button onClick={()=>{setIndex(index<500 ? index+1 : index)}}>Siguientes</button>
      <button onClick={()=>{setIndex(500)}}>Final</button>
      <div>{serie}</div>
    </>
  );
}

export default Tv