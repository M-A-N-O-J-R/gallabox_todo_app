import React, { useState } from "react";
import "./App.css";
import AddItem from "./components/add-item/add-item";
import CompletedItems from "./components/completed-items/completed-items";
import DisplayItems from "./components/display-items/display-items";
import { type Todo } from "./models/Todo";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedItems, setCompletedItems] = useState<Todo[]>([]);
  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    const newTodos = [...todos, { id: Math.floor(Math.random() * 100), todo }];
    setTodos(newTodos);
    setTodo(" ");
  };
  return (
    <div className="App box-border p-[30px] flex flex-col gap-7">
      <AddItem todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <DisplayItems
        todos={todos}
        setTodos={setTodos}
        completedItems={completedItems}
        setCompletedItems={setCompletedItems}
      />
      <CompletedItems
        todos={todos}
        setTodos={setTodos}
        completedItems={completedItems}
        setCompletedItems={setCompletedItems}
      />
    </div>
  );
};

export default App;
