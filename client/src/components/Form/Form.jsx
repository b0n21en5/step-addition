import React, { useRef, useState } from "react";
import axios from "axios";
import "./form.css";
import ResultBox from "../Result/ResultBox";

const Form = () => {
  const [numbers, setNumbers] = useState({ num1: 0, num2: 0 });
  const [result, setResult] = useState([]);
  const ref = useRef(null);

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/number", numbers);
      setResult(res.data);
      ref.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {}
  };

  const handleInputs = (e) => {
    setNumbers((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <>
      <div className="formContainer">
        <form className="inputField">
          <div className="inputText">
            <span className="number">First Number: </span>
            <span className="number">Second Number: </span>
          </div>
          <div className="inputValue">
            <input dir="rtl" type="number" id="num1" onChange={handleInputs} />
            <input dir="rtl" type="number" id="num2" onChange={handleInputs} />
          </div>
        </form>
        <button onClick={fetchData}>Generate Steps</button>
      </div>
      <ResultBox result={result} ref={ref} />
    </>
  );
};

export default Form;
