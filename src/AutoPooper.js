import React, { useEffect } from "react";

export default function AutoPooper({ poop, count }) {
  useEffect(() => {
    const interval = setInterval(() => {
      poop(count);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>Automatically pooping {count} per second.</div>;
}
