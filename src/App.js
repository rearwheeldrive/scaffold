import React, { useState, useCallback } from "react";
import AutoPooper from "./AutoPooper";

export default function App() {
  const [score, setScore] = useState(0);
  const [autoPoopers, setAutoPoopers] = useState(0);

  const poop = useCallback((amount = 1) => setScore((prev) => prev + 1), [
    setScore,
  ]);

  return (
    <div>
      <h1>Score: {score}</h1>
      <button onClick={poop}>Poop</button>
      <button onClick={() => setAutoPoopers((prev) => prev + 1)}>
        Make Auto Pooper
      </button>
      <AutoPooper poop={poop} count={autoPoopers} />
    </div>
  );
}
