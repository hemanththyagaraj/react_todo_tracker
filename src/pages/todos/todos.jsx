import React, { useEffect, useContext } from "react";
import { Grid } from "@material-ui/core";
import AddTodo from "../../components/addTodo/addTodo";
import TodoList from "../../components/todoList/TodoList";
import { fireStore } from "../../firebase.utils";
import { TodosContext } from "../../contexts/TodosContext";
import "./todos.css";

const Todos = () => {
  const { dispatch } = useContext(TodosContext);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const collections = fireStore.collection("todos");
    const docs = collections.onSnapshot((snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      dispatch({ type: "GET_TODOS", payload: docs });
    });
  };

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
