import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectRouteData } from 'ngxtension/inject-route-data';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-route-resolver',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex flex-col gap-3 items-center">
      <h1>{{ todo()?.title }}</h1>

      <div class="flex gap-3 items-center">
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

  todo = injectRouteData<Todo>('data');

  idNumber = computed(() => this.todo()!.id);

  prevId = computed(() => Math.max(this.idNumber() - 1, 1));
  nextId = computed(() => this.idNumber() + 1);
}
