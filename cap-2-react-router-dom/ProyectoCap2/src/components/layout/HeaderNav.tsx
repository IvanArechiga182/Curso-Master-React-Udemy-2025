import { NavLink } from "react-router-dom";
import styles from "../../styles/HeaderNav.module.css";
const HeaderNav = () => {
  return (
    <header>
      <div className={styles.logo}>
        <span>IA</span>
        <h3>Ivan Arechiga</h3>
      </div>
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
              to="/portfolio"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/curriculum"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Curriculum
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
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
