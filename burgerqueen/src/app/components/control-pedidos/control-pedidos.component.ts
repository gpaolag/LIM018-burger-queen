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
    console.log(this.arrPreparing, ' arr cal', this.arrCancel);
  }

  statusCancel(orden: Orden){
    let fechaInicioPreparacion= new Date().toString();
      this.orderService.updateStatusOrder(orden, 'cancelado', fechaInicioPreparacion);
      orden.status = 'cancelado';
      orden.beginPreparation = fechaInicioPreparacion;
      this.filtrarStatus();    
  }
  statusDeliver(orden: Orden){
    let fechaInicioPreparacion= new Date().toString();
      this.orderService.updateStatusOrder(orden, 'entregado', fechaInicioPreparacion);
      orden.status = 'entregado';
      orden.beginPreparation = fechaInicioPreparacion; 
      this.filtrarStatus();    
  }

}
