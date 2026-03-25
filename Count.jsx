import { useState } from "react";

export default function Count() {
  // const numbers = useState(3);
  // let number = 3;


  const [count, setCount] = useState(0);
  const [inputNumber, setinputNumber ] = useState(1);

  const increaseNumber = () => {
    // console.log(number);
    // number++;
    // numbers[1](numbers[0] ? numbers[0] + 1  : 1);
    setCount(count + inputNumber);
  };

  const decreaseNumber = () => {
    setCount(count - inputNumber);
  };

  // increaseNumber();

  const handleChangeIbputNumber = (e) => {
  setinputNumber(Number(e.target.value));
  }

  return (
    <>
      {/* value={inputNumber} */}
      <input type="number" onChange={handleChangeIbputNumber} />
      <p>{count}</p>
      <button onClick={increaseNumber}>Tăng</button>
      <button onClick={decreaseNumber}>Giảm</button>
    </>
  );
}
