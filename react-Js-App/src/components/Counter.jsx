import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter">
      
      <div>
        <p className={count < 0 ? "error" : "success"}> {count} </p>
      </div>
      <div>
        <button className="count-button" onClick={decrease}>decrease</button> 
        <button className="count-button" onClick={increase}>increase</button>
      </div>
    </div>
  );
}
