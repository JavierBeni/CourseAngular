import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: USUARIO_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// @NgModule({
//     imports: [RouterModule.forRoot(app_routes)],
//     exports: [RouterModule]
// })

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

// export class AppRoutingModule { }
