import React from "react";
import ToDosView from "./ToDos.view";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  addTodoAction,
  deleteTodoAction,
} from "../../redux/reducers/todoReducer";

type Props = {};

const ToDos: React.FC<Props> = () => {
  const state = useTypedSelector((state) => state.todo);
  const dispatch = useDispatch();

  function addTodo() {
    const text = prompt("Inset the text of todo");
    if (!text) {
      alert("You cannot enter empty string");
      return;
    }
    dispatch(addTodoAction(text));
  }

  function deleteTodo(id: number) {
    dispatch(deleteTodoAction(id));
  }

  return <ToDosView todo={state} addTodo={addTodo} deleteTodo={deleteTodo} />;
};

export default ToDos;
