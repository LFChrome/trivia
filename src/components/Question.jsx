import React, { Component } from 'react';

import { QuestionText } from './QuestionText';
import { AnswerButton } from './AnswerButton';

export class Question extends Component {
  render() {
    return (
      <div className="col-md-12">
        <QuestionText prompt="What is the meaning of life?"/>
        <hr></hr>
        <AnswerButton answer="42"/>
        <AnswerButton answer="Be happy!"/>
        <AnswerButton answer="Become rich!"/>
        <AnswerButton answer="There is no meaning"/>
      </div>
    );
  }
}