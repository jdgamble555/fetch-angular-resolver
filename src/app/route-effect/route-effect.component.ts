import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { derivedAsync } from 'ngxtension/derived-async';
import { injectParams } from 'ngxtension/inject-params';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

@Component({
  selector: 'app-route-effect',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="flex flex-col gap-3 items-center">
      <h1>{{ todo()?.title }}</h1>

      <div class="flex gap-3 items-center">
        <a
          class="border p-2 rounded-lg"
          [routerLink]="['/route-effect', prevId()]"
        >
          Prev
        </a>
        <a
          class="border p-2 rounded-lg"
          [routerLink]="['/route-effect', nextId()]"
        >
          Next
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class RouteEffectComponent {
  
  id = injectParams('id');

  idNumber = computed(() => Number(this.id()));

  todo = derivedAsync<Todo>(() =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.id()}`).then(
      (response) => response.json()
    )
  );

  prevId = computed(() => Math.max(this.idNumber() - 1, 1));
  nextId = computed(() => this.idNumber() + 1);
}
