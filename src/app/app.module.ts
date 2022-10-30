import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// nuestro router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/componets/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// para peticiones
import { HttpClientModule } from '@angular/common/http';
import { MateriaModule } from './materia.module';
import { CartComponent } from './shared/componets/cart/cart.component';
import { Router } from '@angular/router';



@NgModule({
  // aqui importamos nuestros componentes
  declarations: [AppComponent, HeaderComponent, CartComponent],
  // las importaciones
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MateriaModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
