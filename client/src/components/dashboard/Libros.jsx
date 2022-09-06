import React, { useEffect } from 'react'
import axios from 'axios'

function Libros() {
  useEffect(()=>{
    axios.get('https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ').then(res=>{
      console.log(res);
    })
  }, [])
  return (
    <div>Libros</div>
  )
}

export default Libros