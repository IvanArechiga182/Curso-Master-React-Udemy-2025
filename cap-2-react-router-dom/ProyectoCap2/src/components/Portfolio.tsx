import styles from "../styles/Portfolio.module.css";
import ProjectsList from "./layout/ProjectsList";
const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h1>Portfolio</h1>
      <ProjectsList />
    </div>
  );
};

export default Portfolio;
