import { Action, Operation } from "./Action";
import { Button } from "./Button";
import { State } from "./State";

export function Body({
  state,
  dispatch,
}: {
  state: State;
  dispatch: React.Dispatch<Action>;
}) {
  const addDigit = (number: string) => {
    dispatch({ type: "ADD_DIGIT", payload: { digit: number } });
  };

  const setOperation = (operation: Operation) => {
    dispatch({ type: "SET_OPERATION", payload: { operation } });
  };

  const buttonDisabled = state.isOperationReady ? ' opacity-40 cursor-not-allowed' : '';

  return (
    <div className="grid w-72 grid-cols-4 grid-rows-5 gap-3">
      <Button onClick={() => dispatch({ type: "CLEAR" })} type="light">
        {!state?.currentValue && state.previousValue === "0" ? "AC" : "C"}
      </Button>
      <Button disabled={Boolean(buttonDisabled)} className={buttonDisabled} onClick={() => dispatch({ type: "INVERT" })} type="light">
        +/-
      </Button>
      <Button disabled={Boolean(buttonDisabled)} className={buttonDisabled} onClick={() => dispatch({ type: "PERCENTAGE" })} type="light">
        %
      </Button>
      <Button disabled={Boolean(buttonDisabled)} className={buttonDisabled} onClick={() => setOperation("÷")} type="highlighted">
        ÷
      </Button>

      <Button onClick={() => addDigit("7")} type="dark">
        7
      </Button>
      <Button onClick={() => addDigit("8")} type="dark">
        8
      </Button>
      <Button onClick={() => addDigit("9")} type="dark">
        9
      </Button>
      <Button disabled={Boolean(buttonDisabled)} className={buttonDisabled} onClick={() => setOperation("×")} type="highlighted">
        ×
      </Button>

      <Button onClick={() => addDigit("4")} type="dark">
        4
      </Button>
      <Button onClick={() => addDigit("5")} type="dark">
        5
      </Button>
      <Button onClick={() => addDigit("6")} type="dark">
        6
      </Button>
      <Button disabled={Boolean(buttonDisabled)} className={buttonDisabled} onClick={() => setOperation("-")} type="highlighted">
        -
      </Button>

      <Button onClick={() => addDigit("1")} type="dark">
        1
      </Button>
      <Button onClick={() => addDigit("2")} type="dark">
        2
      </Button>
      <Button onClick={() => addDigit("3")} type="dark">
        3
      </Button>
      <Button disabled={Boolean(buttonDisabled)} className={buttonDisabled} onClick={() => setOperation("+")} type="highlighted">
        +
      </Button>

      <Button
        onClick={() => addDigit("0")}
        className={`col-span-2 w-32 justify-start pl-6 pr-28`}
        type="dark"
      >
        0
      </Button>
      <Button onClick={() => addDigit(".")} type="dark">
        .
      </Button>
      <Button onClick={() => dispatch({ type: "EVALUATE" })} type="highlighted">
        =
      </Button>

      <Button disabled={Boolean(buttonDisabled)} className={buttonDisabled} onClick={() => setOperation("MR")} type="highlighted">
        MR
      </Button>
      <Button disabled={Boolean(buttonDisabled)} className={buttonDisabled} onClick={() => setOperation("MC")} type="highlighted">
        MC
      </Button>
      <Button disabled={Boolean(buttonDisabled)} className={buttonDisabled} onClick={() => setOperation("^")} type="highlighted">
        ^
      </Button>
      <Button disabled={Boolean(buttonDisabled)} className={buttonDisabled} onClick={() => setOperation("√")} type="highlighted">
        √
      </Button>

      <Button
        className={`col-span-2 w-full ${buttonDisabled}`}
        onClick={() => setOperation("M+")}
        type="highlighted"
      >
        M+
      </Button>
      <Button
        className={`col-span-2 w-full place-self-end ${buttonDisabled}`}
        onClick={() => setOperation("M-")}
        type="highlighted"
      >
        M-
      </Button>
    </div>
  );
}
