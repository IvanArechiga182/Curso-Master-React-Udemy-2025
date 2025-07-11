import Button from "../common/Button";
import styles from "../../styles/home/MainSection.module.css";
import SearchBar from "../common/SearchBar";
import MovieForm from "../home/MovieForm";

function MainSection() {
  return (
    <div className={styles.mainSection}>
      {/* Seccion principal de la pagina */}
      <section className={styles.content}>
        {/*Listado de las peliculas */}
        <article className={styles.movieItem}>
          <h3 className="title">Pelicula test 1</h3>
          <p className="movie-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            eligendi?
          </p>
          <div className={styles.movieActions}>
            <Button value="Editar" />
            <Button value="Borrar" />
          </div>
        </article>

        <article className={styles.movieItem}>
          <h3 className="title">Pelicula test 1</h3>
          <p className="movie-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            eligendi?
          </p>
          <div className={styles.movieActions}>
            <Button value="Editar" />
            <Button value="Borrar" />
          </div>
        </article>

        <article className={styles.movieItem}>
          <h3 className="title">Pelicula test 1</h3>
          <p className="movie-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            eligendi?
          </p>
          <div className={styles.movieActions}>
            <Button value="Editar" />
            <Button value="Borrar" />
          </div>
        </article>

        <article className={styles.movieItem}>
          <h3 className="title">Pelicula test 1</h3>
          <p className="movie-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            eligendi?
          </p>
          <div className={styles.movieActions}>
            <Button value="Editar" />
            <Button value="Borrar" />
          </div>
        </article>

        <article className={styles.movieItem}>
          <h3 className="title">Pelicula test 1</h3>
          <p className="movie-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            eligendi?
          </p>
          <div className={styles.movieActions}>
            <Button value="Editar" />
            <Button value="Borrar" />
          </div>
        </article>

        <article className={styles.movieItem}>
          <h3 className="title">Pelicula test 1</h3>
          <p className="movie-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            eligendi?
          </p>
          <div className={styles.movieActions}>
            <Button value="Editar" />
            <Button value="Borrar" />
          </div>
        </article>

        <article className={styles.movieItem}>
          <h3 className="title">Pelicula test 1</h3>
          <p className="movie-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            eligendi?
          </p>
          <div className={styles.movieActions}>
            <Button value="Editar" />
            <Button value="Borrar" />
          </div>
        </article>

        <article className={styles.movieItem}>
          <h3 className="title">Pelicula test 1</h3>
          <p className="movie-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            eligendi?
          </p>
          <div className={styles.movieActions}>
            <Button value="Editar" />
            <Button value="Borrar" />
          </div>
        </article>
      </section>
      {/* Barra lateral con buscador */}
      <aside className={styles.sideSearchBar}>
        <SearchBar />
        <MovieForm />
      </aside>
    </div>
  );
}

export default MainSection;
