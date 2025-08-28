import styles from "../../styles/Portfolio.module.css";
import { Link } from "react-router-dom";
import { projects } from "../../data/data";

type Props = {
  maxProjects?: number;
};

const ProjectsList = ({ maxProjects }: Props) => {
  return (
    <div className={styles.projectsDisplay}>
      {projects.slice(0, maxProjects).map((project) => (
        <article key={project.id} className={styles.workItem}>
          <h2>
            <Link to={`/project/${project.id}`} className={styles.projectTitle}>
              {project.title}
            </Link>
          </h2>
          <div className={styles.mask}>
            <img
              src={`/images/${project.id}.jpg`}
              alt="Imagen-referencia-Proyecto"
            />
          </div>
          <h3>{project.category}</h3>
          <p>{project.description}</p>
          <p>
            <strong>{project.tecnologies.join(", ")}</strong>
          </p>
        </article>
      ))}
    </div>
  );
};

export default ProjectsList;
