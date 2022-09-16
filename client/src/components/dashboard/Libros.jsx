import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/libros.module.css";
import cover from "../../imagenes/book.png";
import axios from "axios";

function Libros() {
  const [content, setContent] = useState();
  const [typeQuery, setTypeQuery] = useState("q");
  const [query, setQuery] = useState("the+lord+of+the+rings");
  const book = useRef();

  const theQuery = () => {
    setQuery(book.current.value.split(" ").join("+"));
  };

  const theContent = (props) => {
    if (props.data.numFound !== 0) {
      setContent(
        props.data.docs.map((info, index) => {
          return (
            <div key={index}>
              <h2>{info.title}</h2>
              <img src={cover} className={style.cover} alt="books cover" />
              <h3>
                {info.author_name
                  ? info.author_name.map((rs) => {
                      return `${rs}, `;
                    })
                  : "no hay autor disponible"}
              </h3>
            </div>
          );
        })
      );
    } else {
      setContent(<h2>Por favor especificar mas la busqueda</h2>);
    }
  };

  useEffect(() => {
    axios
      .get(`http://openlibrary.org/search.json?${typeQuery}=${query}`)
      .then((res) => {
        console.log(res);
        theContent(res);
      })
      .then();
  }, [query, typeQuery]);
  return (
    <>
      <div className={style.body}>
        <input type="text" ref={book} />
        <button onClick={theQuery}>Buscar</button>
        <p>cambiar tipo de busqueda tipo de busqueda</p>
        <button onClick={() => setTypeQuery("title")}>por titulo</button>
        <button onClick={() => setTypeQuery("author")}>por autor</button>
        <div className={style.books}>{content}</div>
      </div>
    </>
  );
}

export default Libros;
