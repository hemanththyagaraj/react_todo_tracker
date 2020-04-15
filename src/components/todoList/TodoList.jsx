import React from "react";
import Todo from "./Todo";
import { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./TodoList.css";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  const { isLight } = useContext(ThemeContext);
  return (
    <div>
      {todos && todos.length ? (
        todos.map((todo) => {
          return <Todo key={todo.id} {...todo} />;
        })
      ) : (
        <h1 className={`no__todos ${isLight ? "color__light" : "color__dark"}`}>
          Free time! No todos found
        </h1>
      )}
    </div>
  );
};

export default TodoList;
