import React, { useState } from "react";
import { Todo } from "../models/Todo";
import CompletedItem from "./compled-item";
import DisplayItem from "./display-item";

interface CompletedItemsProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedItems: Todo[];
  setCompletedItems: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const CompletedItems: React.FC<CompletedItemsProps> = ({
  todos,
  setTodos,
  completedItems,
  setCompletedItems,
}) => {
  const handleDelete = (id: number) => {
    const newTodos = completedItems.filter((todo: Todo) => id !== todo.id);
    setCompletedItems(newTodos);
  };
  const handleSave = (task: Todo) => {
    const newTodos = completedItems.filter((todo: Todo) => task.id !== todo.id);
    setCompletedItems([...newTodos, task]);
  };
  const handleChange = (task: Todo) => {
    handleDelete(task.id);
    setTodos([...todos, task]);
  };
  return (
    <div className=" flex flex-col items-start justify-center gap-3">
      <div className=" w-[300px] border-b-2 border-gray-800 flex justify-start items-center font-p_sans font-semibold text-sm">
        <p>COMPLETED</p>
      </div>
      {completedItems.length > 0 ? (
        completedItems.map((todo: Todo) => (
          <CompletedItem
            todo={todo}
            key={todo.id}
            handleDelete={handleDelete}
            handleSave={handleSave}
            handleChange={handleChange}
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
