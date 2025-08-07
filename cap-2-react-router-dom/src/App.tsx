import { BrowserRouter, NavLink } from "react-router-dom";
import PrincipalRouter from "./routes/PrincipalRouter";
import styles from "./App.module.css";
function App() {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Articulos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/panel"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Panel de control
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />

      <PrincipalRouter />
    </BrowserRouter>
  );
}

export default App;
