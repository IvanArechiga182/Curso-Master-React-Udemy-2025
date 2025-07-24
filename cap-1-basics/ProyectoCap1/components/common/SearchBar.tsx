import Button from "../common/Button";
import styles from "../../styles/common/SearchBar.module.css";
import React, { useState } from "react";
import { MovieForm } from "../../types/MovieForm";
type Props = {
  movieList: MovieForm[];
  setMovieList: React.Dispatch<React.SetStateAction<MovieForm[]>>;
};

export default function SearchBar({ movieList, setMovieList }: Props) {
  const [query, setQuery] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);

  const searchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const search = e.target.value;
    setQuery(search);

    let foundMovies = movieList.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
    //Actualizar listado con lo que se ha filtrado

    setTimeout(() => {
      if (search.length <= 1) {
        const storage = localStorage.getItem("pelis");
        if (storage) {
          foundMovies = JSON.parse(storage);
          setNotFound(true);
        }
      } else {
        setNotFound(false);
      }
      setMovieList(foundMovies);
    }, 400);
  };

  return (
    <div className={styles.searchBar}>
      <h3>Buscador</h3>
      {notFound === true && query.length > 1 && (
        <span className={styles.notFound}>
          No se ha encontrado una coincidencia
        </span>
      )}
      <form>
        <input
          type="text"
          placeholder="Buscar"
          name="searchBar"
          autoComplete="off"
          value={query}
          onChange={searchMovie}
        />
        <Button value={"Buscar"} />
      </form>
    </div>
  );
}
