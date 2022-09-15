import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public cardItem: any = {};
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() {
  }

  getProducts() {
    return this.productList.asObservable();
  }

  viewDetails(product: any) {
    this.cardItem = product;
    this.productList.next(this.cardItem);
  }
}
