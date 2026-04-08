import React, { useEffect, useRef, useState } from 'react'

export default function Redo() {
  const [time, setTime] = useState(0);
  const [display, setDisplay] = useState("00:00:00");
  const [isEdit, setIsEdit] = useState(false);
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
    setTime(toSeconds(display));
    setIsEdit(false);
  };

  const convert = (num) => {
    const result = new Date(num * 1000).toISOString().slice(11, 19);
    return result;
  }

  useEffect(() => {
    setDisplay(convert(time));
  }, [time]);

  useEffect(() => {
    if (isEdit) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  useEffect(() => {
    if (!isRunning) return; 
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);


  return (
    <div>
      {!isEdit ? (
        <p>{display}</p>
      ) : (
        <input type="text"
          value={display}
          onChange={handleEdit}
          ref={inputRef}
        />
      )}

      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</button>

    </div>
  )
}
