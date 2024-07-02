import {useState} from 'react';
import './App.css'

function useToggleColor(defaultColor = "red") {
  const [color, setColor] = useState(defaultColor);
  const toggleColor = () => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }
  return {
    color,
    toggleColor,
  }
}

function useCounter(defaultCount = 0) {
  const [count, setCount] = useState(defaultCount);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return {
    count,
    increment,
    decrement,
  }
}

function AnotherComponent() {
  const {color, toggleColor} = useToggleColor();
  return <div className={color} onClick={toggleColor}>composant hafa</div>
}

function App() {
  const {count, increment, decrement} = useCounter(0);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App
