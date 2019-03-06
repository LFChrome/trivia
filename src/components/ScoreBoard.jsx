import React, { Component } from "react";

export class ScoreBoard extends Component {
  render() {
    return (
      <p> 
        Score: {this.props.score}
      </p>
    );
  }
}