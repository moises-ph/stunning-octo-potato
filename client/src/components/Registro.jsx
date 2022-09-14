import React, { useRef } from "react";
import axios from "axios"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Nav from "./Nav";
import {useNavigate} from "react-router-dom"
import styles from "../styles/register.module.css";

function Registro() {
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)
  const email = useRef()
  const password = useRef()
  const name = useRef()
  const gender = useRef()
  const nationality = useRef()
  const DateOfBirth = useRef()
  
  const $ = (prop) => { return prop.current.value}

  const ani = (message, icon) => {
    MySwal.fire({
      title: <p>{message}</p>,
      icon: icon,
    });
  };

  const RedirectLogin = () => {
    window.setTimeout(() => {
      navigate("/login", { replace: true });
      window.clearTimeout();
    }, 1000);
  };

  const validateRegister = (e) => {
    e.preventDefault();
    if ($(name).length < 3) {
      ani("Nombre no debe ser menor a 3 caracteres", "error");
    } 
    else if ($(email).length < 8) {
      ani("Email no debe ser menor a 8 caracteres", "error");
    } else if ($(password).length < 6) {
      ani("Password no debe ser menor a 6 caracteres", "error");
    } else {
      saveRegister();
    }
  }

  const saveRegister = () => {
      axios.post('http://localhost:4000/register',{
        email: email.current.value,
        password: password.current.value,
        name: name.current.value,
        gender: gender.current.value,
        nationality: nationality.current.value,
        DateOfBirth: DateOfBirth.current.value       
      })
      .then((res)=>{
        ani("Usuario Registrado Exitosamente", "success");
        RedirectLogin();
      })
      .catch((err) => {
        ani(err.response.data.message.toString(), "error");
        console.log(err);
      })
  }
  return (
    <>
      <Nav />
      <div className={styles.body}>
        <h1 className={styles.title}>Registro</h1>
        <form className={styles.form}>
          <input className={styles.input1} type="text" ref={name} required placeholder="Nombre" />
          <input className={styles.input1} type="date" ref={DateOfBirth} required placeholder="Edad" />
          <input
            className={styles.input1}
            type="text" required
            ref={nationality}
            placeholder="Nacionalidad"
          />
          <label className={styles.label}>Genero: </label>
          <select className={styles.input1} ref={gender} required>
            <option></option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Otro">Otro</option>
          </select>
          <input
            className={styles.input1}
            type="text" required
            ref={email}
            placeholder="Correo Electronico"
          />
          <input
            className={styles.input1}
            type="text" required
            placeholder="Contraseña"
            ref={password}
          />
          <input
            className={styles.input1}
            type="text" required
            placeholder="Confirmar Contraseña"
          />
          <input type="submit" onClick={validateRegister}/>
        </form>
      </div>
    </>
  );
}

export default Registro;
