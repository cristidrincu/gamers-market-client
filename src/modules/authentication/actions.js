import { browserHistory } from 'react-router';
import { SubmissionError } from 'redux-form';
import axios from 'axios';
import {
	UNAUTHENTICATE, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILURE
} from './actionTypes';

export const authenticateGamer = (formFields) => {
	return dispatch => {
		return axios.post('/accounts/authenticate', formFields)
			.then(response => {
				dispatch(authenticationSuccess(response.data));
			})
			.catch(result => {
				console.log(result);
				if (result.response.data.validationErrors) {
					throw new SubmissionError({ account: { password: 'Incorrect password' } });
				} else {
					dispatch(authenticationFailure(result.response.data));
				}
			});
	};
};

export const unauthenticateGamer = () => {
	localStorage.removeItem('authenticationToken');
	localStorage.removeItem('gamer');
	
	return (dispatch) => {
		dispatch({
			type: UNAUTHENTICATE,
			payload: null
		});
		browserHistory.push('/');
	};
	
};

export const authenticationSuccess = data => {
	let _gamer = {
		account: {
			email: data.gamer.email
		},
		contact: {
			firstName: data.gamer.firstName,
			lastName: data.gamer.lastName
		}
	};
	localStorage.setItem('authenticationToken', data.authenticationToken);
	localStorage.setItem('gamer', JSON.stringify(_gamer));
	
	return {
		type: AUTHENTICATION_SUCCESS,
		payload: null
	};
};

export const authenticationFailure = error => {
	return {
		type: AUTHENTICATION_FAILURE,
		payload: error
	};
};
