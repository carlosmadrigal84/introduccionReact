import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      date: new Date()
    };
    console.log(`Timer ${this.state.name} built.`)
  }

  componentWillMount() {
    console.log(`Timer ${this.state.name} pre-mounted.`)
  }
  
  componentDidMount() {
    console.log(`Timer ${this.state.name} mounted.`)
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log(`Timer ${this.state.name} unmounted.`)
    clearInterval(this.timerID);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`Timer ${this.state.name} state's changed.`)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}