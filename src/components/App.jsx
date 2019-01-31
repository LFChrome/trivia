import React, { Component } from 'react';

import { buildFirebase, getRandomQuestion, getFirebaseSnapshot} from "../clients/firebase";

import { Title } from './Title';
import { Question } from './Question';

import '../css/App.css';

var firebaseDatabase = buildFirebase();


const questionArray = [
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

export class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      currentQuestion: "a"
    }
    getFirebaseSnapshot((snapshot) => {
      const questions = snapshot
      this.setState({
        currentQuestion: getRandomQuestion(questions)
      })
    }, "/questions")
  }

  render() {
    return (
      <div className="container app">
        <Title title="Trivia"/>
        <hr></hr>
        <Question questionObject={this.state.currentQuestion}/>
      </div>
    );
  }
}

