import { useReducer, useState } from "react"
import "../css/TodoRe.css"

// 1. Initial action type
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

//2 initial action function
const addTodo = (text) => {
      return {
            type: ADD_TODO,
            payload: text,
      }
}

const removeTodo = (index) => {
      return {
            type: REMOVE_TODO,
            payload: index,
      }
}

//3. define reducer func
const todos = [];

const reducer = (prevState, action) => {
      switch (action.type) {
            case ADD_TODO:
                  return [...prevState, action.payload];

            case REMOVE_TODO:
                  return prevState.filter((todo, index) => index !== action.payload);

            default:
                  return prevState;
      }
};


export default function TodoRe() {
      const [todos, todosDispatch] = useReducer(reducer, []);
      const [userInput, setUserInput] = useState("");

      const handleInput = (e) => {
            setUserInput(e.target.value);
      }
      return (
            <div className="todo-app">
                  <h1>Việc cần làm</h1>
                  <div className="input">
                        <input type="text"
                              onChange={handleInput}
                              value={userInput}
                        />

                        <div className="btn">
                              <button className="btn-add" onClick={() => {
                                    if (userInput.trim() === "") return;
                                    todosDispatch(addTodo(userInput));
                                    setUserInput("");
                              }}>Add
                              </button>

                              <button className="btn-remove" onClick={() => {
                                    todosDispatch(removeTodo(todos.length - 1));
                              }}>
                                    Remove
                              </button>
                        </div>
                  </div>

                  <ul>
                        {todos.map((todo, index) => {
                              return <li key={index}>
                                    {todo}
                              </li>
                        })}
                  </ul>
            </div>
      )
}

