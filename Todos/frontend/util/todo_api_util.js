export const fetchTodos = () => {
  return $l.ajax ({
    url: '/api/todos',
    method: 'GET'
  });
};

export const addTodo = (newTodo) => {
  return $l.ajax({
    url: '/api/todos',
    method: 'POST',
    data: {todo: newTodo}
  });
};

export const destroyTodo = (todo) => {
  const url = `/api/todos/${todo.id}`;
  return $l.ajax({
    url: url,
    method: 'DELETE'
  });
};

export const toggleDone = (todo) => {
  const url = `/api/todos/${todo.id}`;
  return $l.ajax({
    url: url,
    method: 'PUT',
    data: { todo: todo }
  });
};
