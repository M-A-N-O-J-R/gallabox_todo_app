import React, { useState } from "react";
import { Todo } from "../models/Todo";
import DisplayItem from "./display-item";

interface CompletedItemsProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const CompletedItems: React.FC<CompletedItemsProps> = ({ todos, setTodos }) => {
  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo: Todo) => id !== todo.id);
    setTodos(newTodos);
  };
  const handleSave = (task: Todo) => {
    const newTodos = todos.filter((todo: Todo) => task.id !== todo.id);
    setTodos([...newTodos, task]);
  };
  return (
    <div className=" flex flex-col items-start justify-center gap-3">
      <div className=" w-[300px] border-b-2 border-gray-800 flex justify-start items-center font-p_sans font-semibold text-sm">
        <p>TODO</p>
      </div>
      {todos.length > 0 ? (
        todos.map((todo: Todo) => (
          <DisplayItem
            todo={todo}
            key={todo.id}
            handleDelete={handleDelete}
            handleSave={handleSave}
          />
        ))
      ) : (
        <div className="flex justify-center items-center px-20 py-14">
          <p className="text-gray-500">No Items to display</p>
        </div>
      )}
    </div>
  );
};

export default CompletedItems;
