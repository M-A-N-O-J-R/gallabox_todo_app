import React, { useState, useEffect } from "react";
import "./App.css";
import AddItem from "./components/add-item/add-item";
import CompletedItems from "./components/completed-items/completed-items";
import DisplayItems from "./components/display-items/display-items";
import { type Todo } from "./models/Todo";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedItems, setCompletedItems] = useState<Todo[]>([]);



  
  useEffect(() => {
    fetch("http://localhost:3000/getAll", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
      });


      fetch("http://localhost:3000/getAllCompleted", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        // eslint-disable-next-line @typescript-eslint/promise-function-async
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCompletedItems(data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 100),
      todo,
    };
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTodo(" ");
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
      .then((res) => {console.log(res);})
      .catch((err) => {
        console.log(err.message);
      });
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
