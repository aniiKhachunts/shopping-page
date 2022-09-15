import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

import { FilterPipe } from "../filter.pipe";
import { LoginService } from "../../services/login.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
  ],
  providers: [LoginService],
  exports: [FilterPipe, HeaderComponent, FooterComponent]
})

export class LayoutModule {
}
