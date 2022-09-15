import React, { useContext, useRef } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { Context, ContextLogin } from "./context/Context";
import axios from "axios";
import styles from "../styles/login.module.css";

function Login() {
  const MySwal = withReactContent(Swal);
  const email = useRef();
  const password = useRef();
  const { setToken } = useContext(ContextLogin);
  const navigate = useNavigate();

  const ani = (message, icon) => {
    MySwal.fire({
      title: <p>{message}</p>,
      icon: icon,
    });
  };

  const redirect = () => {
    window.setTimeout(() => {
      navigate("/account", { replace: true });
      window.clearTimeout();
    }, 2000)
  }

  const verifyLog = (e) => {
    e.preventDefault();
    if (password.current.value.length < 6) {
      ani("la contraseña no puede tener menos de 6 caracteres", "error");
    } else {
      sendLog();
    }
  };

  const sendLog = () => {
    axios
      .post("http://localhost:4000/login", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        setToken(res.data.token)
        window.localStorage.setItem("token", res.data.token)
        ani("usuario logueado exitosamente", "success")
        redirect();
      })
      .catch((err) => {
        console.log(err);
        ani(err.response.data.error.toString(), "error");
      });
  };
  return (
    <>
      <Context>
        <Nav />

        <div className={styles.body}>
          <h1 className={styles.title}>Login</h1>
          <form className={styles.form}>
            <input
              type="text"
              className={styles.input1}
              required
              ref={email}
              placeholder="Correo Eletronico"
            />
            <input
              type="text"
              required
              ref={password}
              className={styles.input1}
              placeholder="Contraseña"
            />
            <input type="submit" onClick={verifyLog} />
          </form>
        </div>
      </Context>
    </>
  );
}

export default Login;
