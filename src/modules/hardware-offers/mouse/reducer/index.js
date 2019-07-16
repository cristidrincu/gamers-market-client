import * as actionTypes from '../actionTypes';

const INITIAL_STATE = {
  loading: false,
  error: null,
  hardwareOffersMouse: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOADING_HARDWARE_OFFERS_MOUSE:
      return {
          ...state,
        loading: !state.loading
      };
    case actionTypes.HARDWARE_OFFERS_MOUSE_SUCCESS:
      return {
          ...state,
        loading: false,
        hardwareOffersMouse: action.payload
      };
    case actionTypes.HARDWARE_OFFERS_MOUSE_FAILURE:
      return {
          ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}