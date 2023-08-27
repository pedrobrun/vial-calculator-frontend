import React from "react";
import { Body } from "./Body";
import Header from "./Header";
import { useCalculator } from "@/hooks/useCalculator";
import History from "./History";

const Calculator = () => {
  const { state, dispatch } = useCalculator();

  return (
    <div className="flex flex-col items-center ">
      <div>
        <Header value={state.previousValue} />
        <Body state={state} dispatch={dispatch} />
      </div>
      <History operations={state.history} />
    </div>
  );
};

export default Calculator;
