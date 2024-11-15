import { ResolveFn } from '@angular/router';

export const routeResolverResolver: ResolveFn<boolean> = async (route) => {

  const todoId = route.paramMap.get('id');

  if (!todoId) {
    throw new Error('Todo ID is missing in the route!');
  }

  // Fetch the todo from the API
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch the todo');
  }

  return await response.json();
};
