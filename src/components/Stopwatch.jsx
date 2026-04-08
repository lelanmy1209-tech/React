import React, { useEffect, useState } from 'react'


export default function Stopwatch() {
      const [time, setTime] = useState(0);
      const [isRunning, setIsRunning] = useState(false);

      const convert = (num) => {
            const kq = new Date(num * 1000).toISOString().slice(11, 19);
            return kq;
      };

      useEffect(() => {

            if (!isRunning) return;
            const id = setInterval(() => {
                  setTime((prev) => prev + 1);
            }, 1000);

            return () => clearInterval(id);
      }, [isRunning]);

      const handleReset = () => {
            setTime(0);
            setIsRunning(false);
      };

      return (
            <div>
                  <p>{convert(time)}</p>
                  <button onClick={() => setIsRunning(!isRunning)}>{!isRunning ? "Start" : "Stop"}</button>
                  <button onClick={handleReset}>Reset</button>
            </div>
      )
}
