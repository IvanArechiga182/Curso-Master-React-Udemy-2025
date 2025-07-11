import Button from "../common/Button";
import styles from "../../styles/Home/MovieForm.module.css";
function MovieForm() {
  return (
    <div className={styles.movieFormContainer}>
      <h3 className="title">Agregar pelicula</h3>
      <form className={styles.movieForm}>
        <input
          type="text"
          name="movie-name"
          id="movie-name"
          placeholder="Pelicula"
        />
        <textarea
          name="movie-description"
          id="movie-description"
          placeholder="Descripcion..."
        ></textarea>
        <Button value="Enviar" />
      </form>
    </div>
  );
}

export default MovieForm;
