
import React, { useEffect, useState } from 'react'

export default function Num() {
      const [num, setNum] = useState(0);
      console.log("render");

      useEffect(() => {
            console.log("effect");
      }, [num]);

      return (
            <div>
                  <button onClick={() => setNum(num + 1)}>
                        Click
                  </button>
            </div>
      )
}
