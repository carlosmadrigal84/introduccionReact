import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleForm from './SimpleForm';
import MultipleInputForm from './MultipleInputForm';
import UncontrolledForm from './UncontrolledForm';
import FileInput from './FileInput';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple form</h1>
        <SimpleForm />
        <h1>Simple form with validation</h1>
        <SimpleForm withValidation={true}/>
        <h1>Multiple input form</h1>
        <MultipleInputForm />
        <h1>Uncontrolled form</h1>
        <UncontrolledForm />
        <h1>File input</h1>
        <FileInput />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
