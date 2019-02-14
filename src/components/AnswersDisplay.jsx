import React, { Component } from 'react';

import '../css/AnswersDisplay.css';

export class AnswerDisplay extends Component {

  functions = this.props.functions;

  render() {
    const answers_array = this.props.choiceArray.map((item, index) => {
      return ( 
        <AnswerItem text={item} key={index} clickFunction={this.functions.nextQuestion}/>
      )
    });
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
      <button 
        className="answer_item list-group-item list-group-item-action" 
        id={this.props.id}
        onClick={this.props.clickFunction}
      >
        {this.props.text}
      </button>
    );
  }
}