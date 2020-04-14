import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { ThemeContext } from "../../contexts/ThemeContext";
import Todos from "../../pages/todos/todos";
import { AuthContext } from "../../contexts/AuthContext";
import Login from "../../pages/login/login";
import "./base.css";

const BASE = (props) => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);
  const theme = isLight ? light : dark;
  return (
    <div className="todo__base" style={{ backgroundColor: theme.ui }}>
      <Navbar />
      <BrowserRouter>
        <Route exact path="/" component={isAuthenticated ? Todos : Login} />
        <Route exact path="/todos" component={isAuthenticated ? Todos : Login} />
      </BrowserRouter>
    </div>
  );
};

export default BASE;
