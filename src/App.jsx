import { useEffect, useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (!inputValue.length) {
      setIsValid(false);
    }
    else if (/[0-9]/.test(inputValue)) {
      setIsValid(false);
    }
    else {
      setIsValid(true);
    }
  }, [inputValue])

  return (
    <div>
      <input
        onChange={ev => setInputValue(ev.target.value)}
        value={inputValue}
      />
      {isValid ? "" : "invalid"}
    </div>
  )
}
