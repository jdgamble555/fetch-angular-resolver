import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectResolverSignal } from './route-resolver.resolver';

@Component({
  selector: 'app-route-resolver',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Title {{ todo()?.title }}</h1>

    <div>
      <a [routerLink]="['/t', prevId()]">Prev</a>
      <a [routerLink]="['/t', nextId()]">Next</a>
    </div>
  `,
  styles: ``,
})
export class RouteResolverComponent {
  // Signal to hold the raw resolved data
  todo = injectResolverSignal<any>('data');

  id = computed(() => this.todo().id);

  prevId = computed(() => Math.max(this.id() - 1, 1));
  nextId = computed(() => this.id() + 1);
}
