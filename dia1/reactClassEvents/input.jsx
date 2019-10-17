import React, { Component } from 'react';

const FOCUS_STATE = "Focus";
const FOCUS_OUT_STATE = "Focus out";

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      state: FOCUS_OUT_STATE
    }

    this.handleTyping = this.handleTyping.bind(this);
  }

  handleTyping(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <p>
          The input is: {this.state.state}
        </p>
        <input type="text" 
        value={this.state.value}
        onChange={this.handleTyping} 
        onKeyDown={this.handleTyping}
        onFocus={(e) => this.setState({state: FOCUS_STATE})}
        onBlur={(e) => this.setState({state: FOCUS_OUT_STATE})}
        />

        <p>
          Value: <b>{this.state.value}</b>
        </p>

        <img src="https://miro.medium.com/max/607/1*WCns9IAIsOAYvh9arVVrkA.jpeg"/>
      </div>
    );
  }
}