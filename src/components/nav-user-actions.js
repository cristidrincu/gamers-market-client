import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { unauthenticateUser } from '../modules/authentication/actions';
import { showResetPasswordModal } from '../modules/password-reset/actions';
import { showProfileModal } from '../modules/user/actions';

const inlineStyle = {
	cursor: 'pointer'
};

class NavUserActions extends Component {

	showProfileModal() {
		return this.props.dispatch(showProfileModal());
	}

	showResetPasswordModal() {
		return this.props.dispatch(showResetPasswordModal());
	}

	logOut() {
		return this.props.dispatch(unauthenticateUser());
	};
	
	render() {
		let firstName = this.props.user ? this.props.user.contact.firstName : '';
		let userRole = this.props.user ? this.props.user.account.role : '';
		
		return (
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown">
						<button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">{ firstName }</button>
						<div className="dropdown-menu dropdown-menu-right">
							<a href="#" className="dropdown-item" onClick={ () => this.showProfileModal() }>Profile</a>
							<a href="#" className="dropdown-item" onClick={ () => this.showResetPasswordModal() }>Change password</a>
							<div className="dropdown-divider"></div>
							<button className="dropdown-item" style={ inlineStyle } onClick={() => this.logOut() }>Log out</button>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

NavUserActions.defaultProps = {
	user: {}
};

NavUserActions.propTypes = {
	user: PropTypes.object,
	dispatch: PropTypes.func
};

export default NavUserActions;
