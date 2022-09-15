import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CardService } from '../../../services/card.service';
import { LoginService } from "../../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchItem !: string;
  private totalItem: number = 0;

  constructor(
    private router: Router,
    private cardService: CardService,
    private loginService: LoginService,
  ) {
  }

  ngOnInit(): void {
  }

  search(event: any) {
    this.searchItem = (event.target as HTMLInputElement).value;
    this.onSearchClicked();
  }

  onSearchClicked() {
    this.cardService.search.next(this.searchItem);
  }

  navigateToHome() {
    this.router.navigateByUrl('/main/products').then(() => {});
  }

  navigateToAuthPage() {
    this.router.navigateByUrl('/auth').then(r => {
      this.loginService.logout();
    });
  }
}
