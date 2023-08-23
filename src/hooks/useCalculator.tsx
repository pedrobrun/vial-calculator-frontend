import { useEffect, useReducer } from "react";

import { State } from "@/components/calculator/State";
import { Action } from "@/components/calculator/Action";


const initialValue: State = {
  previousValue: "0",
  overwrite: true,
};

function reducer(state: State, { type, payload }: Action) {
  return state
}

export function useCalculator() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return { state, dispatch };
}