import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

function LibrosSubject() {
  const [content, setContent] = useState();
  const [typeQuery, setTypeQuery] = useState("q");
  const [subject, setSubject] = useState("love");
  const book = useRef();

  const theSubject = () => {
    setSubject(book.current.value.split(" ").join("+"));
  };

  const theContent = (props) => {
    if (props.data.work_count !== 0) {
      setContent(
        props.data.works.map((info, index) => {
          return (
            <div key={index}>
              <h2>{info.title}</h2>
              
              <h3>
                {info.authors
                  ? info.authors.map((rs)=>{return rs.name})
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
      .get(`http://openlibrary.org/subjects/${subject}.json?details=true?limit=50`)
      .then((res) => {
        console.log(res);
        theContent(res);
      })
      .then();
  }, [subject]);
  return (
    <>
      <input type="text" ref={book} />
      <button onClick={theSubject}>Buscar</button>
      <p>cambiar tipo de busqueda tipo de busqueda</p>
      <button onClick={() => setTypeQuery("title")}>por titulo</button>
      <button onClick={() => setTypeQuery("author")}>por autor</button>
      <div>{content}</div>
    </>
  );
}

export default LibrosSubject;
