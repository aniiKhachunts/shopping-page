import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private spinnerService: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.router.navigate(['auth'])
  }
}
