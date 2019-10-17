import React, { Component } from 'react';
import { render } from 'react-dom';
import { createKey, setKeyValue, hit, getKey } from './CountAPIService'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.createKey = this.createKey.bind(this);
    this.resetKey = this.resetKey.bind(this);
    this.hit = this.hit.bind(this);
    this.getKey = this.getKey.bind(this);
  }

  handleChange(event) {
    this.setState({
      key: event.target.value
    })
  }

  createKey() {// llamar a la API
    createKey(this.state.key).then((data) => this.setState({data: data}))
  }

  resetKey() {// 
    setKeyValue(this.state.key, 0).then((data) => this.setState({data: data}))
  }

  hit() {
    hit(this.state.key).then((data) => this.setState({data: data}))
  }

  getKey() {
    getKey(this.state.key).then((data) => this.setState({data: data}))
  }

  render() {
    const bottomMargin = {
      marginBottom: "10px"
    };

    const hasData = this.state.data && Object.keys(this.state.data);

    return (
      <div>
        <div>
        <input style={bottomMargin} type="text" onChange={this.handleChange}/>
        </div>
        <div style={bottomMargin}>
          <button onClick={this.createKey}>Create key</button>
        </div>
        <div style={bottomMargin}>
          <button onClick={this.resetKey}>Reset key</button>
        </div>
        <div style={bottomMargin}>
          <button onClick={this.hit}>Hit key</button>
        </div>
        <div style={bottomMargin}>
          <button onClick={this.getKey}>Get key</button>
        </div>
        {hasData &&
        <div>
          <h1>Result</h1>
          {Object.keys(this.state.data).map((key) => <p><b>{key}</b>: {this.state.data[key]}</p>)}
        </div>}

        {!hasData &&
        <p>Make some actions to see the results</p>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
