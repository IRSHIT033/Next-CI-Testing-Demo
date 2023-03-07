import React, { useState } from "react";

const Main = () => {
  const [firstOperand, setfirstOperand] = useState("");
  const [SecondOperand, setSecondOperand] = useState("");
  const [ans, setans] = useState("");
  const getSum = () => {
    if (isNaN(Number(firstOperand)) || isNaN(Number(SecondOperand))) {
      alert("Enter valid input");
      return;
    }
    setans(Number(firstOperand) + Number(SecondOperand));
  };
  const reset = () => {
    setfirstOperand("");
    setSecondOperand("");
    setans("");
  };
  return (
    <div>
      <input
        id="firstOperand"
        type="text"
        value={firstOperand}
        onChange={(e) => setfirstOperand(e.target.value)}
      />
      +
      <input
        id="secondOperand"
        type="text"
        value={SecondOperand}
        onChange={(e) => setSecondOperand(e.target.value)}
      />
      <button id="show_res_btn" onClick={getSum}>
        =
      </button>
      <input id="ans" name="result" defaultValue={ans} />
      <br />
      <button id="reset_btn" onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default Main;
