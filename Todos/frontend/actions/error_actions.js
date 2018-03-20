
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveErrors = function(errors) {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = function() {
  return {
    type: CLEAR_ERRORS,
    errors: []
  };
};
