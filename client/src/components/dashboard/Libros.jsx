import React, { useEffect } from 'react'
import axios from 'axios'

function Libros() {
  useEffect(()=>{
    axios.get('https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed').then(res=>{
      console.log(res);
    })
  }, [])
  return (
    <div>Libros</div>
  )
}

export default Libros