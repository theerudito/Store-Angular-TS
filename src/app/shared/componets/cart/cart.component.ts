import { Component } from '@angular/core';
import { ShoppingCartService } from '../header/services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  //probar el servicio y obtener los metodos de los observables
  quantity$ = this.shoopingCartSvc.quantityAction$;
  total$ = this.shoopingCartSvc.totalAction$;
  cart$ = this.shoopingCartSvc.cartAction$;
  constructor(private shoopingCartSvc: ShoppingCartService) {}
}
