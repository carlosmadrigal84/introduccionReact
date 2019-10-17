import React from 'react';
import Timer from './components/timer/Timer'
import './App.css';
import BinaryRepresentation from './components/binary_representation/BinaryRepresentation';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">The incredible super timer</h1>
        <header className="App-header">
          <Timer/>
          <BinaryRepresentation></BinaryRepresentation>
        </header>
      </div>
    );
  }
}

export default App;
