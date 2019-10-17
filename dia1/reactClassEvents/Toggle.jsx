import React, { Component } from 'react';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClickBinded = this.handleClickBinded.bind(this);
  }

  // Este método es el clasico, es necesario hacer el bind que se aprecia
  // en el constructor
  handleClickBinded() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // Este método es menos usado, tiene la característica que cada vez que se hace
  // click, se genera un callback distinto, pudiendo perder referencia si este
  // componente se renderiza internamente
  handleClickThroughEvent() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // Esta sintaxis es experimental, pero es la más limpia, así que hay que usarla
  // con cuidado
  handleClickClassProperty = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickBinded}>
          With binding!
        </button>

        <button onClick={(e) => this.handleClickBinded()}>
          With event creation!
        </button>

        <button onClick={this.handleClickClassProperty}>
          With class property!
        </button>

        <p>
          The state of the button is: {this.state.isToggleOn ? 'ON' : 'OFF'}
        </p>
      </div>
    );
  }
}