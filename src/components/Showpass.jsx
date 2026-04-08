import React, { useState } from 'react'
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import "./Showpass.css"


export default function Showpass() {

      const [isShow, setIsShow] = useState(false);

      const handleShow = () => {
            setIsShow(!isShow);
      }
      return (
            <>
                  <div className='container'>
                        <form action="">
                              <section>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" id="username" name="username" />
                              </section>

                              <section>
                                    <label htmlFor="password">Password</label>
                                    <div className='input-container'>
                                          <input type={isShow ? "text" : "password"}
                                                id="password"
                                                name="password" /><div onClick={handleShow}>
                                          {isShow ? <EyeSlashFill /> : <EyeFill />}
                                    </div>
                                    </div>
                              </section>

                              <button className='btn'>Submit</button>

                        </form>
                  </div>
            </>
      )
}
