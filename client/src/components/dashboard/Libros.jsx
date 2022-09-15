import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function Libros() {
  const [content, setContent] = useState();
  const [query, setQuery] = useState("the+lord+of+the+rings")
  const book = useRef();

  const theQuery = () => {
    setQuery(book.current.value.split(' ').join('+'))
  }

  const theContent = (props) => {
    if(props.data.numFound !== 0){
    setContent(
      props.data.docs.map((info, index) => {
        return (
          <div key={index}>
            <h2>{info.title}</h2>
            <h3>{info.author_name ? info.author_name : 'no hay autor disponible'}</h3>
          </div>
        );
      })
    );
    }
    else{
      setContent(
        <h2>Por favor especificar mas la busqueda</h2>
      )
    }
  };

  useEffect(() => {
    axios
      .get(`http://openlibrary.org/search.json?q=${query}`)
      .then((res) => {
        console.log(res);
        theContent(res);
      })
      .then();
  }, [query]);
  return (
    <>
      <input type="text" ref={book}/>
      <button onClick={theQuery}>Buscar</button>
      <div>{content}</div>
    </>
  );
}

export default Libros;
