import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FormSearch ({ onChangeText, remaningQueries }) {
  return (
		<div className="navbar-start width100">
			<div className="navbar-item width100 is-expanded">
				<div className="field search width100">
					<div className="control">
           <input className="input is-primary"  onChange={onChangeText} id="search" type="search" placeholder="Search a Movie.." />
         	</div>
       	</div>
     	</div>
     	<div className="navbar-item is-expanded">
     		<label className="label">{remaningQueries}</label>
			</div>
    </div>
 )
}

FormSearch.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  remaningQueries: PropTypes.number.isRequired
}

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBurguer: false,
    }
    this.toggleBurguer = this.toggleBurguer.bind(this);
  }
 
  toggleBurguer() {
    this.setState({
      activeBurguer: !this.state.activeBurguer
    })
  }

  render() {
    const { activeBurguer } = this.state;
    const { showSearch } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item " href="/">
              <span role="img" aria-label="Movies" className="bd-emoji">🍿</span> &nbsp;<span className="title-logo">Movies</span>
            </a>
            <div className={`navbar-burger burger ${activeBurguer === true ? 'is-active' : null}`} onClick={this.toggleBurguer} data-target="navMenubd-example">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenubd-example" className={`navbar-menu ${activeBurguer === true ? 'is-active' : null}`}>
            <div className="navbar-start">
              <Link className="navbar-item " to='/home'><span role="img" aria-label="Home" className="bd-emoji">🏠</span> &nbsp;Home</Link>
            </div>
            <div className="navbar-start">
              <Link className="navbar-item " to='/profile'><span role="img" aria-label="Profile" className="bd-emoji">🙍</span> &nbsp;Profile</Link>
            </div>
            {showSearch
              ? <FormSearch text={this.props.text} onChangeText={this.props.onChangeText} remaningQueries={parseInt(this.props.remaningQueries)} imageBaseURL={this.props.imageBaseURL}/>
              : null
            }
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

Navbar.propTypes = {
  showSearch: PropTypes.bool.isRequired,
}