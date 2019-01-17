import React, { Component } from 'react';

import '../css/App.css';

import { Title } from './Title';
import { Question } from './Question';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Title title="Cawu'uq"/>
        <Question/>        
      </div>
    );
  }
}

