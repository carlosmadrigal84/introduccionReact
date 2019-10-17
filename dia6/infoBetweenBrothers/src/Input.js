import React from 'react';
import MainContext from './MainContext';

export default class Input extends React.Component {
  handleOnKeyUp = (e) => {
    const value = e.target.value;

    if (e.keyCode === 13) {
      this.context.onSubmit(value);
    }
  }

  render() {
    return <input type="text" onKeyUp={this.handleOnKeyUp}/>
  }
}

Input.contextType = MainContext;
