import React, { useState } from "react";
import "./CalculatorApp.css"; // Import the CSS file for styling

const CalculatorApp = () => {
  const [result, setResult] = useState(""); // State to store the result
  const [input, setInput] = useState(""); // State to store the input

  // Function to handle button clicks
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Function to handle equal button click
  const handleEqual = () => {
    try {
      let res = input;
      let chr = res.charAt(0);
      while (chr == 0) {
        res = res.substring(1, res.length);
        chr = res.charAt(0);
      }
      setInput(res);
      setResult(eval(res));
    } catch (error) {
      setResult("Error");
    }
  };

  // Function to handle clear button click
  const handleClear = () => {
    setResult("");
    setInput("");
  };
  const handleCe = () => {
    setInput(input.substring(0, input.length - 1));
  };

  return (
    <div className="calculator">
      <div className="heading">
        <h1>Basic Calculator</h1>
      </div>
      <div className="display">
        {/* Display the input and result */}
        <input type="text" value={input} readOnly />
        <input type="text" value={result} readOnly />
      </div>
      <div className="buttons">
        {/* Render the buttons with corresponding onClick handlers */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleCe}>CE</button>
        <button onClick={() => handleClick("+")}>+</button>

      </div>
      <div className="bottom-buttons">
        <button className="double-zero" onClick={() => handleClick("00")}>00</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEqual}>=</button>
      </div>
    </div>

  );
};

export default CalculatorApp;
