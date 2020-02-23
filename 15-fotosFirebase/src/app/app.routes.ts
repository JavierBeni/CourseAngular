import { Routes, RouterModule } from '@angular/router';
import { FotosComponent } from './components/fotos/fotos.component';


const RUTAS: Routes = [
    { path: 'fotos', component: FotosComponent },
    { path: 'carga', component: FotosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'fotos' }
];


export const APP_ROUTES = RouterModule.forRoot(RUTAS);