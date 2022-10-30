import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/pages/products/product/interfaces/product.interface';
// hay dos tipos de observables
// 1. Subject: es un observable que puede emitir valores
// 2. BehaviorSubject: es un observable que puede emitir valores y tiene un valor inicial

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  products: Product[] = [];
  // el observable es un objeto que se puede subscribir
  private cartSubject = new BehaviorSubject<Product[]>([]);
  private totalSubject = new BehaviorSubject<number>(0);
  private quantitySubject = new BehaviorSubject<number>(0);

  // debemos crear un observable para que se pueda subscribir
  // cuando trabajamos con observable usamos el signo de dolar
  get totalAction$(): Observable<number> {
    return this.totalSubject.asObservable();
  }
  get quantityAction$(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  get cartAction$(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  // los metodos

  // este se encargara de llamar los metodos privados
  updateCart(product: Product): void {
    this.addToCart(product);
    this.getTotal();
    this.getQuantityProduct();
  }

  private getTotal(): void {
    const total = this.products.reduce(
      (acc, prod) => (acc += prod.price * prod.quantity),
      0
    );
    this.totalSubject.next(total);
  }

  private getQuantityProduct(): void {
    const quantity = this.products.reduce(
      (acc, prod) => (acc += prod.quantity),
      0
    );
    this.quantitySubject.next(quantity);
  }

  private addToCart(product: Product): void {
    const isProductInCart = this.products.find(
      (prod) => prod.id === product.id
    );
    if (isProductInCart) {
      isProductInCart.quantity += 1;
    } else {
      this.products.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next(this.products);
  }

  public clearCart(): void {
    this.products = [];
    this.cartSubject.next([]);
    this.totalSubject.next(0);
    this.quantitySubject.next(0);
  }

  constructor() {}
}
