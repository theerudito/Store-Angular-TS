import { NgModule } from '@angular/core';
// para que funcione nuestro componete
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// en angular tenemos todos tipos de directivas
// 1 - estructurales
// 2 - de atributos
// 3 - de componentes
// 4 - directivas custom

// el decorador marca el comportamiento de la clase
@NgModule({
  // aqui podemos tener varias declaraciones export e import
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class MateriaModule {}
