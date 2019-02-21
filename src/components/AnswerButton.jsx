import React, { Component } from 'react';

export class AnswerDisplay extends Component {

   correctAnswer() {
      return "red";
   }

   wrongAnwer() {

   }

   render() {
      const { questionObject } = this.props;
      const arr = questionObject.choices.map((item, index) => {
         if (questionObject.choices.correct_choice_index === index) {
            return (
               <AnswerButton 
                  clickFunction={this.correctAnswer}
                  text={item}
                  key={index}
               />
            )
         } else {
            return (
               <AnswerButton 
                  text={item}
                  key={index}
               />
            )
         }
      });
      return arr;
   }
}

class AnswerButton extends Component {

   render() {
      const color = "black";
      return (
         <button
            className="answer_item list-group-item list-group-item-action"
            onClick={this.props.clickFunction}
         >
            <font color={color}><b>{this.props.text}</b></font>
         </button>
      )
   }
}