import axios from "axios";
import * as actionTypes from "./actionTypes";

export const loadingHardwareOffersMouse = () => {
  return {
    type: actionTypes.LOADING_HARDWARE_OFFERS_MOUSE,
    payload: null
  }
};

export const loadHardwareOffersMouse = () => {
  return dispatch => {
    return axios.get("/gaming-mouse").then(response => {
      if (response.status === 200) {
        dispatch(loadHardwareOffersMouseSuccess(response.data))
      } else {
        dispatch(loadHardwareOffersMouseError(response.data));
      }
    })
  }
};

export const loadHardwareOffersMouseSuccess = data => {
  return {
    type: actionTypes.HARDWARE_OFFERS_MOUSE_SUCCESS,
    payload: data
  }
};

export const loadHardwareOffersMouseError = data => {
  return {
    type: actionTypes.HARDWARE_OFFERS_MOUSE_FAILURE,
    payload: data
  }
};