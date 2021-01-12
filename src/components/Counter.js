import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(`before setState: ${count}`);
    setCount(count + 2);
  
    console.log(`after setState: ${count}`);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
