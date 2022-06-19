import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaClienteComponent } from './pagina-cliente/pagina-cliente.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    PaginaInicialComponent,
    PaginaClienteComponent,
    MenuLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports:[
  ], 
  entryComponents: [LoginComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
