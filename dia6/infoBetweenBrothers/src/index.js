import React, { Component } from "react";
import { render } from "react-dom";
import Title from "./Title";
import Input from "./Input";

import MainContext from "./MainContext";

import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  onTitleChange = text => {
    this.setState({
      title: text
    });
  };

  render() {
    const value = {
      title: this.state.title,
      onSubmit: this.onTitleChange
    };

    return (
      <div>
        <MainContext.Provider value={value}>
          <Title />
          <Input />
        </MainContext.Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
