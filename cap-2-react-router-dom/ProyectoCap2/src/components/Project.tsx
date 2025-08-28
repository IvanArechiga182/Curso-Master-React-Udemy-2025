import { useParams } from "react-router-dom";
import styles from "../styles/Project.module.css";
import { useEffect, useState } from "react";
import { projects } from "../data/data";
import type { Projects } from "../types/Projects";
const Project = () => {
  const [doneProjects, setDoneProjects] = useState<Projects>({
    id: "",
    title: "",
    url: "",
    description: "",
    tecnologies: [],
    category: "",
  });
  const params = useParams();

  useEffect(() => {
    const project = projects.filter((project) => project.id === params.id);
    setDoneProjects(project[0]);
  }, [params.id]);

  console.log(doneProjects);
  return (
    <div>
      <img
        src={`/images/${doneProjects.id}.jpg`}
        alt="project-reference-image"
        className={styles.projectImage}
      />
      <p>{doneProjects.description}</p>
      <p>
        <strong>Category: </strong>
        {doneProjects.category}
      </p>
      <p>
        <strong>Tecnologias: </strong>
        {doneProjects.tecnologies.join(", ")}
      </p>
    </div>
  );
};

export default Project;
