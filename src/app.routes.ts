import { Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart.component';
import { CounterComponent } from './features/counter/counter.component';
import { ShopComponent } from './features/shop/shop.component';

export const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: 'trade/chart',
    loadChildren: () => import('./core/trade/trade.routes'),
  },
  { path: '', redirectTo: 'shop', pathMatch: 'full' },
];
