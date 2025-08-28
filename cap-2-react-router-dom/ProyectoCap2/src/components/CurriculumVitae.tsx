import "../index.css";
import styles from "../styles/CurriculumVitae.module.css";
const CurriculumVitae = () => {
  return (
    <div className="page">
      <section className={styles.descriptionContainer}>
        <h2>Objetivo profesional</h2>
        <hr />
        <article className={styles.decription}>
          <p>
            Ingeniero en Software en formación con experiencia como
            desarrollador fullstack, especializado en APIs REST con .NET
            Framework y SQLServer. Apasionado por las metodologías ágiles, el
            desarrollo web FullStack y la integración continua. Busco contribuir
            al desarrollo de software de alta calidad y mejorar la experiencia
            del usuario a través de soluciones innovadoras.
          </p>
        </article>
      </section>
      <section className={styles.descriptionContainer}>
        <h2>Experiencia profesional</h2>
        <hr />
        <article className={styles.decription}>
          <h2> Practicante de desarrollo web Fullstack</h2>
          <p>dmX - Enero 2024 - Actualidad</p>
          <p>
            Colaboración activa en el desarrollo de soluciones backend
            inteligentes para microservicios consumidos por plataformas
            utilizadas por clientes y analistas en sucursales.
          </p>
          <ul>
            <li>
              Desarrollo de APIs REST con .NET Framework, integrando servicios
              tanto internos como de terceros.
            </li>
            <li>
              Implementación de pipelines CI/CD y despliegues de App Services
              mediante Azure DevOps.
            </li>
            <li>
              Control de versiones y gestión de tareas a través de repositorios
              y tableros en Azure.
            </li>
            <li>
              Creación y optimización de procedimientos almacenados para mejorar
              el rendimiento de los servicios internos.
            </li>
            <li>
              Participación en equipos multidisciplinarios bajo metodologías
              ágiles (Scrum), colaborando en la planificación y seguimiento
              desprints.
            </li>
          </ul>
        </article>
      </section>
      <section className={styles.descriptionContainer}>
        <h2>Cursos completados y en curso</h2>
        <hr />
        <div className={styles.coursesListContainer}>
          <article>
            <h3>Completados</h3>
            <ul>
              <li>PYTHON TOTAL - Programador experto en 16 días, (Udemy)</li>
              <li>
                MASTER EN JAVASCRIPT: (JS, jQuery, MongoDB, React y Node JS),
                (Udemy)
              </li>
            </ul>
          </article>
          <article>
            <h3>En curso</h3>
            <ul>
              <li>
                Desarrollo web completo: HTML5, CSS, JS, AJAX y PHP (encurso,
                Udemy)
              </li>
              <li>
                MASTER EN REACT: Hooks, MERN Stack y JWT, (en curso,Udemy)
              </li>
            </ul>
          </article>
        </div>
      </section>
      <section className={styles.descriptionContainer}>
        <h2>Educación</h2>
        <hr />
        <article className={styles.decription}>
          <h3>Ingeniero en Tecnología de Software</h3>
          <p>
            Facultad de Ingeniería Mecánica y Eléctrica, Universidad <br />
            Autónoma de Nuevo León (Agosto 2020 - Diciembre 2025)
          </p>
        </article>
      </section>
      <section className={styles.descriptionContainer}>
        <h2>Habilidades</h2>
        <hr />
        <ul>
          <li>
            <strong>Backend:</strong>.NET Framework, C#, SQL Server, MongoDB
            (mongoose), NodeJS(Express.js){" "}
          </li>
          <li>
            <strong>DevOps:</strong>Azure DevOps, CI/CD, Git{" "}
          </li>
          <li>
            <strong>Frontend: </strong>HTML, CSS, JavaScript, React (en
            aprendizaje)
          </li>
          <li>
            <strong>Metodologías: </strong>Scrum, trabajo en equipo ágil
          </li>
        </ul>
      </section>
      <section className={styles.descriptionContainer}>
        <h2>Idiomas</h2>
        <hr />
        <div className={styles.listContainer}>
          <ul>
            <li>
              <strong>Inglés: </strong>Intermedio - Avanzado (B1 - C2)
            </li>
          </ul>
          <ul>
            <li>
              <strong>Español: </strong>nativo
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CurriculumVitae;
