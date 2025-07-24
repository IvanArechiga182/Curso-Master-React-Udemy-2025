import Button from "../common/Button";
import styles from "../../styles/Home/MovieForm.module.css";
import type { MovieForm } from "../../types/MovieForm";
import { useEffect, useState } from "react";

type Props = {
  setMoviesList: React.Dispatch<React.SetStateAction<MovieForm[]>>;
};

function MovieForm({ setMoviesList }: Props) {
  const [FormMovieData, setFormMovieData] = useState<MovieForm>({
    id: 0,
    title: "",
    description: "",
  });
  const [message, setMessage] = useState<string>("");
  const [movies, setMovies] = useState<MovieForm[]>(() => {
    const saved = localStorage.getItem("pelis");
    return saved ? JSON.parse(saved) : [];
  });
  const handleFormData = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormMovieData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmitMovieForm = (e: React.FormEvent) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, FormMovieData]);
    setMoviesList((elements) => {
      return [...elements, FormMovieData];
    });
    FormMovieData.id = Number(new Date().getTime());
    showCreatedElement();
    setFormMovieData({
      id: 0,
      title: "",
      description: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("pelis", JSON.stringify(movies));
  }, [movies]);

  const showCreatedElement = () => {
    setMessage(`Se agrego ${FormMovieData.title}`);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div className={styles.movieFormContainer}>
      <h3 className="title">Agregar pelicula</h3>
      {message != "" && (
        <strong className={styles.addedMessage}>{message}</strong>
      )}
      <form className={styles.movieForm} onSubmit={handleSubmitMovieForm}>
        <input
          type="text"
          name="title"
          id="title"
          value={FormMovieData.title}
          onChange={handleFormData}
          placeholder="Pelicula"
          required
        />
        <textarea
          name="description"
          id="description"
          value={FormMovieData.description}
          onChange={handleFormData}
          placeholder="Descripcion..."
          required
        ></textarea>
        <Button value="Enviar" />
      </form>
    </div>
  );
}

export default MovieForm;
