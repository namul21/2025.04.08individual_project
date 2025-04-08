import React, { useState } from "react";
import "./Counter.css"

const Counter = () =>{
    const [count, setCount]= useState(0);

    const onInscrease = () => {
        setCount(prevCount => prevCount + 1 );
    };

    const onDecrease = () => {
        setCount(prevCount => prevCount -1 );
    };
  return(
  <>
    <h1 className="counter-container">{count}</h1>
    <button onClick={onInscrease}>👍</button>
    <button onClick={onDecrease}>👎</button>
  </>
  );
};

export default Counter;