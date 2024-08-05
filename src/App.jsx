import { useEffect, useState } from "react";

// lifecycle of a React component:
// - mounted (useEffect with empty deps)
// - updated (useEffect with deps)
// - unmounted (useEffect.effect return)

function Anakiray() {
  // allocate mem
  useEffect(() => {

    // cleanup function
    return () => {
      // free mem
    }
  }, []);

  return <p>oke ah</p>;
}

export default function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      {isShown ?  <Anakiray /> : undefined}

      <button onClick={() => {
        setIsShown(!isShown)
      }}>toggle hidden</button>
    </div>
  )
}
