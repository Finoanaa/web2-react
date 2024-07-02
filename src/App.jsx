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
  return (
    <>
      <ColorText />
      <ToggleColor />

      <button onClick={triggerAlert}>trigger alert</button>
    </>
  )
}

