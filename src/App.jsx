import { useEffect, useState } from "react";

export default function App() {
  // useState
  // useEffect
  // lifecyle:
  // mounted (rendu ao anatinle DOM)
  // updated (averina atao rendu ao antinle DOM)
  // unmounted (alana ao anatinle)
  const [count, setCount] = useState(0);
  const [countBy2, setCountBy2] = useState(0);

  useEffect(() => {
    console.log('count updated', count);
  }, [count]);

  useEffect(() => {
    console.log('counBy2 updated', countBy2);
  }, [countBy2]);

  useEffect(() => {
    console.log('count... updated');
  }, [count, countBy2]);

  // [] => component is mounted
  // [deps,] => when one of the deps is updated

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCountBy2(count + 2)}>{countBy2}</button>
    </div>
  )
}
