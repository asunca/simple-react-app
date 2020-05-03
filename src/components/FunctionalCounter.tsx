import React, { FC, useState, useCallback } from "react";
import { ButtonType } from "./Button";

const FunctionalCounter: FC<{}> = (): JSX.Element => {
  
  const Button = ({
    type,
    updateCount,
  }: {
    type: ButtonType;
    updateCount: (type: ButtonType) => void;
  }): JSX.Element => <button onClick={() => updateCount(type)}>{type}</button>;
  
  const [count, setCount] = useState(0);
  
  const updateCount = useCallback(
    (type: ButtonType): void => {
      switch (type) {
        case "-":
          setCount(count - 1);
          break;
        case "+":
        default:
          setCount(count + 1);
          break;
      }
    },
    [count]
  );
  return (
    <div>
      <h2>Functional Component</h2>
      <h1>{count}</h1>
      <Button updateCount={updateCount} type="+" />
      <Button updateCount={updateCount} type="-" />
    </div>
  );
};
export default FunctionalCounter;