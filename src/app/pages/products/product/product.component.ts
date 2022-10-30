import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  // changeDetection es un mecanismo o estrategia que detecta los cambios en el DOM y los actualiza
  // hay dos una es OnPush y la otra es Default
  // OnPush establece la estrategia en checkOnce => cuando el imput cambia se ejecuta el onPush
  // Default establece la estrategia en checkAlways => cuando el imput cambia se ejecuta el onPush y el onInit
  // es recomendado usar OnPush para mejorar el rendimiento
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  // @Input decorator para comunicar el componente padre con el hijo
  @Input() product!: Product;

  // @Ouput decorator para comunicar el componente hijo con el padre
  @Output() addToCartClick = new EventEmitter<Product>();

  onClick() {
    // emit pasamos el producto al padre
    //console.log(this.product);
    this.addToCartClick.emit(this.product);
  }

  constructor() {}
}
