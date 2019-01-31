import React, { Component } from 'react';

import '../css/AnswersDisplay.css';

export class AnswerDisplay extends Component {
  render() {
    const answers_array = this.props.answersArray.map((item, index) => 
      <AnswerItem text={item} key={index} id={index}/>
    );
    return (
      <div className="answer_display">
        <ul className="list-group">
          {answers_array} 
        </ul>
      </div>
    );
  }
}

class AnswerItem extends Component {
  render() {
    return (
      <button className="answer_item list-group-item list-group-item-action" id={this.props.id}>
        {this.props.text}
      </button>
    );
  }
}