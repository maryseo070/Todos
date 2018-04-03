export const allTodos = function(state) {
  return Object.values(state.todos);
};

export const allErrors = function(state) {
  return state.errors;
};
