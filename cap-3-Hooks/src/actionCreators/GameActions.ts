import { type Game, type Action } from "../reducers/GameReducer";

export const addGame = (game: Game): Action => ({
  type: "ADD_GAME",
  payload: game,
});

export const deleteGame = (id: number): Action => ({
  type: "DELETE_GAME",
  payload: id!,
});

export const editGame = (editedGame: Game): Action => ({
  type: "EDIT_GAME",
  payload: editedGame,
});
