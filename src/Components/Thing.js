import React from "react";
import { useSelector } from "react-redux";
function Thing() {
  const counter = useSelector(state => state.counter);
  return <h1>Counter: {counter}</h1>;
}
export default Thing;
