import { useState } from 'react';
import './App.css'

// custom hook
function useToggleColor() {
  const [color, setColor] = useState("red");
  function toggleColor() {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  }
  // { color: "red", toggleColor: () => {...} }
  // { color: "blue", toggleColor: () => {...} }
  return {color, toggleColor}
}

function useAlert() {
  return function() {
    alert("alert!!!")
  }
}

function useCounter(defaultCount) {
  const [count, setCount] = useState(defaultCount);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return {
    count,
    increment,
    decrement,
  }
}

function ColorText() {
  const {color, toggleColor} = useToggleColor();
  return (
    <button onClick={toggleColor}>{color}</button>
  )
}

function ToggleColor() {
  const {color, toggleColor} = useToggleColor();
  return (
    <div
      className={`${color} container`}
      onClick={toggleColor}
    >
    </div>
  )
}

export default function App() {
  const triggerAlert = useAlert();

  const {count, increment, decrement} = useCounter(0);

  return (
    <>
      <ColorText />
      <ToggleColor />
      <button onClick={triggerAlert}>trigger alert</button>


      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

