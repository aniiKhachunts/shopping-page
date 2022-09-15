import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "../shared/layout/layout.module";
import { CommonModule } from "@angular/common";
import { Ng2OrderModule } from "ng2-order-pipe";
import { MainRoutingModule } from "./main.router";
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { MainComponent } from "./main.component";
import { ProductsComponent } from "./products/products.component";
import { CardDetailsComponent } from "./products/card-details/card-details.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    MainComponent,
    ProductsComponent,
    CardDetailsComponent,
  ],
  imports: [
    RouterModule,
    LayoutModule,
    CommonModule,
    MainRoutingModule,
    Ng2OrderModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
  ],
  entryComponents: [CardDetailsComponent]
})

export class MainModule {
}
