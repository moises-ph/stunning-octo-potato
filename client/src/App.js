import Context from "./components/context/Context";
import Home from "./components/Home";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import EliminarCuenta from "./components/EliminarCuenta";
import Peliculas from "./components/dashboard/Peliculas";
import Pelicula from "./components/dashboard/Pelicula";
import Tv from "./components/dashboard/Tv";
import Serie from "./components/dashboard/Serie";
import Libros from "./components/dashboard/Libros";
import Error404 from "./components/Error404";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  let token = window.localStorage.getItem("token")
  return (
    <>
      <BrowserRouter>
        <Context>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Registro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/account" element={token ? <Dashboard /> : <Navigate to="/" />}></Route>
            <Route path="/account/peliculas" element={token ? <Peliculas /> : <Navigate to="/" />}></Route>
            <Route path="/account/peliculas/:id" element={token ? <Pelicula /> : <Navigate to="/" />}></Route>
            <Route path="/account/series" element={token ? <Tv /> : <Navigate to="/" />}></Route>
            <Route path="/account/series/:id" element={token ? <Serie /> : <Navigate to="/" />}></Route>
            <Route path="/account/libros" element={token ? <Libros /> : <Navigate to="/" />}></Route>
            <Route path="/eracc" element={<EliminarCuenta />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
