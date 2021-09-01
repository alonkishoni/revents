import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { increment, decrement } from "./testReducer";

export default function Sandbox() {
  const data = useSelector((state) => state.test.data);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Testing</h1>
      <h3>the data is: {data}</h3>
      <Button
        content="increment"
        color="green"
        onClick={() => dispatch(increment(20))}
      />
      <Button
        content="decrement"
        color="red"
        onClick={() => dispatch(decrement(10))}
      />
    </>
  );
}
