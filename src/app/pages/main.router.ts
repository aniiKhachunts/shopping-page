import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./main.component";
import { ProductsComponent } from "./products/products.component";
import { CardDetailsComponent } from "./products/card-details/card-details.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'card',
        component: CardDetailsComponent
      }
    ]
  },
  { path: '**', redirectTo: '/main/products' },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
