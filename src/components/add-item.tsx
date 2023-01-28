import React from "react";

interface AddItemProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<EventTarget>) => void;
}

const AddItem: React.FC<AddItemProps> = ({
  todo,
  setTodo,
  handleSubmit,
}: AddItemProps) => {
  return (
    <div className=" flex flex-col items-start justify-center gap-3">
      <div className=" w-[300px] border-b-2 border-gray-800 flex justify-start items-center font-p_sans font-semibold text-sm">
        <p>ADD ITEM</p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <input
          type={"text"}
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Enter The Todo Here"
          className="rounded-[4px] w-64 h-[30px] p-3 border  text-sm text-gray-500  "
        />
        <p className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer font-medium" onClick={handleSubmit}>
          Add
        </p>
      </div>
    </div>
  );
};

export default AddItem;
