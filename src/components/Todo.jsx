import { useState } from 'react'

export default function Todo() {
      const [todoList, setTodoList] = useState(["Học bài", "Homework"]);
      const [userInput, setuserInput] = useState("");

      const handleUserInput = (e) => {
            setuserInput(e.target.value);
      }

      const handleAddInput = () => {
            setTodoList((prev) => [...prev, userInput]);
            setuserInput("");
      }

  return (
    <>
      <div className='wrapper'>
            <div>
                  <h1 className='title'>Todo List</h1>
                  <div className='input-field'>
                        <label htmlFor="todo-input">Todo List</label>
                        <input value = {userInput}
                               type="text"  
                               id="todo-input"
                               onChange = {handleUserInput}
                        />
                  </div>
                         
                         
                  <button className='btn-add' onClick={handleAddInput}>Thêm</button>
            </div>
            <ul>
                  {todoList.map((todo) => {
                       return <li key={todo}>{todo}</li>;
                  })}
            </ul>
      </div>
    </>
  )
}
