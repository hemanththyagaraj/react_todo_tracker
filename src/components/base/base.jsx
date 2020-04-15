import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { ThemeContext } from "../../contexts/ThemeContext";
import Todos from "../../pages/todos/todos";
import { AuthContext } from "../../contexts/AuthContext";
import TodosContextProvider from "../../contexts/TodosContext";
import Login from "../../pages/login/login";
import "./base.css";
import AlertContextProvider from "../../contexts/AlertContext";

const BASE = (props) => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);
  const theme = isLight ? light : dark;

  return (
    <div className="todo__base" style={{ backgroundColor: theme.ui }}>
      <Navbar />
      <BrowserRouter>
        <TodosContextProvider>
          <AlertContextProvider>
            <Route exact path="/" component={isAuthenticated ? Todos : Login} />
            <Route
              exact
              path="/todos"
              component={isAuthenticated ? Todos : Login}
            />
          </AlertContextProvider>
        </TodosContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default BASE;
