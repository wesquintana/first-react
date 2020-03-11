import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Store/Actions";
function Thing() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="Thing">
      <h1>
        <button onClick={() => dispatch(increment())}>+</button>Counter:{" "}
        {counter}
        <button onClick={() => dispatch(decrement())}>-</button>
      </h1>
    </div>
  );
}
export default Thing;
