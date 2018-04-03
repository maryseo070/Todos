import { RECEIVE_ERRORS, CLEAR_ERRORS, receiveErrors, clearErrors } from '../actions/error_actions.js';

const initialState = [];

export const errorReducer = function(oldState = initialState, action) {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return oldState.concat(action.errors);
    case CLEAR_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};
