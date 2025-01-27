import React, { useState } from 'react';
import './Counter.css';
function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, valueChanged] = useState('')
  const handleSetCount = () => {
    const parsedValue = parseInt(inputValue);
    setCount(parsedValue);
  };
  const handleChange = (event) =>{
    valueChanged(event.target.value);
  };

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <span>Set Count<input type="number" value={inputValue} onChange={handleChange}></input> <button onClick={handleSetCount}>Set Count</button></span>
      <button onClick={() => setCount(0)}>Reset to 0</button>
    </div>
  );
}

export default Counter;