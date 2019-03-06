import React, { Component } from 'react';

import { getQuestions } from '../clients/firebase';

import { Title } from './Title';
import { Question } from './Question';
import { HUD } from './HUD';

import '../css/App.css';

export class App extends Component {

  nextQuestion()  {
    let newIndex = this.state.currentIndex + 1;
    if (newIndex >= this.state.questions.length) {
      this.setState({
        quizEnd: true
      });
    }
    this.setState({
      currentIndex: newIndex,
      disabledButtons: false,
    });
  }

  changeScore(score) {
    const newScore = this.state.score + score
    this.setState({
      score: newScore,
      disabledButtons: true
    })
    console.log(this.state.score);
    console.log(this.state.questions.length)
  }

  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      quizEnd: false,
      score: 0,
      disabledButtons: false,
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
    const { questions, currentIndex, disabledButtons } = this.state;
    return (
      <div className="container app">
        <Title title={"Trivia"}/>
        <hr/>
        <Question 
          questionObject={questions[currentIndex]}
          changeScore={(score) => this.changeScore(score)}
          disabledButtons={disabledButtons}
        />
        <hr/>
        <HUD 
          nextQuestion={() => this.nextQuestion()}
          disabledButtons={disabledButtons}
        />
      </div>
    );
  }

  renderResults() {
    const { questions, score } = this.state;
    return (
      <div className="container app">
        <Title title={"Trivia"}/>
        <hr/>
        <p>
          You correctly answered {score} questions out of { questions.length }
        </p>
        <button onClick={(() => {
          this.setState({
            currentIndex: 0,
            quizEnd: false,
            score: 0,
            disabledButtons: false,
          });
        })}>
          Try again
        </button>
        <hr/>
      </div>
    );
  }

  render() {
    const { quizEnd } = this.state
    return (
      <div>
        { !quizEnd && this.renderQuestion() }
        { quizEnd && this.renderResults() }
      </div>
    );
  }
}

