// your Bomb code here!
import React, { Component } from 'react';



export default class Bomb extends Component {

  state = {secondsLeft: this.props.initialCount}
  text = this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"
  render() {
    return (
      <div>{this.text}</div>
    );
  }

}
