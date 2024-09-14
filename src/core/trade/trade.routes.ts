import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'chart',
    loadComponent: () =>
      import('./chart/chart.component').then((mod) => mod.ChartComponent),
    title: 'Chart',
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((mod) => mod.AdminComponent),
    title: 'admin',
  },
];

export default routes;
