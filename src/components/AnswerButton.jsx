import React, { Component } from 'react';

export class AnswerButton extends Component {
  render() {
    return (
      <button className="answer_button">
        {this.props.answer}
      </button>
    );
  }
}