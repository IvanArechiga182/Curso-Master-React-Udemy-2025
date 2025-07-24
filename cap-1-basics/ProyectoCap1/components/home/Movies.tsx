import Button from "../common/Button";
import styles from "../../styles/Home/MainSection.module.css";
import { useEffect, useState } from "react";
import { MovieForm } from "../../types/MovieForm";
import EditMovieForm from "./EditMovieForm";

type Props = {
  moviesList: MovieForm[];
  setMoviesList: React.Dispatch<React.SetStateAction<MovieForm[]>>;
};
function Movies({ moviesList, setMoviesList }: Props) {
  const [edit, setEdit] = useState<number>(0);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const storage = localStorage.getItem("pelis");
    if (storage) {
      const movies = JSON.parse(storage);
      setMoviesList(movies);
      console.log(movies);
      return movies;
    }
  };

  const deleteMovie = (movieId: number) => {
    const savedMovies = getMovies();
    if (savedMovies) {
      const newMovies = savedMovies.filter((movie) => movie.id !== movieId);
      setMoviesList(newMovies);
      localStorage.setItem("pelis", JSON.stringify(newMovies));
    }
  };

  const editMovie = (movieId: number) => {
    setEdit(movieId);
    setIsEditOpen((prev) => !prev);
  };

  return (
    <>
      {moviesList.length != 0 ? (
        moviesList.map((movie) => {
          return (
            <article
              className={`${styles.movieItem} ${
                edit === movie.id ? styles.expanded : ""
              }`}
              key={movie.id}
            >
              <h3 className="title">{movie.title}</h3>
              <p className={styles.movieDescription}>{movie.description}</p>
              <br />
              <div className={styles.movieActions}>
                <Button
                  value="Editar"
                  variant="edit"
                  onClick={() => {
                    editMovie(movie.id);
                  }}
                />
                <Button
                  value="Borrar"
                  variant="delete"
                  onClick={() => deleteMovie(movie.id)}
                />
              </div>
              {edit === movie.id && isEditOpen === true && (
                <EditMovieForm
                  movie={movie}
                  getMovies={getMovies}
                  setNewMovieState={setMoviesList}
                  isFormOpen={setIsEditOpen}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
}

export default Movies;
