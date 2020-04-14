import React from "react";
import Todo from "./Todo";

const TodoList = () => {
  const todos = ["hemanth", "pramod"];
  return (
    <div>
      {todos.map((todo) => (
        <Todo />
      ))}
    </div>
  );
};

export default TodoList;
