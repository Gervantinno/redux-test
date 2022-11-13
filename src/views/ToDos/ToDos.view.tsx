import React from "react";
import { TodoState } from "../../types/todos";

type Props = {
  state: TodoState;
};

const ToDosView: React.FC<Props> = ({ state }: Props) => {
  if (state.error !== "") return <p>{state.error}</p>;

  if (state.isLoading) return <p>Todos are loading</p>;

  return (
    <>
      {state.todos.map((todo) => (
        <p key={todo.id}>{JSON.stringify(todo)}</p>
      ))}
    </>
  );
};

export default ToDosView;
