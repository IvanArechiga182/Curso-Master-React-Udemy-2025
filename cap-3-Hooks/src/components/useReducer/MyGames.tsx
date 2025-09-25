import styles from "../../styles/useReducerHook.module.css";
import { GameReducer, type Game } from "../../reducers/GameReducer";
import { useEffect, useReducer } from "react";
import {
  addGame,
  deleteGame,
  editGame,
} from "../../actionCreators/GameActions";
const init = () => {
  return JSON.parse(localStorage.getItem("games")!) || [];
};

const MyGames = () => {
  const [games, dispatch] = useReducer(GameReducer, [], init);

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const game: Game = {
      id: new Date().getTime(),
      title: (
        e.currentTarget.elements.namedItem("gameTitle") as HTMLInputElement
      )?.value,
      description: (
        e.currentTarget.elements.namedItem(
          "gameDescription"
        ) as HTMLTextAreaElement
      )?.value,
    };

    dispatch(addGame(game));

    e.currentTarget.reset();

    console.log(games);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteGame(id));
  };

  const handleEdit = (e: React.FocusEvent<HTMLInputElement>, id: number) => {
    const editedGame: Game = {
      id: id,
      title: e.target.value,
    };

    dispatch(editGame(editedGame));
  };

  return (
    <div>
      <h1>useReducer hook</h1>
      <h2>Estos son mis juegos favoritos</h2>

      <p>Numero de juegos disponibles: {games.length}</p>
      {games.length === 0 && <h3>No hay juegos, agrega uno</h3>}
      {games.map((game) => (
        <div key={game.id} className={styles.card}>
          <h3>{game.title}</h3>
          <p>{game.description}</p>
          <button
            onClick={() => handleDelete(game.id!)}
            className={styles.deleteButton}
          >
            Eliminar
          </button>
          <input
            type="text"
            placeholder="Editar"
            onBlur={(e) => handleEdit(e, game.id!)}
          />
        </div>
      ))}
      <h3>Agregar un juego a la lista</h3>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="gameTitle" placeholder="Titulo" required />
        <textarea
          name="gameDescription"
          id="gameDescription"
          placeholder="Descripcion"
          required
        ></textarea>
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
};

export default MyGames;
