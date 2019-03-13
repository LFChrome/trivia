import React, { Component } from 'react';

export class AnswerDisplay extends Component {
   
   render() {
      const { questionObject, changeScore, disabledButtons, correctColor, wrongColor, showCorrectOption } = this.props;
      const { correct_choice_index } = this.props.questionObject
      var arr = questionObject.choices.map((item, index) => {
         if (index == correct_choice_index) {
            return (
               <AnswerButton
                  color={correctColor}
                  clickFunction={() => {
                     changeScore(1);
                     showCorrectOption();
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
                  color={wrongColor}
                  clickFunction={(e) => {
                     changeScore(0);
                     showCorrectOption();
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