import React, { useEffect, useState, useRef } from 'react'

export default function Try() {
      const [timer, setTimer] = useState(60);
      const [display, setDisplay] = useState("00:01:00");
      const [isEditting, setIsEditing] = useState(false);
      const inputRef = useRef(null);
      const [isRunning, setIsRunning] = useState(false);

      const handleEdit = (e) => {
            setDisplay(e.target.value);
      }

      const toSeconds = (time) => {
            const [hh, mm, ss] = time.split(":");
            return Number(hh) * 3600 + Number(mm) * 60 + Number(ss);
      };

      const handleReset = () => {
            setTimer(toSeconds(display));
            setIsEditing(false);
      }

      const convert = (num) => {
            const kq = new Date(num * 1000).toISOString().slice(11, 19);
            return kq;
      };

      useEffect(() => {
            setDisplay(convert(timer));
      }, [timer]);

      useEffect(() => {
            if (!isRunning) return;
            const run = setInterval(() => {
                  setTimer((prev) => {
                        if (prev <= 0) return 0;
                        return prev - 1;
                  });
            }, 1000);
            
            return () => clearInterval(run);

      }, [isRunning]);

      useEffect(() => {
            if ( isEditting) {
                  inputRef.current.focus();
            }
      }, [isEditting]);


      return (
            <div>
                  {!isEditting ? (
                        <p>{display}</p>
                  ) : (
                        <input type="text"
                              value={display}
                              ref={inputRef}
                              onChange={handleEdit} />
                  )}

                  <button onClick={() => setIsEditing(!isEditting)}>Edit</button>
                  <button onClick={handleReset}>Reset</button>
                  <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</button>
            </div>
      )
}
