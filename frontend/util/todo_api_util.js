export const fetchTodos = () => {
  return $.ajax ({
    url: '/api/todos',
    method: 'GET'
  });
};

export const addTodo = (newTodo) => {
  return $.ajax({
    url: '/api/todos',
    method: 'POST',
    data: {todo: newTodo}
  });
};

export const destroyTodo = (todo) => {
  const url = `/api/todos/${todo.id}`;
  return $.ajax({
    url: url,
    method: 'DELETE'
  });
};

export const toggleDone = (todo) => {
  const url = `/api/todos/${todo.id}`;
  return $.ajax({
    url: url,
    method: 'PUT',
    data: { todo: todo }
  });
};
