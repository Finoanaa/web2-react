import { useState } from 'react';
import './App.css'

export default function App() {
  const [count, updateCount] = useState(0);

  function increment() {
    if (count < 10) {
      updateCount(count + 1);
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={() => updateCount(count - 1)}>decrement</button>
    </div>
  )
}

