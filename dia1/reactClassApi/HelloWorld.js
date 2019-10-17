import React, { Component } from 'react';

export default class HelloWorld extends Component {

  render() {
    const hello = React.createElement("p", null, "Hello");
    const world = React.createElement("p", null, "world");
    
    const container = React.createElement("div", null, [hello, world])

    let count = 0;
    React.Children.forEach(container, (el) => count = el.props.children.length);

    const countEl = React.createElement("p", null, `The container has ${count} elements`);

    const cloned = React.cloneElement(container, null, "This element is cloned");

    return React.createElement("div", null, [container, countEl, cloned]);
  }
}