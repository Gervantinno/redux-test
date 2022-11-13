import React, { useEffect } from "react";
import ToDosView from "./ToDos.view";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchTodoAction } from "../../redux/actions/fetchTodoAction";

type Props = {};

const ToDos: React.FC<Props> = () => {
  const state = useAppSelector((state) => state.todoReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodoAction());
  }, []);

  return <ToDosView state={state} />;
};

export default ToDos;
