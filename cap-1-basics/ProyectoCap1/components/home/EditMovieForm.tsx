import Button from "../common/Button";
import styles from "../../styles/Home/EditMovieForm.module.css";
import type { MovieForm } from "../../types/MovieForm";

type Props = {
  movie: MovieForm;
  getMovies: () => MovieForm[] | undefined;
  isFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNewMovieState: React.Dispatch<React.SetStateAction<MovieForm[]>>;
};
const EditMovieForm = ({
  movie,
  getMovies,
  setNewMovieState,
  isFormOpen,
}: Props) => {
  const handleMovieEdit = (e: React.FormEvent<HTMLFormElement>, movieId) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const movie: MovieForm = {
      id: movieId,
      title: form.get("title") as string,
      description: form.get("description") as string,
    };
    const movies = getMovies();
    const movieIndex = movies?.findIndex((movie) => movie.id === movieId);
    console.log(movieIndex);
    if (movies && movieIndex !== -1) {
      const index = movieIndex != null ? movieIndex : 0;
      movies[index] = movie;
      console.log(movie);
      localStorage.setItem("pelis", JSON.stringify(movies));
      console.log("Pelicula actualizada: ", movie);
      setNewMovieState(movies);
      isFormOpen(false);
    } else {
      console.warn("Pelicula no encontrada");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3>Editar información</h3>
      <form onSubmit={(e) => handleMovieEdit(e, movie.id)}>
        <input type="text" name="title" id="title" defaultValue={movie.title} />
        <textarea
          name="description"
          id="description"
          defaultValue={movie.description}
        ></textarea>
        <Button value="Editar" />
      </form>
    </div>
  );
};

export default EditMovieForm;
