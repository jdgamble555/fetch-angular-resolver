import { Routes } from '@angular/router';
import { RouteEffectComponent } from './route-effect/route-effect.component';
import { RouteResolverComponent } from './route-resolver/route-resolver.component';
import { routeResolverResolver } from './route-resolver/route-resolver.resolver';

export const routes: Routes = [
    { path: 'route-effect/:id', component: RouteEffectComponent },
    { path: 'route-resolver/:id', component: RouteResolverComponent, resolve: { data: routeResolverResolver } }
];
