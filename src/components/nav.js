import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { unauthenticateGamer } from "../modules/authentication/actions";
import LoginModal from '../components/modals/login';
import NavUserActions from './nav-user-actions';

class Nav extends Component {

	constructor() {
		super();
		this.state = {
			showLoginModal: false
		};

		this.toggleLoginModal = this.toggleLoginModal.bind(this);
	}

	toggleLoginModal() {
    this.setState((previousState) => ({
      ...previousState,
      showLoginModal: !previousState.showLoginModal
    }));
	}

	unauthenticateGamer() {
		return this.props.dispatch(unauthenticateGamer());
	}

	render() {
		return (
			<nav className="navbar navbar-expand fixed-top">
				<span className="navbar-brand" />
				{this.props.authentication && this.props.authentication.status ?
            <ul className="navbar-nav ml-auto">
              <Button color="link" onClick={() => console.log("Se incarca profilul tau")}>Profilul tau, { this.props.user ? this.props.user.contact.firstName : null }</Button>
              <Button color="link" onClick={() => this.unauthenticateGamer()}>Deconecteaza-te</Button>
            </ul> :
            <ul className="navbar-nav ml-auto">
              <Button color="link" onClick={() => this.toggleLoginModal()}>Logheaza-te</Button>
              <Button color="link">Creaza-ti un cont</Button>
            </ul>
				}
				<LoginModal showLoginModal = { this.state.showLoginModal } toggleLoginModal = { this.toggleLoginModal }/>
			</nav>
		);
	}
}

Nav.propTypes = {
	authentication: PropTypes.object.isRequired
};

export default Nav;
