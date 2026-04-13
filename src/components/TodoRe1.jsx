import { useReducer, useRef, useState } from "react";


//1 initial action type
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const EDIT_TODO = "EDIT_TODO";

//2. initial action func
const addTodo = (type, payload) => {
      return {
            type,
            payload,
      }
}

const deleteTodo = (type, payload) => {
      return {
            type,
            payload,
      }
}

const editTodo = (type, payload) => {
      return {
            type,
            payload,
      }
}

//3. define reducer func
const todoReducer = (prevstate, action) => {
      switch (action.type) {
            case ADD_TODO:
                  return [...prevstate, action.payload];
            case DELETE_TODO:
                  return prevstate.filter(todo => todo.id !== action.payload);
            case EDIT_TODO:
                  return prevstate.map(todo =>
                        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
                  );
            default:
                  return prevstate;
      }
}

export default function TodoRe1() {
      // 4. định nghĩa reducer
      const [todos, todosDispatch] = useReducer(todoReducer, []);
      const [todosList, setTodosList] = useState("");
      const todosRef = useRef(1);
      const [isEdit, setIsEdit] = useState(null);
      const [editText, setEditText] = useState("");

      return (
            <div>
                  <form action=""
                        onSubmit={(e) => e.preventDefault()}
                  >
                        <input type="text"
                              value={todosList}
                              onChange={(e) => {
                                    setTodosList(e.target.value);
                              }}
                        />
                        <button
                              onClick={() => {
                                    if (todosList.trim() == "") return;
                                    todosDispatch(addTodo(ADD_TODO, {
                                          id: todosRef.current,
                                          text: todosList,
                                    }));
                                    todosRef.current++;
                                    setTodosList("");
                              }}>Thêm</button>
                  </form>
                  <ul>
                        {todos.map((todo) => {
                              return <li key={todo.id} >
                                    {isEdit === todo.id ? (
                                          <>
                                                <input type="text"
                                                      value={editText}
                                                      onChange={((e) => {
                                                            setEditText(e.target.value)
                                                      })} />
                                                <button
                                                      onClick={() => {
                                                            todosDispatch(editTodo(EDIT_TODO, {id: todo.id, text: editText}));
                                                            setIsEdit(null);
                                                            setEditText("");
                                                      }}>DONE
                                                </button>
                                                <button
                                                      onClick={() => {
                                                            todosDispatch(deleteTodo(DELETE_TODO, todo.id));
                                                      }}
                                                >X
                                                </button>
                                          </>
                                    ) : (
                                          <>
                                                <span onClick={() => {
                                                      setIsEdit(todo.id);
                                                      setEditText(todo.text);
                                                }}>{todo.text}
                                                </span>

                                                <button
                                                      onClick={() => {
                                                            todosDispatch(deleteTodo(DELETE_TODO, todo.id));
                                                      }}
                                                > X</button>
                                          </>
                                    )}

                              </li>;
                        })}
                  </ul>
            </div>
      )
}
