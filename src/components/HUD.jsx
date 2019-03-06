import React, { Component } from "react"
import { ScoreBoard } from "./ScoreBoard";

export class HUD extends Component {
  renderButton(callback, text) {
    return (
      <button onClick={callback}>
        {text}
      </button>
    );
  }
  render() {
    const { score, nextQuestion, disabledButtons } = this.props;
    return (
      <div>
        <ScoreBoard score={score} />
        {disabledButtons && this.renderButton(nextQuestion, "Next Question")}
      </div>
    )
  }
}