import Home from "./components/Home";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import EliminarCuenta from "./components/EliminarCuenta";
import Peliculas from "./components/dashboard/Peliculas";
import Pelicula from "./components/dashboard/Pelicula";
import Tv from "./components/dashboard/Tv";
import Serie from './components/dashboard/Serie'
import Libros from './components/dashboard/Libros'
import Error404 from "./components/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Registro />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/account" element={<Dashboard />}></Route>
          <Route path="/account/peliculas" element={<Peliculas />}></Route>
          <Route path="/account/peliculas/:id" element={<Pelicula />}></Route>
          <Route path="/account/series" element={<Tv />}></Route>
          <Route path="/account/series/:id" element={<Serie />}></Route>
          <Route path="/account/libros" element={<Libros />}></Route>
          <Route path="/eracc" element={<EliminarCuenta />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
