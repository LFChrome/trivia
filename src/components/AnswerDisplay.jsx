import React, { Component } from 'react';

export class AnswerDisplay extends Component {
   alertIncorrectAnswer(id) {
      const { questionObject } = this.props;
      const correct_choice_index = questionObject.correct_choice_index;
      const answered = questionObject.choices[id];
      const correctAnswer = questionObject.choices[correct_choice_index]
      alert(`You answered ${answered}. The correct option was ${correctAnswer}.`);
   }

   render() {
      const color = "#495057";
      const { questionObject, changeScore, disabledButtons } = this.props;
      const { correct_choice_index } = this.props.questionObject
      var arr = questionObject.choices.map((item, index) => {
         if (index == correct_choice_index) {
            return (
               <AnswerButton
                  color={color}
                  clickFunction={() => {
                     changeScore(1);
                     alert("You are correct.")
                  }}
                  text={item}
                  id={index}
                  key={index}
                  disabled={disabledButtons}
               />
            ) 
         } else {
            return (
               <AnswerButton
                  color={color}
                  clickFunction={(e) => {
                     changeScore(0);
                     console.log(e.target.id)
                     this.alertIncorrectAnswer(e.target.id)
                  }}
                  text={item}
                  id={index}
                  key={index}
                  disabled={disabledButtons}
               />
            ) 
         }
      });
      return arr
   }
}

class AnswerButton extends Component {
   render() {
      const {clickFunction, id, text, color, disabled } = this.props
      return (
         <button
            style={{color: color}}
            className="answer_item list-group-item list-group-item-action"
            onClick={clickFunction}
            id={id}
            disabled={disabled}
         >
            <b>{text}</b>
         </button>
      )
   }
}