import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ControlPedidosComponent } from './components/control-pedidos/control-pedidos.component';
import { HistorialPedidosComponent } from './components/historial-pedidos/historial-pedidos.component';
import { AdminComponent } from './components/usuarios/admin/admin.component';

 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PedidosComponent,
    ControlPedidosComponent,
    HistorialPedidosComponent,
    AdminComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
