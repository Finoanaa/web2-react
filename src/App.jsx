import {useState} from "react";

function isValid(s) {
  if (!s.length) {
    return false
  }
  else if (/[0-9]/.test(s)) {
    return false;
  }
  return true;
}


export default function App() {
  const [inputValue, setInputValue] = useState("");

  function handleInputValueChange(ev) {
    setInputValue(ev.target.value)
  }

  return (
    <div>
      <input
        onChange={handleInputValueChange}
        value={inputValue}
      />
      {isValid(inputValue) ? "" : "invalid"}
    </div>
  )
}
