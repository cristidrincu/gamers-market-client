import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Form, Validator, unflatten} from '../../../helpers/form';
import formFields from '../../../constants/formFields';
import {resetPassword} from '../actions';
import SuccessButton from "../../../components/buttons/success_button";

const validate = values => {
    const validator = new Validator(values,
        {
            'account.password': ['required', 'min: 6'],
            'account.passwordCheck': ['required', 'same:account.password']
        },
        {
            'same.account.passwordCheck': 'Passwords do not match'
        });
    return (validator.fails() ? unflatten(validator.errors.all()) : {});
};

class PasswordReset extends Component {
    submit = (values, dispatch) => {
        return dispatch(resetPassword(values)).then(() => {
            if (this.props.passwordReset.status === 'resetted') {
                new PNotify({text: 'Your password has been changed.', type: 'success'});
                browserHistory.push('/');
            }
            if (this.props.passwordReset.status === 'failed') {
                new PNotify({text: this.props.passwordReset.error.message, type: 'error'});
            }
        });
    };

    render() {
        const {handleSubmit, submitting} = this.props;

        return (
            <main id="password-recovery" className="w-100 h-100">
                <div className="container h-100">
                    <div className="row h-100 d-flex justify-content-center align-items-center">
                        <div className="col-4 log-in">
                            <div className="card z-depth-1">
                                <div className="card-body">
                                    <h4 className="card-title">Password reset</h4>
                                    <form noValidate>
                                        <Form.hidden name="passwordResetToken"/>
                                        <Form.password name={formFields.account.password} label="New password"
                                                       autoFocus/>
                                        <Form.password name={formFields.account.passwordCheck}
                                                       label="Re-type new password"/>
                                        <SuccessButton width='100px' text={!submitting ? 'Change' : 'Changing...'}
                                                       disabled={submitting}
                                                       onClick={handleSubmit(this.submit)}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        initialValues: {
            passwordResetToken: ownProps.params.passwordResetToken,
            account: {'password': '', 'passwordCheck': ''}
        },
        passwordReset: state.passwordReset
    }
};

PasswordReset.propTypes = {
    initialValues: PropTypes.object.isRequired,
    passwordReset: PropTypes.object.isRequired
};

PasswordReset = reduxForm({
    form: 'password-reset',
    validate
})(PasswordReset);
PasswordReset = connect(mapStateToProps)(PasswordReset);

export default PasswordReset;
