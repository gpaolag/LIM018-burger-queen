import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { CocineroComponent} from '../cocina/cocinero/cocinero.component';
import { Orden } from '../pedidos/orden';

@Component({
  selector: 'app-control-pedidos',
  templateUrl: './control-pedidos.component.html',
  styleUrls: ['./control-pedidos.component.scss']
})
export class ControlPedidosComponent implements OnInit {

  public arrListOrders: Orden[] = [];
  public arrPending:Orden[]=[];
  public arrPreparing: Orden[]=[];
  public arrPrepared: Orden[]=[];
  public arrDeliver: Orden[]=[];
  public arrCancel:Orden[]=[];

  constructor(private orderService:PedidoService) { }

  ngOnInit(): void {
   this.orderService.getOrders().subscribe(order => {    
    this.arrListOrders =  order;
    this.filtrarStatus();
    })
  }
  filtrarStatus(){
    this.arrCancel=[];
    this.arrPending=[];
    this.arrPreparing=[];
    this.arrPrepared=[];
    this.arrCancel=[];
    this.arrDeliver=[];

    this.arrListOrders.forEach(e =>{
      if(e.status=='pendiente'){
        this.arrPending.push(e);
      }else if(e.status=='preparando'){
        this.arrPreparing.push(e);
      }else if(e.status=='preparado'){
        this.arrPrepared.push(e);
      }else if(e.status=='entregado'){
        this.arrDeliver.push(e);
      }else if(e.status=='cancelado'){
        this.arrCancel.push(e);
      }
    })
  }

  async statusCancel(orden: Orden){
    let fechaCanceladoPreparacion= new Date().toLocaleTimeString() + ' - '+ new Date().toLocaleDateString();
     await this.orderService.updateStatusCancel(orden, 'cancelado', fechaCanceladoPreparacion);
      orden.status = 'cancelado';
      orden.beginPreparation = fechaCanceladoPreparacion;
      this.filtrarStatus();    
  }
  
  async statusDeliver(orden: Orden){
    let fechaentregaPreparacion= new Date().toLocaleTimeString() + ' - '+ new Date().toLocaleDateString();
      await this.orderService.updateStatusDeliver(orden, 'entregado', fechaentregaPreparacion);
      orden.status = 'entregado';
      orden.beginPreparation = fechaentregaPreparacion; 
      this.filtrarStatus();    
  }

}
