import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  status: null,
  error: null,
  loading: false,
  gamer: null,
  showProfileModal: false
};

export default (state = INITIAL_STATE, action) => {
  let error;
  switch(action.type) {
    case actionTypes.LOAD_FORM_DATA:
      return {
        ...state,
        status: 'loaded',
        error: null,
        loading: false,
        gamer: action.payload
      };
    case actionTypes.USER_UPDATE_SUCCESS:
      return {
        ...state,
        status: 'updated',
        error: null,
        loading: false,
        gamer: action.payload
      };
    case actionTypes.USER_UPDATE_FAILURE:
      error = action.payload.data || { message: action.payload.message }; //2nd one is network or server down errors
      return {
        ...state,
        status: 'failed',
        error: error,
        loading: false,
        gamer: localStorage.getItem('user')
      };
    case actionTypes.SHOW_PROFILE_MODAL:
      return {
        ...state,
        showProfileModal: true
      };
    case actionTypes.HIDE_PROFILE_MODAL:
      return {
        ...state,
        showProfileModal: false
      };
    default:
      return state;
  }
}
