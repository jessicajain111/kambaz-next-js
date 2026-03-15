"use client"
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const { todos } = useSelector((state: RootState) => state.todosReducer);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className="btn btn-primary mb-2" onClick={addElement}>
        Add Element
      </button>
      <ul className="list-group mb-3">
        {array.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {item}
            <button className="btn btn-danger btn-sm"
              onClick={() => deleteElement(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h3>Todos from Redux</h3>
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li key={todo.id} className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}