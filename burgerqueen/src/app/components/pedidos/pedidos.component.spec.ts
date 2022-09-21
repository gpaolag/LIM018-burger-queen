import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoService } from 'src/app/services/pedido.service';

import { PedidosComponent } from './pedidos.component';

describe('PedidosComponent', () => {
  let component: PedidosComponent;
  let fixture: ComponentFixture<PedidosComponent>;
  let PedidoServiceSpy: jasmine.SpyObj<PedidoService>;
  let listapedidos =
  [{
    "id": "6",
    "name": "Hamburguesa doble de pollo",
    "price": "15",
    "category": "hamburguesas",
    "img": "https://www.lajoyadelcafe.com/wp-content/uploads/2020/11/32236-emre-gencer-364602-unsplash-1.jpg"

  },

  {
    "id": "7",
    "name": "Papas fritas",
    "price": "5",
    "category": "acompañamientos",
    "img": "https://www.tqma.com.ec/images/com_yoorecipe/banner_superior/15075_1.jpg"

  }];

  beforeEach(async () => {
    PedidoServiceSpy = jasmine.createSpyObj<PedidoService>('PedidoService', ['addOrden', 'getOrders']);

    await TestBed.configureTestingModule({
      declarations: [PedidosComponent],
      providers: [{ provide: PedidoService, useValue: PedidoServiceSpy }]

    })
      .compileComponents();

    fixture = TestBed.createComponent(PedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.pedidos=
    [{
      "id": "6",
      "name": "Hamburguesa doble de pollo",
      "price": "15",
      "category": "hamburguesas",
      "img": "https://www.lajoyadelcafe.com/wp-content/uploads/2020/11/32236-emre-gencer-364602-unsplash-1.jpg"

    },

    {
      "id": "7",
      "name": "Papas fritas",
      "price": "5",
      "category": "acompañamientos",
      "img": "https://www.tqma.com.ec/images/com_yoorecipe/banner_superior/15075_1.jpg"

    }];
    let arrOrder = [
      {
        id: "1",
        nombre: "Café americano",
        precio: "5",
        cantidad: 2,
        subTotal: 10
      }
    ];
    component.arrOrder=arrOrder;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Método categorías --> Debe filtrar por categorías', () => {
    expect(component.categorias('acompañamientos', listapedidos)).toEqual(
      [{
        "id": "7",
        "name": "Papas fritas",
        "price": "5",
        "category": "acompañamientos",
        "img": "https://www.tqma.com.ec/images/com_yoorecipe/banner_superior/15075_1.jpg"

      }]);
  });


  it('AgregarCantidad() --> agrega la cantidad de un producto en una orden', () => {
    component.agregarCantidad('Café americano');
    expect(component.arrOrder[0].cantidad).toBe(3);
  });

  it('quitarCantidad() --> quita la cantidad de un producto en una orden', () => {
    component.quitarCantidad('Café americano');
    expect(component.arrOrder[0].cantidad).toBe(1);
  });

  it('quitarCantidad() --> quita total de un producto cuando es 0', () => {
    component.quitarCantidad('Café americano');
    component.quitarCantidad('Café americano');
    expect(component.arrOrder.length).toBe(0);
  });

  it('cancelarPedido() --> quita una orden', () => {
    component.cancelarPedido();
    expect(component.arrOrder.length).toBe(0);
  });

  it('eliminarProducto() --> quita un producto en una orden', () => {
    component.eliminarProducto('Café americano');
    expect(component.arrOrder.length).toBe(0);
  });

  it('typeofCategory() --> filtra categorias', () => {
    component.typeofCategory('acompañamientos');
    expect(component.products.length).toBe(1);
  });

  it('orderPedido() --> agrega un producto nuevo en una orden', () => {
    component.orderPedido("2",'Café con leche', '7');
    expect(component.arrOrder.length).toBe(2);
  });

  it('orderPedido() --> agrega un numero mas a cantidad a un producto cuando ya existe en una orden', () => {
    component.orderPedido("1",'Café americano ', '5');
    expect(component.arrOrder[0].cantidad).toBe(3);
  });
});
