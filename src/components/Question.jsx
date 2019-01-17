import React, { Component } from 'react';

import { QuestionText } from './QuestionText';
import { AnswerButton } from './AnswerButton';

export class Question extends Component {
  render() {
    return (
      <div className="question_container">
        <QuestionText prompt="What is the capitol of California?"/>
        <hr></hr>
        <div className="answers_container">
          <AnswerButton answer="Los Angeles"/>
          <br></br>
          <AnswerButton answer="Fresno"/>
          <br></br>
          <AnswerButton answer="Sacramento"/>
          <br></br>
          <AnswerButton answer="San Francisco"/>
        </div>
      </div>
    );
  }
}
