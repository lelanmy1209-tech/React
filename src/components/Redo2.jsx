import React, { useEffect, useState } from 'react'

export default function Redo2() {
      const [time, setTime] = useState(0);
      const [isRunning, setIsRunning] = useState(false);

      // const [display, setDisplay] = useState("00:00:00");

      const convert = (num) => {
            const result = new Date(num * 1000).toISOString().slice(11, 19);
            return result;
      }

      // useEffect(() => {
      //       setDisplay(convert(time));
      // }, [time]);

      useEffect(() => {
            if (!isRunning) return;
            const interval = setInterval(() => {
                  setTime((prev) => prev + 1);
            }, 1000);

            return () => clearInterval(interval);
      }, [isRunning]);

      const handleReset = () => {
            setTime(0);
            setIsRunning(false);
      }



      return (
            <div>
                  <p>{convert(time)}</p>
                  <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Stop" : "Start"}</button>
                  <button onClick={handleReset}>Reset</button>
            </div>
      )
}
