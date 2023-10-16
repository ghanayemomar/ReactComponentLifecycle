import React, { useState, useEffect } from "react";
import "./index.css";
function Text() {
  const [text, setText] = useState("");
  
  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component UnMounted");
    };
  }, []);
  return (
    <>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>{text}</h1>
    </>
  );
}

export default Text;
