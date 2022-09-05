import Home from "./components/Home";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import EliminarCuenta from "./components/EliminarCuenta";
import Error404 from "./components/Error404";
import "./App.css";
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
          <Route path="/eracc" element={<EliminarCuenta />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
