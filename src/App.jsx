import {useState} from "react";

function validate(s) {
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
  const [isValid, setIsValid] = useState(true);

  function handleInputValueChange(ev) {
    const {value} = ev.target;
    setIsValid(validate(value));
    setInputValue(value)
  }

  return (
    <div>
      <input
        onChange={handleInputValueChange}
        value={inputValue}
      />
      {isValid ? "" : "invalid"}
    </div>
  )
}
