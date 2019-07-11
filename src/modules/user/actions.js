import axios from 'axios';
import { SubmissionError } from 'redux-form';
import ReqBodyValidator from '../../services/ReqBodyValidator';
import * as actionTypes from './actionTypes';

export const loadFormData = () => {
	return {
		type: actionTypes.LOAD_FORM_DATA,
		payload: JSON.parse(localStorage.getItem('gamer'))
	};
};

export const updateUser = formFields => {
	return dispatch => {
		return axios.put('/users', formFields)
			.then(result => {
				dispatch(updateUserSuccess(result.data));
			})
			.catch(result => {
					if (result.response.data.validationErrors) {
						let validationErrors = {};
						result.response.data.validationErrors.forEach((error) => {
							if (error.path === 'email') {
								validationErrors.account = { email: error.message };
							}
						});
						throw new SubmissionError(validationErrors);
					} else if (result.response.data.validationErrors) { //errors coming from express-validator middleware - deals with sanitizing and validating request bodies
						throw new SubmissionError(ReqBodyValidator.parseReqBodyValidationErrorsUser(result.response.data.validationErrors));
					} else {
						dispatch(updateUserFailure(result.response.data));
					}
			});
	};
};

export const updateUserRole = (email, { role }) => {
	return dispatch => {
		return axios.put('/administrator/users', { email, role })
			.then(result => {
				dispatch(updateUserRoleSuccess(result.data));
			})
			.catch(error => {
				dispatch(updateUserRoleFailure(error.message));
			});
	}	
};

export const updateUserSuccess = data => {
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
	localStorage.setItem('gamer', JSON.stringify(_user));
	
	return {
		type: actionTypes.USER_UPDATE_SUCCESS,
		payload: _user
	};
};

export const updateUserFailure = error => {
	return {
		type: actionTypes.USER_UPDATE_FAILURE,
		payload: error
	};
};

export const updateUserRoleSuccess = data => {
	return {
		type: actionTypes.USER_ROLE_UPDATE_SUCCESS,
		payload: data
	}
};

export const updateUserRoleFailure = error => {
	return {
		type: actionTypes.USER_ROLE_UPDATE_FAILURE,
		payload: error
	}
};

export const updateUserPassword = formFields => {
	return dispatch => {
		return axios.put('/users/password', formFields)
			.then(() => {
				dispatch(updateUserPasswordSuccess());
			})
			.catch(result => {
				if (!result.response.data.validationErrors) {
					dispatch(updateUserPasswordFailure(result.response.data));
				}
			});
	}
};

export const updateUserPasswordSuccess = () => {
	return {
		type: actionTypes.USER_PASSWORD_UPDATE_SUCCESS,
		payload: null
	};
};

export const updateUserPasswordFailure = error => {
	return {
		type: actionTypes.USER_PASSWORD_UPDATE_FAILURE,
		payload: error
	};
};

export const getUserDetailsSuccess = data => {
	return {
		type: actionTypes.GET_USER_DETAILS_SUCCESS,
		payload: data
	}
};

export const getUserDetailsError = error => {
	return {
		type: actionTypes.GET_USER_DETAILS_ERROR,
		payload: error
	}
};

export const gettingUsers = () => {
	return {
		type: actionTypes.GETTING_USER_TYPES,
		payload: null
	}
};

export const getUserTypesSuccess = data => {
	return {
		type: actionTypes.GET_USER_TYPES_SUCCESS,
		payload: data
	}
};

export const getUsersForSupportSuccess = data => {
	return {
		type: actionTypes.GET_USERS_FOR_SUPPORT_SUCCESS,
		payload: data
	}
};

export const getUsersForMarketingSuccess = data => {
	return {
		type: actionTypes.GET_USERS_FOR_MARKETING_SUCCESS,
		payload: data
	}
};

export const getUserTypesError = error => {
	return {
		type: actionTypes.GET_USER_TYPES_ERROR,
		payload: error
	}
};

export const getUsersForSupportError = error => {
	return {
		type: actionTypes.GET_USERS_FOR_SUPPORT_ERROR,
		payload: error
	}
};

export const getUsersForMarketingError = error => {
	return {
		type: actionTypes.GET_USERS_FOR_MARKETING_ERROR,
		payload: error
	}	
};

export const getUsersBasedOnRole = (role) => {
	return dispatch => {
		return axios.get(`/users/${role}`)
			.then(result => {
				dispatch(getUserTypesSuccess(result.data));
			})
			.catch(error => {
				dispatch(getUserTypesError(error));
			});
	}
};

export const getUsersForSupport = () => {
	return dispatch => {
		return axios.get('/support/users')
			.then(result => {
				dispatch(getUsersForSupportSuccess(result.data));
			})
			.catch(error => {
				dispatch(getUsersForSupportError(error.message));
			});
	}
};

export const getUsersForMarketing = () => {
	return dispatch => {
		return axios.get('/marketing/users')
			.then(result => {
				dispatch(getUsersForMarketingSuccess(result.data));
			})
			.catch(error => {
				dispatch(getUsersForMarketingError(error.message));
			});
	}
};

export const deleteUserSuccess = data => {
	return {
		type: actionTypes.DELETE_USER_SUCCESS,
		payload: data.message
	}
};

export const deleteUserFailure = error => {
	return {
		type: actionTypes.DELETE_USER_ERROR,
		payload: error
	}
};

export const deleteUser = userId => {
	return dispatch => {
		return axios.delete(`/users/${userId}`)
			.then(result => {
				dispatch(deleteUserSuccess(result.data));
			})
			.catch(error => {
				dispatch(deleteUserFailure(error.message));
			});
	}
};

export const showProfileModal = () => {
	return {
		type: actionTypes.SHOW_PROFILE_MODAL,
		payload: null
	}
};

export const hideProfileModal = () => {
	return {
		type: actionTypes.HIDE_PROFILE_MODAL,
		payload: null
	}
};

export const getUserProductsSupport = user_id => {
	return dispatch => {
		return axios.get(`/support/user/products/${user_id}`)
			.then(result => {
				dispatch(getUserProductsSuccess(result.data));
			})
			.catch(error => {
				dispatch(getUserProductsError(error.message));
			});
	}
};

export const gettingUserProducts = () => {
	return {
		type: actionTypes.GETTING_USER_PRODUCTS,
		payload: null
	}
};

export const getUserProductsSuccess = data => {
	return {
		type: actionTypes.GET_USER_PRODUCTS_SUCCESS,
		payload: data
	}
};

export const getUserProductsError = error => {
	return {
		type: actionTypes.GET_USER_PRODUCTS_ERROR,
		payload: error
	}
};

export const updateUserRoleAdministratorSection = role => {
	return {
		type: actionTypes.SET_USER_ROLE_ADMIN_SECTION,
		payload: role
	}
};

export const resetUserDetailsState = () => {
	return {
		type: actionTypes.RESET_USER_DETAILS_STATE,
		payload: null
	}
};
