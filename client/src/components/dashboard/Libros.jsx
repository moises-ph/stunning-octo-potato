import React, { useEffect, useRef, useState } from "react";
import style from "../../styles/libros.module.css";
import DashNav from "./DashNav";
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
              {/* <img src={`https://covers.openlibrary.org/b/isbn/${info.cover_edition_key}-S.jpg`} /> */}
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
      <DashNav />
      <main className={style.mainContainer}>
        <nav className={style.nav}>
          <div className={style.search}>
            <input type="text" ref={book} />
            <button onClick={theQuery}>Buscar</button>
          </div>
          <div className={style.searchType}>
            <p>cambiar tipo de busqueda tipo de busqueda</p>
            <button onClick={() => setTypeQuery("title")}>por titulo</button>
            <button onClick={() => setTypeQuery("author")}>por autor</button>
          </div>
        </nav>
        <div>{content}</div>
      </main>
    </>
  );
}

export default Libros;
