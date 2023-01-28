import React, { useState } from "react";
import { Todo } from "../models/Todo";


interface DisplayItemProps {
  todo: Todo;
}
const DisplayItem:React.FC<DisplayItemProps> = ({todo}) => {
  const [edit, setEdit] = useState<boolean>(true);
  return (
    <div className=" flex flex-col items-start justify-center gap-3">
      {!edit ? (
        <div className="flex gap-5 justify-center items-center">
          <input type="checkbox" />
          <input
            value = {todo.todo}
            type={"text"}
            className="rounded-[4px] w-48 h-[30px] p-3 border text-sm text-gray-500 "
          />
          <p
            className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-medium"
            onClick={(e: any) => {
              setEdit(true);
            }}
          >
            Save
          </p>
          <p className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-medium">
            Delete
          </p>
        </div>
      ) : (
        <div className="flex gap-5 justify-center items-center">
          <input type="checkbox" />
          <p className="rounded-[4px] w-48 h-[30px] p-1 text-sm text-gray-500 border-transparent ">
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
          <p className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-medium">
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayItem;
