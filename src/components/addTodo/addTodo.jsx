import React, { useContext } from "react";
import CustomButton from "../customButton/CustomButton";
import { ThemeContext } from "../../contexts/ThemeContext";
import './addTodo.css'

const AddTodo = () => {
  const { isLight } = useContext(ThemeContext);
  return (
    <form className='add__todo--form'>
      <input
        type="text"
        className={`login__input ${isLight ? "light__input" : "dark__input"}`}
        placeholder="Todo name"
      />
      <CustomButton style={{width: '50%'}}>Add Todo</CustomButton>
    </form>
  );
};

export default AddTodo;
