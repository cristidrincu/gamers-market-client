import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  status: null,
  error: null,
  loading: false
};

export default (action, state = INITIAL_STATE) => {
  let error;
  switch(action.type) {
    case actionTypes.UNAUTHENTICATE:
      return INITIAL_STATE;
    case actionTypes.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        status: 'authenticated',
        error: null,
        loading: false
      };
    case actionTypes.AUTHENTICATION_FAILURE:// return error and make loading = false
      error = action.payload.data || { message: action.payload.message }; //2nd one is network or server down errors
      return {
        ...state,
        status: 'failed',
        error: error,
        loading: false
      };
    default:
      return state;
  }
}
