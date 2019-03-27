import React from "react";

const Cat = ({ position: { x, y } }) => {
  console.log("yoo", x, y);
  return (
    <div
      style={{
        width: "10px",
        height: "10px",
        background: "green",
        position: "absolute",
        left: x,
        top: y,
        borderRadius: "20px"
      }}
    />
  );
};
export default Cat;
