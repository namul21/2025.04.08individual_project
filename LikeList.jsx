import React from "react";
import Counter from "./Counter";
import "./Counter.css";

const LikeList = () => {
  const array = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="like-list-container">
      {array.map((item) => (
        <div className="like-item" key={item}>
          <p className="item-title">Item {item}</p>
          <Counter />
        </div>
      ))}
    </div>
  );
};

export default LikeList;
