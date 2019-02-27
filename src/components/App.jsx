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

  app_functions = {
    nextQuestion: () => {
      let newIndex = this.state.currentIndex + 1;
      if (newIndex >= this.questionArray.length) {
        newIndex = 0;
      }
      this.setState({
        currentIndex: newIndex
      });
    },
    showCorrectAnswer: () => {
      
    }
  }

  constructor(props) {
    super(props) 
    this.state = {
      currentIndex: 0,
      score: 0,
    }
  }

  render() {
    console.log(this.questionArray[this.state.currentIndex]);
    return (
      <div className="container app">
        <Title title="Trivia"/>
        <hr/>
        <Question 
          questionObject={this.questionArray[this.state.currentIndex]}
        />
        <hr/>
      </div>
    );
  }
}

