import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import AuthenticationReducer from './modules/authentication/reducer';
import UserRegistrationReducer from './modules/registration/reducer';
import UserPasswordRecoveryReducer from './modules/password-recovery/reducer';
import UserPasswordResetReducer from './modules/password-reset/reducer';
import UserProfileReducer from './modules/user/reducer';
import UserDetailsReducer from './modules/user/reducer';

const appReducer = combineReducers({
	form: reduxFormReducer,
	routing: routerReducer,
	authentication: AuthenticationReducer,
	// registration: UserRegistrationReducer,
	// passwordRecovery: UserPasswordRecoveryReducer,
	// passwordReset: UserPasswordResetReducer,
	// user: UserProfileReducer,
	// userDetails: UserDetailsReducer
});

//RESET ENTIRE GLOBAL STATE TREE AFTER USER LOGS OUT
const rootReducer = (state, action) => {
	if (action.type === 'UNAUTHENTICATE') {
		state = undefined;
	}

	return appReducer(state, action);
};

export default rootReducer;
