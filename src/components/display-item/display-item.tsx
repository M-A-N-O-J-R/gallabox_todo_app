import React, { useState } from "react";
import { type Todo } from "../../models/Todo";

interface DisplayItemProps {
  todo: Todo;
  handleDelete: (todo: Todo) => void;
  handleSave: (todo: Todo) => void;
  handleChange: (todo: Todo) => void;
}
const DisplayItem: React.FC<DisplayItemProps> = ({
  todo,
  handleDelete,
  handleSave,
  handleChange,
}) => {
  const [edit, setEdit] = useState<boolean>(true);
  const [task, setTask] = useState<Todo>(todo);
  const [checked, setChecked] = React.useState(false);
  const handleChangeSatus = (task: Todo): void => {
    setChecked(!checked);
    handleChange(task);
  };
  return (
    <div
      data-test="display-item"
      className=" flex flex-col items-start justify-center gap-3"
    >
      {!edit ? (
        <div className="flex gap-5 justify-center items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              handleChangeSatus(task);
            }}
          />
          <input
            value={task.todo}
            onChange={(e) => {
              setTask({ id: todo.id, todo: e.target.value });
            }}
            type={"text"}
            className="rounded-[4px] w-48 h-[30px] p-1 border text-sm text-gray-500 "
          />
          <p
            className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-medium"
            onClick={(e: any) => {
              setEdit(true);
              handleSave(task);
            }}
          >
            Save
          </p>
          <p
            className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-medium"
            onClick={() => {
              console.log(todo.id);
              handleDelete(todo);
            }}
          >
            Delete
          </p>
        </div>
      ) : (
        <div className="flex gap-5 justify-center items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              handleChangeSatus(task);
            }}
          />
          <p className="rounded-[4px] w-48 h-[30px] p-1 text-sm font-medium text-gray-500 border-transparent ">
            {todo.todo}
          </p>

          <p
            className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-medium"
            onClick={(e: any) => {
              setEdit(false);
            }}
          >
            Edit
          </p>
          <p
            onClick={() => {
              console.log(todo.id);
              handleDelete(todo);
            }}
            className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-medium"
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayItem;
