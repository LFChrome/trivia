import React, { Component } from 'react';

import '../css/AnswersDisplay.css';

function handleWrongChoice() {
  console.log(false)
}
function handleRightChoice() {
  console.log(true)
}

export class AnswerDisplay extends Component {
  render() {
    const answers_array = this.props.answersArray.map((item, index) => {
      let clickFunction = handleWrongChoice;
      if (index === this.props.correctChoice) {
        clickFunction = handleRightChoice;
      }
      return ( 
        <AnswerItem text={item} key={index} id={index} clickFunction={clickFunction}/>
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