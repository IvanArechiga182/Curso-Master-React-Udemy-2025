import { useState } from "react";
import styles from "../../styles/home/MainSection.module.css";
import SearchBar from "../common/SearchBar";
import MovieForm from "../home/MovieForm";
import Movies from "./Movies";

function MainSection() {
  const [movieList, setMovieList] = useState<MovieForm[]>([]);

  return (
    <div className={styles.mainSection}>
      {/* Seccion principal de la pagina */}
      <section className={styles.content}>
        <Movies moviesList={movieList} setMoviesList={setMovieList} />
      </section>
      {/* Barra lateral con buscador */}
      <aside className={styles.sideSearchBar}>
        <SearchBar movieList={movieList} setMovieList={setMovieList} />
        <MovieForm setMoviesList={setMovieList} />
      </aside>
    </div>
  );
}

export default MainSection;
