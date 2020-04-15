import React, { createContext, useReducer } from "react";
import { TodosReducer } from "../reducers/TodosReducer";

export const TodosContext = createContext();

const TodosContextProvider = (props) => {
  const [todos, dispatch] = useReducer(TodosReducer, []);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
