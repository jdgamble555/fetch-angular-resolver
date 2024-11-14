import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectResolverSignal } from './route-resolver.resolver';

type Todo = {
  id: number;
  title: string;
}

@Component({
  selector: 'app-route-resolver',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex flex-col gap-3">
      <h1>{{ todo()?.title }}</h1>

      <div class="flex gap-3">
        <a
          class="border p-2 rounded-lg"
          [routerLink]="['/route-resolver', prevId()]"
        >
          Prev
        </a>
        <a
          class="border p-2 rounded-lg"
          [routerLink]="['/route-resolver', nextId()]"
        >
          Next
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class RouteResolverComponent {
  // Signal to hold the raw resolved data
  todo = injectResolverSignal<Todo>('data');

  id = computed(() => this.todo()!.id);

  prevId = computed(() => Math.max(this.id() - 1, 1));
  nextId = computed(() => this.id() + 1);
}
