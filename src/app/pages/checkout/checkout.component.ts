import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { delay, switchMap, tap } from 'rxjs';
import { Store } from '../products/product/interfaces/store.interface';
import { Details, Order } from '../products/product/interfaces/order.interface';
import { DataService } from '../products/services/data.service';
import { Product } from '../products/product/interfaces/product.interface';
import { ShoppingCartService } from 'src/app/shared/componets/header/services/shopping-cart.service';
import { Router } from '@angular/router';
import { ProductService } from '../products/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  // nuestros campos
  model = {
    name: '',
    store: '',
    address: '',
    city: '',
  };

  isDelivery = true;
  cart: Product[] = [];

  // nuestro array de tiendas
  stores: Store[] = [];

  constructor(
    private dataSvc: DataService,
    private shoopingCartSvc: ShoppingCartService,
    private router: Router,
    private productSvc: ProductService
  ) {}

  onPickupDelevery(valor: boolean): void {
    this.isDelivery = valor;
  }

  ngOnInit(): void {
    this.getStores();
    this.getDataCart();
    this.prepareOrderDetails();
  }

  // traer los datos del formulario
  onSumbit({ value: formData }: NgForm): void {
    console.log('Guardar', formData);
    const data: Order = {
      ...formData,
      date: this.getCurrenDate(),
      isDelivery: this.isDelivery,
    };
    this.dataSvc
      .saveOrder(data)
      .pipe(
        tap((res) => console.log('Order ->', res)),
        switchMap(({ id: orderId }) => {
          const details = this.prepareOrderDetails();
          return this.dataSvc.saveDetailsOrder({ details, orderId });
        }),
        tap(() => this.router.navigate(['/checkout/thank-you-page'])),
        delay(2000),
        tap(() => this.shoopingCartSvc.clearCart())
      )
      .subscribe();
  }

  getStores(): void {
    this.dataSvc
      .getStores()
      .pipe(tap((store: Store[]) => (this.stores = store)))
      .subscribe();
  }

  private getCurrenDate(): string {
    return new Date().toLocaleDateString();
  }

  private prepareOrderDetails(): Details[] {
    const details: Details[] = [];
    this.cart.forEach((products: Product) => {
      const {
        id: productId,
        name: productName,
        quantity: productQuantity,
        stock
      } = products;
      const updateStock = stock - productQuantity;
      this.productSvc.updateStock(productId, updateStock).subscribe();
      details.push({ productId, productName, productQuantity });
    });
    return details;
  }

  private getDataCart(): void {
    this.shoopingCartSvc.cartAction$
      .pipe(tap((products): Product[] => (this.cart = products)))
      .subscribe();
  }
}
