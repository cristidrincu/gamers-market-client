import axios from 'axios';
import * as actionTypes from './actionTypes';

export const resetPassword = formFields => {
	return dispatch => {
		return axios.post('/users/password-reset', formFields)
			.then(response => {
				dispatch(resetPasswordSuccess(response.data));
			})
			.catch(result => {
				if (!result.response.data.validationErrors) {
					dispatch(resetPasswordFailure(result.response.data));
				}
			});
	};
};

export const resetPasswordSuccess = data => {
	return {
		type: actionTypes.PASSWORD_RESET_SUCCESS,
		payload: data
	}
};

export const resetPasswordFailure = error => {
	return {
		type: actionTypes.PASSWORD_RESET_FAILURE,
		payload: error
	};
};

export const showResetPasswordModal = () => {
	return {
		type: actionTypes.SHOW_PASSWORD_RESET_MODAL,
		payload: null
	}
};

export const hideResetPasswordModal = () => {
	return {
		type: actionTypes.HIDE_PASSWORD_RESET_MODAL,
		payload: null
	}
};
