import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from "./shared/layout/login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'main/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  {
    path: 'main',
    loadChildren: async () => (await import('./pages/main.module')).MainModule
  },
  { path: 'auth', component: LoginComponent },
  { path: '**', redirectTo: '/main/products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
