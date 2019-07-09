import { browserHistory } from 'react-router';
import { SubmissionError } from 'redux-form';
import axios from 'axios';
import {
	UNAUTHENTICATE, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILURE
} from './actionTypes';

export const authenticateUser = (formFields) => {
	return dispatch => {
		return axios.post('/gamers/authenticate', formFields)
			.then(response => {
				dispatch(authenticationSuccess(response.data));
			})
			.catch(result => {
				if (result.response.data.validationErrors) {
					throw new SubmissionError({ account: { password: 'Incorrect password' } });
				} else {
					dispatch(authenticationFailure(result.response.data));
				}
			});
	};
};

export const unauthenticateUser = () => {
	localStorage.removeItem('authenticationToken');
	localStorage.removeItem('user');
	localStorage.removeItem('product');
	
	return (dispatch) => {
		dispatch({
			type: UNAUTHENTICATE,
			payload: null
		});
		browserHistory.push('/');
	};
	
};

export const authenticationSuccess = data => {
	let _user = {
		account: {
			email: data.user.email,
			secondaryEmail: data.user.secondaryEmail,
			role: data.user.role
		},
		contact: {
			firstName: data.user.firstName,
			lastName: data.user.lastName,
			phoneNumber: data.user.phoneNumber
		},
		company: {
			name: data.user.companyName,
			marketSector: data.user.companyMarketSector,
			city: data.user.companyCity,
			country: data.user.companyCountry,
			address: data.user.companyAddress,
			nrOfEmployees: data.user.companyNrOfEmployees
		}
	};
	localStorage.setItem('authenticationToken', data.authenticationToken);
	localStorage.setItem('user', JSON.stringify(_user));
	
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
