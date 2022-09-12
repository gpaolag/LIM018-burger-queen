import { Component, OnInit, Input } from '@angular/core';
import listadePedidos from 'src/assets/json/data.json';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  public pedidos: any = listadePedidos;
  @Input() type : string = '';
  @Input() products : any = this.pedidos; 
  @Input() arrOrder: any[] = [];

  
  constructor() { }

  ngOnInit(): void {
  }
  categorias(categoryFilter :String): any {
    let respuesta:any = listadePedidos.filter((x: any) => x.category ===categoryFilter);
    
    return respuesta;
  }
  typeofCategory(value: string){
    this.type = value;
    this.products =this.categorias(this.type);
  }

  orderPedido(id: string, nombre: string , precio: string){
    let newArr :any [] = [];
    console.log('primer', newArr);
     this.arrOrder.filter((elem, indice) => {
      if(elem.id == id){
        this.arrOrder[indice].cantidad+=1;
      }
      return elem;
    } ) 
  
      this.arrOrder.push({
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
      });
      
    
    console.log('arrorder',this.arrOrder);
    
  }
  

}