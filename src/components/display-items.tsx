import React, { useState } from "react";
import { Todo } from "../models/Todo";
import DisplayItem from "./display-item";

interface DisplayItemsProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const DisplayItems: React.FC<DisplayItemsProps> = ({ todos, setTodos }) => {
  return (
    <div className=" flex flex-col items-start justify-center gap-3">
      <div className=" w-[300px] border-b-2 border-gray-800 flex justify-start items-center font-p_sans font-semibold text-sm">
        <p>TODO</p>
      </div>
      {todos.map((todo: Todo) => (
        <DisplayItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default DisplayItems;
