import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// mapeo de rutas ademas la rutas van en orden
const routes: Routes = [
  // redirecciona a la ruta por defecto

  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./pages/checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },

  // redirecciona a la ruta por defecto
  // {
  //   path: '**',
  //   redirectTo: 'ruta',
  // },
  // redirecciona a la ruta por defecto
  // {
  //   path: 'ruta',
  //   component: RutasComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
