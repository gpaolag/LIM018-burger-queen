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

  orderPedido(nombre: string , precio: string){
    console.log(nombre , precio);
  }

}