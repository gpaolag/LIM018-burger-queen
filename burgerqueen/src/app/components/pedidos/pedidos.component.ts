import { Component, OnInit, Input } from '@angular/core';
import listadePedidos from 'src/assets/json/data.json';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  public pedidos: any = listadePedidos;
  @Input() type: string = '';
  @Input() products: any = this.pedidos;
  @Input() arrOrder: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }
  categorias(categoryFilter: String): any {
    let respuesta: any = listadePedidos.filter((x: any) => x.category === categoryFilter);

    return respuesta;
  }
  typeofCategory(value: string) {
    this.type = value;
    this.products = this.categorias(this.type);
  }

  orderPedido(identrante: string, nombre: string, precio: string) {
    let filtrado: any = this.arrOrder.filter((elem, indice) => {
      if (elem.id === identrante) {
        this.arrOrder[indice].cantidad += 1;
        this.arrOrder[indice].subTotal += parseInt(this.arrOrder[indice].precio);
        return true;
      }
      return false;
    });
    if (filtrado == false){
      this.arrOrder.push({
        id: identrante,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
        subTotal: parseInt(precio)
      });
    }
  }
  eliminarProducto(nombre: string){
    let filtrar: any = this.arrOrder.filter((elem, indice) => {
      if (elem.nombre === nombre) {
        this.arrOrder.splice(indice, 1);
        return true;
      }
      return false;
    });
  }
  agregarCantidad(nombre: string){
    let filtrar: any = this.arrOrder.filter((elem, indice) => {
      if (elem.nombre === nombre) {
        this.arrOrder[indice].cantidad += 1;
        this.arrOrder[indice].subTotal += parseInt(this.arrOrder[indice].precio);
        return true;
      }
      return false;
    });
    console.log(this.arrOrder);
  }
  quitarCantidad(nombre: string){
    let filtrar: any = this.arrOrder.filter((elem, indice) => {
      if (elem.nombre === nombre) {
        this.arrOrder[indice].cantidad -= 1;
        this.arrOrder[indice].subTotal -= parseInt(this.arrOrder[indice].precio);
        if (this.arrOrder[indice].cantidad==0){
          this.eliminarProducto(nombre);
        }
        return true;
      }
      return false;
    });
  }


}