import React, { useContext } from "react";
import { Typography, Grid, Card } from "@material-ui/core";
import { ThemeContext } from "../../contexts/ThemeContext";
import AddTodo from "../../components/addTodo/addTodo";
import "./todos.css";
import TodoList from "../../components/todoList/TodoList";

const Todos = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  return (
    <div className="todo__page--container">
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <AddTodo />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <TodoList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Todos;
