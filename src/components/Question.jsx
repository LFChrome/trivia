import React, { Component } from 'react';

import { QuestionText } from './QuestionText';
import { AnswerDisplay } from './AnswersDisplay';

export class Question extends Component {

  question_text = this.props.questionObject.question_text;
  choices = this.props.questionObject.choices;

  render() {  
    console.log(this.props.functions);
    return (
      <div className="col-md-12">
        <QuestionText prompt={this.question_text}/>
        <hr></hr>
        <ol>
          <AnswerDisplay choiceArray={this.choices} functions={this.props.functions}/>
        </ol>
      </div>
    );
  }
}