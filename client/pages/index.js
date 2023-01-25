import { useState } from "react";

export default function Home() {
  const [firstOperand, setfirstOperand] = useState(null);
  const [SecondOperand, setSecondOperand] = useState(null);
  const [ans, setans] = useState(null);
  const getSum = () => {
    setans(parseInt(firstOperand) + parseInt(SecondOperand));
  };

  return (
    <div>
      <input
        id="firstOperand"
        type="text"
        onChange={(e) => setfirstOperand(e.target.value)}
      />
      +{" "}
      <input
        id="secondOperand"
        type="text"
        onChange={(e) => setSecondOperand(e.target.value)}
      />
      <button onClick={getSum}> = </button>
      <div id="ans"> {ans ?? ""} </div>
    </div>
  );
}
