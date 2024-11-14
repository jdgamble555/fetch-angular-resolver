import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, ResolveFn } from '@angular/router';
import { map } from 'rxjs';

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

  const todo = await response.json();

  return todo;
};

export const injectResolver = <T>(name: string) =>
  inject(ActivatedRoute).data.pipe<T>(map(r => r[name]));

export const injectResolverSignal = <T>(name: string) =>
  toSignal<T>(injectResolver(name));