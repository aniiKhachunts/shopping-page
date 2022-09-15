import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ProductsRequestService } from "../../services/request-services/products.request.service";
import { CardService } from "../../services/card.service";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: any;
  filterCategory: any
  searchKey: string = "";
  key: string = '';
  reverse: boolean = false;
  title = 'demo';
  array: string[] = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;
  page: number = 1;
  typeSelected: string;

  constructor(
    private router: Router,
    private cardService: CardService,
    private requestService: ProductsRequestService,
    private spinnerService: NgxSpinnerService
  ) {
    this.typeSelected = 'ball-fussion';
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.spinnerService.show();
    this.requestService.getProduct(this.page)
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.spinnerService.hide();
        this.productList.forEach((product: any) => {
          if (product.category === "women's clothing" || product.category === "men's clothing") {
            product.category = "fashion"
          }
          Object.assign(product, { quantity: 1, total: product.price });
        });
      });
    this.cardService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  viewDetails(item: any) {
    this.cardService.viewDetails(item);
    this.router.navigateByUrl('main/card');
  }

  filterProducts(category: string) {
    this.filterCategory = this.productList.filter((product: any) => {
      if (product.category === category || category === '') {
        return product;
      }
    })
  }

  sortProducts(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  onScroll(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.requestService.getProduct(++this.page)
        .subscribe(res => {
          this.productList.push(...res);
          this.spinnerService.hide();
        });
    }, 800)
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
