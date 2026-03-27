import { useState } from "react"


export default function Count() {
      const [count, setCount] = useState(0);
      const [InputNumber, setInputNumber] = useState(1);

      const IncreaseNumber = () => {
            setCount(count + InputNumber);
      };

      const DecreaseNumber = () => {
            setCount(count - InputNumber);
      };

      const handleChangeInputNumber = (e) => {
            setInputNumber(Number(e.target.value));
      }

  return (
    <div>
        <p>{count}</p>
        
        <input type="number" value={InputNumber} onChange={handleChangeInputNumber} />
        
        <button onClick={DecreaseNumber}>Giảm</button>
        <button onClick={IncreaseNumber}>Tăng</button>

        {/* <button onClick={DecreaseNumber}>Giảm</button>
        <button onClick={IncreaseNumber}>Tăng</button> */}
    </div>
  )
}
