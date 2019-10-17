import React, { Component } from 'react';

export default class ComponentWithProps extends Component {
  render() {
    return <div>
        Welcome {this.props.name}
    </div>
  }
}