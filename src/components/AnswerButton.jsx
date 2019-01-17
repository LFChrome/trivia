import React, { Component } from 'react';

export class AnswerButton extends Component {
   render(answer) {
      return (
         <button className="answer_button">
            {this.props.answer}
         </button>
      )
   }
}