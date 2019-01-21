import React, { Component } from 'react';

export class QuestionText extends Component {
  render() {
    return ( <h4>
      {this.props.prompt}
    </h4> );
  }
}