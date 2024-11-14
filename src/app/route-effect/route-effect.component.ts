import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-route-effect',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex flex-col gap-3">
      <h1>{{ todo()?.title }}</h1>

      <div class="flex gap-3">
        <a class="border p-2 rounded-lg" [routerLink]="['/route-effect', prevId()]">Prev</a>
        <a class="border p-2 rounded-lg" [routerLink]="['/route-effect', nextId()]">Next</a>
      </div>
    </div>
  `,
  styles: ``,
})
export class RouteEffectComponent {
  todo = signal<any>(undefined);
  route = inject(ActivatedRoute);
  id = toSignal(this.route.paramMap.pipe(map((params) => params.get('id'))));

  prevId = computed(() => Math.max(Number(this.id()) - 1, 1));
  nextId = computed(() => Number(this.id()) + 1);

  constructor() {
    effect(() => {
      const todoId = this.id();
      fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then((response) => response.json())
        .then((todo) => this.todo.set(todo));
    });
  }
}
