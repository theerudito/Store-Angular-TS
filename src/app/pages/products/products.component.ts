import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/componets/header/services/shopping-cart.service';
import { Product } from './product/interfaces/product.interface';
import { ProductService } from './services/product.service';

// consumir el servicio
// pipe es un operador que nos permite transformar los datos
// tap es un operador que nos permite ejecutar un efecto secundario

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  // primero tenermos que inyectar el servicio en el constructor
  constructor(
    private productSvc: ProductService,
    private shoppingCartSvc: ShoppingCartService
  ) {}

  ngOnInit(): void {
    this.productSvc
      .getProduct()
      .pipe(tap((products: Product[]) => (this.products = products)))
      .subscribe();
  }

  addToCart(product: Product): void {
    //console.log(product);
    // llamaremos nuestro metodo updateCart
    this.shoppingCartSvc.updateCart(product);
  }
}
