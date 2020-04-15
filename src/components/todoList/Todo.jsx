import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AlertContext } from "../../contexts/AlertContext";
import { deleteDocument } from "../../firebase.utils";
import "./TodoList.css";

const Todo = (props) => {
  const { id } = props;
  const { isLight } = useContext(ThemeContext);
  const { success, error } = useContext(AlertContext)
  const { title } = props;

  const deleteDoc = (event) => {
    const id = event.target.attributes.getNamedItem('data-name').value
    deleteDocument(id ,success, error)
  };

  return (
    <div
      data-name={`${id}`}
      id={id}
      className={`todo ${isLight ? "todo__light" : "todo__dark"}`}
      onClick={deleteDoc}
    >
      <p data-name={`${id}`} className="todo__name">
        {title}
      </p>
    </div>
  );
};

export default Todo;
