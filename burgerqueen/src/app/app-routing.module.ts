import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ControlPedidosComponent } from './components/control-pedidos/control-pedidos.component';
import { HistorialPedidosComponent } from './components/historial-pedidos/historial-pedidos.component';

 

const routes: Routes = [
  {path:'pedidos', component: PedidosComponent},
  {path:'controlPedidos', component: ControlPedidosComponent},
  {path:'historialPedidos', component: HistorialPedidosComponent},
  {path:'**', redirectTo:'pedidos', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
