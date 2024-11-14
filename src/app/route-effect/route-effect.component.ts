import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-route-effect',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex flex-col gap-3 items-center">
      <h1>{{ todo()?.title }}</h1>

      <div class="flex gap-3 items-center">
        <a class="border p-2 rounded-lg" [routerLink]="['/route-effect', prevId()]">Prev</a>
        <a class="border p-2 rounded-lg" [routerLink]="['/route-effect', nextId()]">Next</a>
      </div>
    </div>
  `,
  styles: ``,
})
export class RouteEffectComponent {

  todo = signal<any>(undefined);  

  id = injectParams('id');

  prevId = computed(() => Math.max(Number(this.id()) - 1, 1));
  nextId = computed(() => Number(this.id()) + 1);

  constructor() {
    effect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${this.id()}`)
        .then((response) => response.json())
        .then((todo) => this.todo.set(todo));
    });
  }
}


export function injectParams<T>(key: string) {

  const route = inject(ActivatedRoute);

  return toSignal(route.paramMap.pipe(map((params) => params.get(key))));
}