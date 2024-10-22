import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'btg',
    loadChildren: () => import('./btg/btg.module').then((m) => m.BtgModule),
  },
];
