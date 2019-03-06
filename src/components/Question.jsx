import React, { Component } from 'react';

import { QuestionText } from './QuestionText';
import { AnswerDisplay } from './AnswerDisplay';

export class Question extends Component {
  render() { 
    const { questionObject, nextQuestion, changeScore } = this.props;
    return (
      <div className="col-md-12">
        <QuestionText prompt={questionObject.question_text}/>
        <hr/>
        <ul className="list-group">
          <AnswerDisplay 
            questionObject={questionObject}
            nextQuestion={nextQuestion}
            changeScore={changeScore}
          />
        </ul>
      </div>
    );
  }
}