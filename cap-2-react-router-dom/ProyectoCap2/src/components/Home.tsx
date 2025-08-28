import styles from "../styles/Home.module.css";
import "../index.css";
import { Link } from "react-router-dom";
import ProjectsList from "./layout/ProjectsList";
const Home = () => {
  return (
    <div className={styles.home}>
      <h2>
        Hola! soy <strong>Iván Aréchiga</strong>, un desarrollador web
        apasionado por crear experiencias <strong>digitales innovadoras</strong>{" "}
        y <strong> funcionales</strong>. Bienvenido a mi portafolio, donde
        podrás explorar mis proyectos, habilidades y servicios. ¡Gracias por
        visitarlo!
      </h2>

      <h2 className={styles.greeting}>
        Estaré encantado de poder ayudarte a crear tu sitio o app web, tener más
        visibilidad y hacer crecer tu negocio.{" "}
        <Link to="/contact">Contacta conmigo</Link>!
      </h2>

      <section className={styles.lastProjects}>
        <h2 className="heading">Proyectos recientes</h2>
        <p>Aquí te presento algunos de mis proyectos realizados:</p>
        <div className={styles.projects}></div>
      </section>

      <ProjectsList maxProjects={3} />
    </div>
  );
};

export default Home;
