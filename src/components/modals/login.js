import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { authenticateGamer } from "../../modules/authentication/actions";
import { loadFormData } from "../../modules/user/actions";

class LoginModal extends Component {

  submit = (values, dispatch) => {
    console.log(values);
    return dispatch(authenticateGamer(values)).then(() => {
      dispatch(loadFormData());
      this.props.toggleLoginModal();
    }).catch(error => {
      console.log(`Ne pare rau. A aparut o eroare. ${error.message}`);
    });
  };

  render() {
    const { handleSubmit, submitting, showLoginModal, toggleLoginModal } = this.props;
    return(
        <form id="login-modal" className="form modal fade" noValidate>
          <Modal backdrop="static" isOpen={ showLoginModal } toggle={ () => toggleLoginModal() } className="modal-dialog">
            <ModalHeader>Logheaza-te</ModalHeader>
            <ModalBody>
              <Field name="email" type="text" label="Adresa email" component="input" autoFocus />
              <Field name="password" type="password" label="Parola" component="input"/>
            </ModalBody>
            <ModalFooter>
              <button disabled={ submitting } onClick={ () => this.hideResetPasswordModal() }/>
              <button width='100px' onClick={handleSubmit(this.submit)}>{ !submitting ? 'Logheaza-te': 'Te rugam sa astepti...' }</button>
            </ModalFooter>
          </Modal>
        </form>
    );
  }

}

LoginModal = reduxForm({
  form: 'login'
})(LoginModal);

export default LoginModal;