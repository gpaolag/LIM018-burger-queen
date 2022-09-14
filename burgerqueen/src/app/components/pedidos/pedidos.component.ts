import { Component, OnInit, Input } from '@angular/core';
import listadePedidos from 'src/assets/json/data.json';
import { PedidoService } from 'src/app/services/pedido.service';


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
  @Input() totalOrder: number = 0;


  constructor(private pedidosService: PedidoService) { }

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
  totalPedido() {
    this.totalOrder = 0;
    this.arrOrder.forEach((elemento) => {
      this.totalOrder += parseInt(elemento.subTotal);
    });
  }

  orderPedido(identrante: string, nombre: string, precio: string) {
    let filtrado: any = this.arrOrder.filter((elem, indice) => {
      if (elem.id === identrante) {
        this.arrOrder[indice].cantidad += 1;
        this.arrOrder[indice].subTotal += parseInt(this.arrOrder[indice].precio);
        this.totalPedido();
        return true;
      }
      return false;
    });
    if (filtrado == false) {
      this.arrOrder.push({
        id: identrante,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
        subTotal: parseInt(precio)
      });
      this.totalPedido();
    }
  }
  eliminarProducto(nombre: string) {
    let filtrar: any = this.arrOrder.filter((elem, indice) => {
      if (elem.nombre === nombre) {
        this.arrOrder.splice(indice, 1);
        this.totalPedido();
        return true;
      }
      return false;
    });
  }
  agregarCantidad(nombre: string) {
    let filtrar: any = this.arrOrder.filter((elem, indice) => {
      if (elem.nombre === nombre) {
        this.arrOrder[indice].cantidad += 1;
        this.arrOrder[indice].subTotal += parseInt(this.arrOrder[indice].precio);
        this.totalPedido();
        return true;
      }
      return false;
    });
  }
  quitarCantidad(nombre: string) {
    let filtrar: any = this.arrOrder.filter((elem, indice) => {
      if (elem.nombre === nombre) {
        this.arrOrder[indice].cantidad -= 1;
        this.arrOrder[indice].subTotal -= parseInt(this.arrOrder[indice].precio);
        this.totalPedido();
        if (this.arrOrder[indice].cantidad == 0) {
          this.eliminarProducto(nombre);
          this.totalPedido();
        }
        return true;
      }
      return false;
    });
  }

  //metodos de pedidos 
  cancelarPedido() {
    this.arrOrder = [];
    this.totalPedido();
  }
  
  async enviarPedido() {
    let ordernew = {
      arrOrder: this.arrOrder,
      totalOrder: this.totalOrder,
      status: 'pendiente',
      dateCreation: new Date().toString(),
      beginPreparation: '',
      endPreparation: '',
      timePreparation: '',
      dateDeliver: '',
      dateCancel: ''
    };
    const resp = await this.pedidosService.addOrden(ordernew);
    console.log(resp);

  }
}