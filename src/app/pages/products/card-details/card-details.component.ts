import { Component } from '@angular/core';
import { CardService } from "../../../services/card.service";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  product: any = {};
  productPrice!: number;

  constructor(private cardService: CardService) {
  }

  ngOnInit(): void {
    this.getCardDetails();
  }

  private getCardDetails() {
    this.cardService.getProducts().subscribe(res => this.product = res);
    this.productPrice = this.product.price;
  }

  changeProductCount(event: any) {
    const count = event.target.value;
    this.productPrice *= count;
    if (count === '') {
      this.productPrice = this.product.price;
    }
  }
}
