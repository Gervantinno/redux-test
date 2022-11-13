import React from "react";
import { TodoState } from "../../types/todos";

type Props = {
  todo: TodoState;
  addTodo: () => void;
  deleteTodo: (id: number) => void;
};

const ToDosView: React.FC<Props> = ({ todo, addTodo, deleteTodo }: Props) => {
  return (
    <>
      {todo.todos.length > 0 && <p>Click on element to delete</p>}
      {todo.todos.map((todo) => (
        <p key={todo.id} onClick={() => deleteTodo(todo.id)}>
          {todo.text}
        </p>
      ))}
      <button onClick={addTodo}>Add todo</button>
    </>
  );
};

export default ToDosView;
