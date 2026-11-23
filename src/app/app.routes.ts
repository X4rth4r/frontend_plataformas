import { Routes } from '@angular/router';
import { ciencia_ficcion } from './ciencia_ficcion/ciencia_ficcion';
import { romance } from './romance/romance';
import { filosofia } from './filosofia/filosofia';
import { terror } from './terror/terror';
import { formulario } from './formulario/formulario';
import { Login } from './login/login';
import { Registro } from './registro/registro';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'terror', component: terror },
  { path: 'ciencia_ficcion', component: ciencia_ficcion },
  { path: 'romance', component: romance },
  { path: 'filosofia', component: filosofia },
  { path: 'formulario', component: formulario },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
];
