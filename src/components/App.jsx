import React, { Component } from 'react';

import { Title } from './Title';
import { Question } from './Question';

import '../css/App.css';


export class App extends Component {
  render() {
    return (
      <div className="container app">
        <Title title="Trivia"/>
        <hr></hr>
        <Question/>
      </div>
    );
  }
}

