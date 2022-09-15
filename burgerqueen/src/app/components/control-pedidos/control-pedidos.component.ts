import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Orden } from '../pedidos/orden';

@Component({
  selector: 'app-control-pedidos',
  templateUrl: './control-pedidos.component.html',
  styleUrls: ['./control-pedidos.component.scss']
})
export class ControlPedidosComponent implements OnInit {

  public arrListOrders: Orden[] = [];
  constructor(private orderService:PedidoService) { }

  ngOnInit(): void {
   this.orderService.getOrders().subscribe(order => {
    this.arrListOrders =  order;
  
      
    })
    
  }



}
