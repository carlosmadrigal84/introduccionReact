import React from 'react';
import PropTypes from 'prop-types';

export default class NameAndSurname extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      surname: props.surname
    }
  }

  onInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, surname } = this.state;

    return (
      <div>
        <h1>{name} {surname}</h1>

        <input
          type="text" 
          value={name}
          onChange={this.onInputChange}
          placeholder="Name"
          name="name"
        />

        <input
          type="text" 
          value={surname}
          onChange={this.onInputChange}
          placeholder="Surname"
          name="surname"
        />

        {
          this.props.nestedComponent
        }
      </div>
    )
  }
}

NameAndSurname.defaultProps = {
  name: 'Jesé',
  surname: 'Romero'
}

NameAndSurname.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string.isRequired
}
