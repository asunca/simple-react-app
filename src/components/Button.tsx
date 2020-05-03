import { PureComponent } from "react";
import React from "react";

export type ButtonType = "+" | "-";
export default class Button extends PureComponent<
  { type: ButtonType; updateCount: (type: ButtonType) => void },
  {}
> {
  render(): JSX.Element {
    const { type, updateCount } = this.props;
    return <button onClick={() => updateCount(type)}>{type}</button>;
  }
}