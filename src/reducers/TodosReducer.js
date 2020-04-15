export const TodosReducer = (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return [...action.payload];
    default:
      return [...state];
  }
};
