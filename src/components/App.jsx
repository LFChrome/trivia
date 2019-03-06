import React, { Component } from 'react';

import { getQuestions } from '../clients/firebase';

import { Title } from './Title';
import { Question } from './Question';

import '../css/App.css';

export class App extends Component {

  nextQuestion()  {
    let newIndex = this.state.currentIndex + 1;
    if (newIndex >= this.state.questions.length) {
      newIndex = 0;
    }
    this.setState({
      currentIndex: newIndex
    });
  }

  changeScore(score) {
    const newScore = this.state.score + score
    this.setState({
      score: newScore,
    })
    console.log(this.state.score);
  }

  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      score: 0,
      questions: [{
        choices: [1, 2, 3, 4],
        correct_choice_index: 3,
        question_text: "What is 2 x 2?"
      }]
    }
    getQuestions((questions) => {
      this.setState({questions: questions});
    });
  }
  
  renderQuestion() {
    return (
      <div className="container app">
        <Title title={"Trivia"}/>
        <hr/>
        <Question 
          questionObject={this.state.questions[this.state.currentIndex]}
          nextQuestion={() => this.nextQuestion()}
          changeScore={(score) => this.changeScore(score)}
        />
        <hr/>
      </div>
    );
  }

  render() {
    return this.renderQuestion()
  }
}

