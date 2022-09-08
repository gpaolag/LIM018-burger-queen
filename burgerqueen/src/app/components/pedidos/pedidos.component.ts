import { Component, OnInit } from '@angular/core';
import listadePedidos from 'src/assets/json/data.json';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  pedidos: any = listadePedidos;

  constructor() { }

  ngOnInit(): void {
  }

}
