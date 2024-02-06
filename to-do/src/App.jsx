import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMesage from "./components/WelcomeMessage";

function App() {
  const initialTodoItems = [
    // { date: "4-10-2024", name: "Buy Milk" },
    // { date: "4-10-2024", name: "Go to College" },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, dueDate) => {
    const newTodoItems = [...todoItems, { name: itemName, date: dueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`item added ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length <= 0 ? (
        <WelcomeMesage todoItems={todoItems}></WelcomeMesage>
      ) : null}

      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
