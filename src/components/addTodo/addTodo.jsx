import React, { useContext, useState } from "react";
import CustomButton from "../customButton/CustomButton";
import { Typography } from "@material-ui/core";
import { ThemeContext } from "../../contexts/ThemeContext";
import { fireStore } from "../../firebase.utils";
import "./addTodo.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const { isLight, dark, light } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  const handleTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const addDocumentToFirestore = () => {
    const collection = fireStore.collection("todos");
    collection.doc().set({
      title: title,
      createdAt: new Date(),
    });
  };

  const clearForm = () => {
    setTitle("");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addDocumentToFirestore();
    clearForm();
  };

  return (
    <form className="add__todo--form" style={{ backgroundColor: theme.ui }}>
      <Typography
        className="todo__add--title"
        align="center"
        variant="h5"
        style={{ color: theme.text }}
      >
        Add New Task
      </Typography>
      <input
        type="text"
        className={`login__input ${isLight ? "light__input" : "dark__input"}`}
        placeholder="Todo name"
        onChange={handleTitle}
        name="title"
        autoComplete="off"
        value={title}
      />
      <CustomButton style={{ width: "50%" }} onClick={handleAdd}>
        Add Todo
      </CustomButton>
    </form>
  );
};

export default AddTodo;
