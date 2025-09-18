import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./game/game').then(m => m.Game)
  },
  {
    path: 'game',
    loadComponent: () => import('./game/game').then(m => m.Game)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./privacy/privacy').then(m => m.PrivacyComponent)
  }
];
