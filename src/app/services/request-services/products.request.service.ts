import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsRequestService {

  constructor(private http: HttpClient) {
  }

  getProduct(page: number) {
    return this.http.get<any>(`http://localhost:3000/Products?_page=${ page }&_limit=4`)
      .pipe(map((res: any) => {
        return res;
      })) as Observable<any>;
  }
}
