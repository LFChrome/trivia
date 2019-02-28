import React, { Component } from 'react';

export class AnswerDisplay extends Component {
   answerQuestion(id) {
      const { nextQuestion, changeScore } = this.props
      const { correct_choice_index } = this.props.questionObject
      if (id == correct_choice_index) {
         console.log("correct");
         changeScore(1);
      } else {
         console.log("false");
         changeScore(-1);
      }
      nextQuestion();
   }

   render() {
      const { questionObject } = this.props;
      const arr = questionObject.choices.map((item, index) => {
         return (
            <AnswerButton 
               clickFunction={(e) => {
                  this.answerQuestion(e.target.id);
               }}
               text={item}
               id={index}
               key={index}
            />
         ) 
      });
      return arr;
   }
}

class AnswerButton extends Component {
   render() {
      const {clickFunction, id, text} = this.props
      return (
         <button
            className="answer_item list-group-item list-group-item-action"
            onClick={clickFunction}
            id={id}
         >
            <b>{text}</b>
         </button>
      )
   }
}