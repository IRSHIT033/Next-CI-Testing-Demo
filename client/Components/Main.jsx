import React, { useState } from "react";

const Main = () => {
  const [firstOperand, setfirstOperand] = useState(null);
  const [SecondOperand, setSecondOperand] = useState(null);
  const [ans, setans] = useState(null);
  const getSum = () => {
    setans(parseInt(firstOperand) + parseInt(SecondOperand));
    console.log(ans);
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
      <button id="show_res_btn" onClick={getSum}>
        =
      </button>
      <input id="ans" name="result" value={ans} />
    </div>
  );
};

export default Main;
