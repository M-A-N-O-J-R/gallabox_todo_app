import { useState } from "react";
import "./App.css";
import AddItem from "./components/add-item";
import DisplayItems from "./components/display-items";
import { Todo } from "./models/Todo";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleSubmit = (e:React.FormEvent<EventTarget>) =>
  {
    e.preventDefault();
    let newTodos: Todo[];
    newTodos=[...todos,{id:Math.floor(Math.random()*100),todo:todo}];
    setTodos(newTodos);
    setTodo('');
  }
  return (
    <div className="App box-border p-[30px] flex flex-col gap-7">
      <AddItem todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <DisplayItems todos={todos} setTodos={setTodos} />
      
    </div>
  );
};

export default App;
