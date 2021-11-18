import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (!replace) {
      setMode(mode);
      return setHistory((prev) => [...prev, mode]);
    }
    return setMode(mode);
  }
  function back() {
    if (history.length === 1) {
      return setMode(initial);
    }
    setMode(history[history.length - 2]);
    setHistory(history.slice(0, -1));
  }

  return { mode, transition, back };
}
