import React, { useContext } from "react";
import CustomButton from "../customButton/CustomButton";
import { Typography } from "@material-ui/core";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./addTodo.css";

const AddTodo = () => {
  const { isLight, dark, light } = useContext(ThemeContext);
  const theme = isLight ? light: dark
  return (
    <form className="add__todo--form" style={{ backgroundColor: theme.ui }}>
      <Typography align="center" variant="h5" style={{ color: theme.text }}>
        Add New Task
      </Typography>
      <input
        type="text"
        className={`login__input ${isLight ? "light__input" : "dark__input"}`}
        placeholder="Todo name"
      />
      <CustomButton style={{ width: "50%" }}>Add Todo</CustomButton>
    </form>
  );
};

export default AddTodo;
