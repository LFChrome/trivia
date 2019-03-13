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
        quizEnd: true,
        correct: "#495057",
        wrong: "#495057"
      });
    }
    else {
      this.setState({
        currentIndex: newIndex,
        disabledButtons: false,
        correctColor: "#495057",
        wrongColor: "#495057"
      });
    }
  }

  changeScore(score) {
    const newScore = this.state.score + score
    this.setState({
      score: newScore,
      disabledButtons: true
    });
  }

  showCorrectOption() {
    this.setState({
      correctColor: "green",
    });
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
      }],
      correct: "#495057",
      wrong: "#495057"
    }
    getQuestions((questions) => {
      this.setState({questions: questions});
    });
  }
  
  renderQuestion() {
    const { questions, currentIndex, disabledButtons, correctColor, wrongColor } = this.state;
    return (
      <div className="container app">
        <Title title={"Trivia"}/>
        <hr/>
        <Question 
          correctColor={correctColor}
          wrongColor={wrongColor}
          questionObject={questions[currentIndex]}
          changeScore={(score) => this.changeScore(score)}
          showCorrectOption={() => this.showCorrectOption()}
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

