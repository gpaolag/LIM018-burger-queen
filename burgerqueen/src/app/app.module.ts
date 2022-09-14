import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ControlPedidosComponent } from './components/control-pedidos/control-pedidos.component';
import { HistorialPedidosComponent } from './components/historial-pedidos/historial-pedidos.component';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NavbaradminComponent } from './components/navbaradmin/navbaradmin.component';
import { ProductosComponent } from './components/productos/productos.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PedidosComponent,
    ControlPedidosComponent,
    HistorialPedidosComponent,
    LoginComponent,
    NavbaradminComponent,
    ProductosComponent,
   ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
