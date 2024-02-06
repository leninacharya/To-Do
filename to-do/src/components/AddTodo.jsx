import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handelDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handelAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container ">
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input
              className={styles.input}
              type="text"
              value={todoName}
              onChange={handelNameChange}
              name=""
              id=""
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-4">
            <input
              className={styles.input}
              value={dueDate}
              onChange={handelDateChange}
              type="date"
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success todo-btn"
              onClick={handelAddButtonClicked}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
