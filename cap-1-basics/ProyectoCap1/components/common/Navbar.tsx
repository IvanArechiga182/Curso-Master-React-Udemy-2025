import styles from "../../styles/common/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      {/*Cabecera de la pagina*/}
      <header>
        <h1>MisPelis</h1>
      </header>
      <nav className="navbar">
        <ul className={styles.navList}>
          <li className="list-item">Inicio</li>
          <li className="list-item">Peliculas</li>
          <li className="list-item">Blog</li>
          <li className="list-item">Contacto</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
