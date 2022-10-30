import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DetailOrder,
  Details,
  Order,
} from '../product/interfaces/order.interface';
import { Store } from '../product/interfaces/store.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  saveOrderDetails(details: {}): any {
    throw new Error('Method not implemented.');
  }
  private apiURL = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiURL}/stores`);
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiURL}/orders`, order);
  }

  saveDetailsOrder(details: DetailOrder): Observable<DetailOrder> {
    return this.http.post<DetailOrder>(`${this.apiURL}/detailsOrders`, details);
  }
}
