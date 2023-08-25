import React from "react";
import { Body } from "./Body";
import Header from "./Header";
import { useCalculator } from "@/hooks/useCalculator";

const Calculator = () => {
  const { state, dispatch } = useCalculator();

  return (
    <div>
      <Header value={state.previousValue} />
      <Body state={state} dispatch={dispatch} />
    </div>
  );
};

export default Calculator;
