import React, { useState, useEffect } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        clicked {count} times
      </button>
    </div>
  );
};

export default HookCounter;
