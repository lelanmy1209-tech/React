import React, { useEffect, useState } from 'react'
import "./Timer.css";

export default function Timer() {
      const [timer, setTimer] = useState(60);
      const [display, setDisplay] = useState("00:01:00");
      const [isRunning, setIsRunning] = useState(false);
      const [isEdit, setIsEdit] = useState(false);

      const handleReset = () => {
            setTimer(toSeconds(display));
            setIsEdit(false);
      }

      const handleEdit = (e) => {
            setDisplay(e.target.value);
      }

      const convert = (num) => {
            const kq = new Date(num * 1000).toISOString().slice(11, 19);
            return kq;
      };

      const toSeconds = (time) => {
            const [hh, mm, ss] = time.split(":");
            return Number(hh) * 3600 + Number(mm) * 60 + Number(ss);
      };

      useEffect(() => {
            setDisplay(convert(timer));
      }, [timer]);

      useEffect(() => {
            if (!isRunning) return;
            const interval = setInterval(() => {
                  setTimer((prev) => {
                        if (prev <= 0) return 0;
                        return prev - 1;
                  });
            }, 1000);
            return () => clearInterval(interval);
      }, [isRunning]);

      return (
            <div className='Timer' >
                  {!isEdit ? (
                        <p>{display}</p>
                  ) : (<input type="text"
                        value={display}
                        onChange={handleEdit} />)}

                  <button className="btn-edit" onClick={() => setIsEdit(!isEdit)}>Edit</button>

                  <button className="btn-reset" onClick={handleReset}>Reset</button>

                  <button className="btn-start" onClick={() => setIsRunning(!isRunning)}>{!isRunning ? "Start" : "Stop"}</button>
            </div>
      )
}
