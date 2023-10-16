import React, { useEffect, useState } from "react";
import Text from "./Text";

function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="main">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>
      {showText && <Text />}
    </div>
  );
}

export default App;
