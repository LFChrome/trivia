import React, { Component } from 'react';

import { QuestionText } from './QuestionText';
import { AnswerDisplay } from './AnswersDisplay';

export class Question extends Component {
  render() {  
    return (
      <div className="col-md-12">
        <QuestionText prompt={this.props.questionObject.question_text}/>
        <hr></hr>
        <ol>
          <AnswerDisplay 
            answersArray={this.props.questionObject.choices}
            correctChoice={this.props.questionObject.correct_choice_index}
          />
        </ol>
      </div>
    );
  }
}