import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // inicio de nuestra app
  title = 'Erudito';

  // podemos crear metodos y propiedades
  getName(): void {
    console.log('Hello World!');
  }
}
