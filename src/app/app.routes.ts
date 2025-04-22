import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // {
  //   // path: '**',
  //   // redirectTo: '/home',
  //   // pathMatch: 'full',
  // },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'destination',
    loadComponent: () => import('./pages/destination/destination.component'),
  },
  {
    path: 'crew',
    loadComponent: () => import('./pages/crew/crew.component'),
  },
  {
    path: 'technology',
    loadComponent: () => import('./pages/technology/technology.component'),
  },
];
