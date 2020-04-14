import React, { useContext } from "react";
import "./TodoList.css";
import { ThemeContext } from "../../contexts/ThemeContext";

const Todo = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <div className={`todo ${isLight ? "todo__light" : "todo__dark"}`}>
      <p className='todo__name'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Todo;
