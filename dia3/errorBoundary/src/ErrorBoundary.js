import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="snap">
          <div className="snap-message">
            <p>We're sorry - something's gone wrong.</p>
            <p>
              Our team has been notified, but click <button>here</button> to
              fill out a report.
            </p>
          </div>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, n: 0 };
  }

  getCount() {
    if (this.state.n > 3) throw new Error("woops");
    return `(${this.state.n})`;
  }

  handleClick = () => {
    this.setState({ n: this.state.n + 1 });
  };

  render() {
    return (
      <div>
        <div>Counter widget {this.getCount(this.state.n)}</div>
        <button onClick={this.handleClick}>Click me a few times</button>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="app">
          <div className="sidebar">
            <h2>Sidebar</h2>
            <Widget />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
