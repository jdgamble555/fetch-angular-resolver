import { Routes } from '@angular/router';
import { RouteEffectComponent } from './route-effect/route-effect.component';
import { RouteResolverComponent } from './route-resolver/route-resolver.component';
import { routeResolverResolver } from './route-resolver/route-resolver.resolver';

export const routes: Routes = [
    { path: 'todos/:id', component: RouteEffectComponent },
    { path: 't/:id', component: RouteResolverComponent, resolve: { data: routeResolverResolver } },
    { path: '', redirectTo: '/t/1', pathMatch: 'full' }
];
