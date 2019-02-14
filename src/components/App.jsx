import React, { Component } from 'react';

import { Title } from './Title';
import { Question } from './Question';

import '../css/App.css';

export class App extends Component {

  questionArray = [
    {
      choices: [1, 2, 3, 4],
      correct_choice_index: 3,
      question_text: "What is 2 x 2?"
    },
    {
      choices: [1, 2, 3, 4],
      correct_choice_index: 1,
      question_text: "What is 2 x 1?"
    },
    {
      choices: [1, 2, 3, 4],
      correct_choice_index: 2,
      question_text: "What is 2 x 1.5?"
    },
  ]

  constructor(props) {
    super(props) 
    this.state = {
      currentQuestionIndex: 0
    }
  }

  functions = {
    nextQuestion: function() {
      console.log("debug");
      var newCurrentQuestionIndex = this.state.currentQuestionIndex + 1;
      this.setState({
        currentQuestionIndex: newCurrentQuestionIndex
      });
    },
  }

  render() {
    return (
      <div className="container app">
        <Title title="Trivia"/>
        <hr/>
        <Question 
          questionObject={this.questionArray[this.state.currentQuestionIndex]}
          functions={this.functions}
        />
        <hr/>

      </div>
    );
  }
}

