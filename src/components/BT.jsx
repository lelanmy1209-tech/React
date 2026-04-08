import React, { useState } from 'react'
import "./BT.css";

export default function BT() {
      const [todo, setTodo] = useState("");
      const [todoList, setTodoList] = useState([]);

      return (
            
                  <div className='container'>
                        <form action=""
                              // style={{
                              //       display: "flex",
                              //       flexDirection: "column",
                              //       width: "320px",
                              //       gap: "1.5rem",
                              //       margin: "0 auto",
                              // }}
                              >
                              <input type="text"
                                    aria-label="Todo"
                                    value={todo}
                                    onChange={(e) => {
                                          setTodo(e.target.value);
                                    }}
                                    // style={{
                                    //       flex: "1",
                                    //       padding: "8px",
                                    //       border: "1px solid #ccc",
                                    //       borderRadius: "4px",
                                    // }}
      
                              />
                              <button onClick={(e) => {
                                    e.preventDefault();
                                    setTodoList(prev => [...prev, todo]);
                                    setTodo("");
                              }}
                                    // style={{
                                    //       margin: "auto",
                                    //       padding: "12px 24px",
                                    //       fontSize: "1.2rem",
                                    //       cursor: "pointer",
                                    //       border: "none",
                                    //       // backgroundColor: "gold",
                                    //       borderRadius: "10px",
                                    //       transition: "all 0.2s",
                                    // }}
                                    >
                                    Thêm
                              </button>
                        </form >
                        <ul
                              // style={{
                              //       width: "320px",
                              //       margin: "20px auto",
                              //       textAlign: "left",
                              //       listStyleType: "disc",
                              //       paddingLeft: "20px",
                              //        backgroundColor: "orange",
                              // }}
                              >
                              {todoList.map((item, index) => {
                                    return <li key={index}
                                          style={{
                                                // marginBottom: "8px",
                                                // fontSize: "18px"
                                          }}>{item}</li>;
                              })}
                        </ul>
                  </div>

            
            
      )
}
