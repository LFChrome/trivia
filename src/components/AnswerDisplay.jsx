import React, { Component } from 'react';

export class AnswerDisplay extends Component {

   correctAnswer() {
      return "green";
   }

   wrongAnswer() {
      return "red";
   }

   render() {
      const { questionObject } = this.props;
      const arr = questionObject.choices.map((item, index) => {
         if (questionObject.correct_choice_index === index) {
            return (
               <AnswerButton 
                  clickFunction={() => this.correctAnswer()}
                  text={item}
                  key={index}
               />
            )
         } else {
            return (
               <AnswerButton 
                  clickFunction={() => this.wrongAnswer()}
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
   color = "black";
   buttonChange() {
      this.color = this.props.clickFunction();
      console.log(this.color)
   }

   render() {
      const color = this.color;
      return (
         <button
            className="answer_item list-group-item list-group-item-action"
            onClick={() => this.buttonChange()}
            id={this.props.id}
         >
            <font color={color}><b>{this.props.text}</b></font>
         </button>
      )
   }
}