import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { Orden } from '../../pedidos/orden';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


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

  constructor(
    private userService: UserService,
    private router: Router,
    private orderService:PedidoService) { }

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
  }

  statusPreparing(orden: Orden){
    let fechaInicioPreparacion= new Date().toLocaleTimeString() + ' - '+ new Date().toLocaleDateString();
      this.orderService.updateStatusOrder(orden, 'preparando', fechaInicioPreparacion);
      orden.status = 'preparando';
      orden.beginPreparation = fechaInicioPreparacion;
      this.filtrarStatus();    
  }
  statusPrepared(orden: Orden){
    let fechafinPreparacion= new Date().toLocaleTimeString() + ' - '+ new Date().toLocaleDateString();
      this.orderService.updateStatusEnd(orden, 'preparado', fechafinPreparacion);
      orden.status = 'preparado';
      orden.endPreparation = fechafinPreparacion;
      this.filtrarStatus();    
  }

  signOut(event: Event){
    this.userService.signOut()
    .then(()=>{
      this.router.navigate(['']);
    })
  }

}
