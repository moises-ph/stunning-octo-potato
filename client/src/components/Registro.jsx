import React, { useRef } from "react";
import axios from "axios"
import Nav from "./Nav";
import styles from "../styles/register.module.css";

function Registro() {
  const email = useRef()
  const password = useRef()
  const name = useRef()
  const gender = useRef()
  const nationality = useRef()
  const DateOfBirth = useRef()

  const saveRegister = () => {
      axios.post('http://localhost:4000/register',{
        email: email.current.value,
        password: password.current.value,
        name: name.current.value,
        gender: gender.current.value,
        nationality: nationality.current.value,
        DateOfBirth: DateOfBirth.current.value       
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
          <input type="submit" onClick={saveRegister}/>
        </form>
      </div>
    </>
  );
}

export default Registro;
