export type Game = {
  id?: number;
  title: string;
  description?: string;
};

export type Action =
  | { type: "ADD_GAME"; payload: Game }
  | { type: "DELETE_GAME"; payload: number }
  | { type: "EDIT_GAME"; payload: Game };

export const GameReducer = (state: Game[], action: Action) => {
  switch (action.type) {
    case "ADD_GAME":
      return [...state, action.payload];
    case "DELETE_GAME":
      return state.filter((game) => game.id !== action.payload);
    case "EDIT_GAME": {
      const index = state.findIndex((game) => game.id === action.payload.id);
      state[index] = action.payload;
      console.log(state);
      return [...state];
    }
    default:
      return state;
  }
};
