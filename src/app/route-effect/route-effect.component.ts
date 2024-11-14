import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-route-effect',
  standalone: true,
  imports: [],
  template: `
    <h1>Title {{ todo()?.title }}</h1>
  `,
  styles: ``
})
export class RouteEffectComponent {

  todo = signal<any>(undefined);
  route = inject(ActivatedRoute);
  id = toSignal(this.route.paramMap.pipe(
    map(params => params.get('id'))
  ));

  constructor() {
    effect(() => {
      const todoId = this.id();
      fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => response.json())
        .then(todo => this.todo.set(todo));
    });
  }

}
