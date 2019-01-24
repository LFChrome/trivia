import React, { Component } from 'react';

import { QuestionText } from './QuestionText';
import { AnswerDisplay } from './AnswersDisplay';

const question = {
  choices: [48, 13, 52, 50],
  correct_choice_index: 3,
  question_text: "How many states are in the US?"
}

export class Question extends Component {
  render() {  
    return (
      <div className="col-md-12">
        <QuestionText prompt={question.question_text}/>
        <hr></hr>
        <ol>
          <AnswerDisplay answersArray={question.choices}/>
        </ol>
      </div>
    );
  }
}