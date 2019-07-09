import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavUserActions from './nav-user-actions';

class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand fixed-top">
				<span className="navbar-brand" />
				{/*{this.props.authentication && this.props.authentication.status === 'authenticated' ? <NavUserActions {...this.props} /> : ''}*/}
				<ul className="navbar-nav ml-auto">
          <a className="btn btn-light">Logheaza-te</a>
          <a className="btn btn-light ml-2">Creaza-ti un cont</a>
				</ul>
			</nav>
		);
	}
}

Nav.propTypes = {
	authentication: PropTypes.object.isRequired
}

export default Nav;
