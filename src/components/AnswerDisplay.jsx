import React, { Component } from 'react';

export class AnswerDisplay extends Component {
   constructor(props) {
      super(props);

   }

   answerQuestion(id) {
      const { nextQuestion, changeScore } = this.props
      const { correct_choice_index } = this.props.questionObject
      //eslint-disable-next-line
      if (id == correct_choice_index) {
         console.log("correct");
         changeScore(1);
      } else {
         console.log("false");
         changeScore(-1);
      }
      setTimeout(
         () => {
            nextQuestion();
            this.render();
         }, 1000
      );
   }

   render() {
      const { questionObject } = this.props;
      var arr = questionObject.choices.map((item, index) => {
         return (
            <AnswerButton
               color={"#495057"}
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
      const {clickFunction, id, text, color } = this.props
      return (
         <button
            style={{color: color}}
            className="answer_item list-group-item list-group-item-action"
            onClick={clickFunction}
            id={id}
         >
            <b>{text}</b>
         </button>
      )
   }
}