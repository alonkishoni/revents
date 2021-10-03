import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { increment, decrement } from "./testReducer";

export default function Sandbox() {
  const data = useSelector((state) => state.test.data);
  const [target, setTarget] = useState();
  const { loading } = useSelector((state) => state.async);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Testing</h1>
      <h3>the data is: {data}</h3>
      <Button
        name="increment"
        loading={loading && target === "increment"}
        content="increment"
        color="green"
        onClick={(e) => {
          setTarget(e.target.name);
          dispatch(increment(20));
        }}
      />
      <Button
        name="decrement"
        loading={loading && target === "decrement"}
        content="decrement"
        color="red"
        onClick={(e) => {
          setTarget(e.target.name);
          dispatch(decrement(10));
        }}
      />
      <Button
        content="open modal"
        color="teal"
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: { data } }))
        }
      />
    </>
  );
}
