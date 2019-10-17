import React, { Component } from 'react';

export default class ComponentWithPropsAndState extends Component {
  constructor() {
    this.state = {
      success: false
    };
    this.changeState();
  }

  changeState() {
    setTimeout(() => {
      this.setState({
        success: !this.state.success
      })
      this.changeState();
    }, 1000);
  }

  render() {
    return <div>
        Hi {this.props.name}, my state is:
          <span className={this.state.success ? "green" : "red"}>
            {this.state.success ? " Successful" : " Unsuccessful"}
          </span>
    </div>
  }
}