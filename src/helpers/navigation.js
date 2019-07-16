import { browserHistory } from 'react-router';
import axios from 'axios';
import _ from 'lodash';

import * as authActions from '../modules/authentication/actions';
import { AUTHENTICATION_SUCCESS } from '../modules/authentication/actionTypes';
import UserRoles from '../constants/user-roles';

export default (dispatch) => {
	const authenticationToken = localStorage.getItem('authenticationToken');
	const userLocalStorage = JSON.parse(localStorage.getItem('user'));
	const pathsWithoutAuthorization = [/^\/$/, /^\/sign-up/, /^\/password-recovery/, /^\/register/, /^\/password-reset(.*)/];
	const isOnPathWithoutAuthorization = _.some(pathsWithoutAuthorization, (pathWithoutAuthorization) => {
		return pathWithoutAuthorization.test(window.location.pathname);
	});
	
	// if (!authenticationToken && !userLocalStorage) {
	// 	if (!isOnPathWithoutAuthorization) {
	// 		browserHistory.push('/');
	// 	}
	// } else {
	// 	// axios.post('/users/token/valid', {'authenticationToken': authenticationToken})
	// 	// 	.then(response => {
	// 	// 		if (response.data.hasExpired) {
	// 	// 			dispatch(authActions.unauthenticateGamer());
	// 	// 		} else {
	// 	// 			dispatch({ type: AUTHENTICATION_SUCCESS, payload: null });
	// 	// 		}
	// 	// 	});
	// 	//
	// 	// if (isOnPathWithoutAuthorization && (userLocalStorage.account.role === UserRoles.CLIENT || userLocalStorage.account.role === UserRoles.DEVELOPER)) {
	// 	// 	browserHistory.push('/products');
	// 	// }
	// 	//
	// 	// if (isOnPathWithoutAuthorization && userLocalStorage.account.role === UserRoles.ADMINISTRATOR) {
	// 	// 	browserHistory.push('/user-management');
	// 	// }
	// }
}
