import React, { Component } from 'react';

import '../css/AnswersDisplay.css';

export class AnswerDisplay extends Component {
  render() {
    var a_array = this.props.answersArray.map(item => {
      return <li><AnswerItem text={item}/></li>
    });
    return (
      <div className="answer_display">
        <ul>
          {a_array}
        </ul>
      </div>
    );
  }
}

class AnswerItem extends Component {
  render() {
    return (
      <button className="answer_button">{this.props.text}</button>
    );
  }
}