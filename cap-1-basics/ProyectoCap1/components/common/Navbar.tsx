import { Link } from "react-router-dom";
import styles from "../../styles/common/Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      {/*Cabecera de la pagina*/}
      <header className={styles.headerTop}>
        <div className={styles.logo}>
          <div className={styles.play}></div>
        </div>
        <h1>MisPelis</h1>
      </header>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <Link to="/">Inicio</Link>
          <Link to="/movies">Peliculas</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contacto</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
