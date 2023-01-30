import React from "react";
import { type Todo } from "../../models/Todo";
import CompletedItem from "../completed-item/compled-item";

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
  const handleDelete = (id: number): void => {
    const newTodos = completedItems.filter((todo: Todo) => id !== todo.id);
    setCompletedItems(newTodos);
    fetch(`http://localhost:3000/delete${id}`, {
      method: "delete",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleSave = (task: Todo): void => {
    const newTodos = completedItems.filter((todo: Todo) => task.id !== todo.id);
    setCompletedItems([...newTodos, task]);
    fetch(`http://localhost:3000/update${task.id}`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: task.id,
        todo: task.todo,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleChange = (task: Todo): void => {
    handleDelete(task.id);
    setTodos([...todos, task]);
    fetch("http://localhost:3000/submit", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: task.id,
        todo: task.todo,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div
      data-test="completed-items"
      className=" flex flex-col items-start justify-center gap-3"
    >
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
