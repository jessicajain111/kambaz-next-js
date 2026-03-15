"use client";
import { useCounterStore } from "./counter/store";

export default function ZustandCounter() {
  const { count, increase, decrease, setCount, reset } = useCounterStore(
    (state) => state
  );

  return (
    <div className="m-2">
      <h2>Zustand Counter</h2>
      <h3>Count: {count}</h3>
      <button className="btn btn-primary me-2" onClick={() => increase(1)}>
        Increase
      </button>
      <button className="btn btn-primary me-2" onClick={() => decrease(1)}>
        Decrease
      </button>
      <button className="btn btn-warning me-2" onClick={() => setCount(10)}>
        Set to 10
      </button>
      <button className="btn btn-danger" onClick={() => reset()}>
        Reset
      </button>
      <hr />
    </div>
  );
}