import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ControlPedidosComponent } from './components/control-pedidos/control-pedidos.component';
import { HistorialPedidosComponent } from './components/historial-pedidos/historial-pedidos.component';
<<<<<<< HEAD
import { AdminComponent } from './components/usuarios/admin/admin.component';
=======
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 5351f332b599cdce3d0fce83dbc76f8fbc209756

 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PedidosComponent,
    ControlPedidosComponent,
    HistorialPedidosComponent,
<<<<<<< HEAD
    AdminComponent
=======
    LoginComponent
>>>>>>> 5351f332b599cdce3d0fce83dbc76f8fbc209756
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
