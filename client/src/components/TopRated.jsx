import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TopRated() {
  const [movies, setMovies] = useState();
  const theMovies = (res) => {
    setMovies(res.data.results.map((res, index)=>{
      return (<div key={index}>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${res.poster_path}`} />
        <h3>{res.title}</h3>
        <p>{res.overview.length>0 ? res.overview : 'No hay descripion disponible'}</p>
        <span>{res.vote_average}</span>
      </div>)
    }))
  }

  useEffect(()=> {
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5433a58ed58a7253f675b66bb885524d&language=en-US&page=1')
    .then((res)=>{
      console.log(res);
      theMovies(res)
    })
  }, [])
  return (
    <>
      <div>{movies}</div>
    </>
  )
}

export default TopRated