import React, { Component } from "react"

export class HUD extends Component {
  renderButton(callback, text) {
    return (
      <button onClick={callback}>
        {text}
      </button>
    );
  }
  render() {
    const { nextQuestion, disabledButtons } = this.props;
    return (
      <div>
        {disabledButtons && this.renderButton(nextQuestion, "Next Question")}
      </div>
    )
  }
}