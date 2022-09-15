import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Orden } from '../../pedidos/orden';


@Component({
  selector: 'app-cocinero',
  templateUrl: './cocinero.component.html',
  styleUrls: ['./cocinero.component.scss']
})
export class CocineroComponent implements OnInit {

  public arrListOrders: Orden[]=[];
  public arrPending:Orden[]=[];
  public arrPreparing: Orden[]=[];
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

    this.arrListOrders.forEach(e =>{
      if(e.status=='pendiente'){
        this.arrPending.push(e);
      }else if(e.status=='preparando'){
        this.arrPreparing.push(e);
      }else if(e.status=='cancelado'){
        this.arrCancel.push(e);
      }
    })
    console.log(this.arrPreparing, ' arr cal', this.arrCancel);
    
  }

  statusPreparing(orden: Orden){
    let fechaInicioPreparacion= new Date().toString();
      this.orderService.updateStatusOrder(orden, 'preparando', fechaInicioPreparacion);
      orden.status = 'preparando';
      orden.beginPreparation = fechaInicioPreparacion;
      console.log('nuevo valor  ',orden);  
      this.filtrarStatus();    
  }
  statusPrepared(orden: Orden){
    let fechaInicioPreparacion= new Date().toString();
      this.orderService.updateStatusOrder(orden, 'preparado', fechaInicioPreparacion);
      orden.status = 'preparado';
      orden.beginPreparation = fechaInicioPreparacion;
      this.filtrarStatus();    
  }

  

}
