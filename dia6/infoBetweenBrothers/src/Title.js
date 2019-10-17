import React from 'react';
import MainContext from './MainContext';

export default class Title extends React.Component {
  render() {
    return <h2>{this.context.title}</h2>
  }
}

Title.contextType = MainContext;