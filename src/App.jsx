import React, { useState } from 'react';
import './Counter.css';
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Counter Hello</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;