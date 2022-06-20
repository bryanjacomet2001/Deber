import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from './pagina-inicial/pagina-inicial.component';
import { PaginaClienteComponent } from './pagina-cliente/pagina-cliente.component';

const routes: Routes = [
  {path:'', component:PaginaInicialComponent},
  {path:'home', component:PaginaInicialComponent},
  {path:'usuario', component:PaginaClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
