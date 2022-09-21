import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoService } from 'src/app/services/pedido.service';

import { PedidosComponent } from './pedidos.component';

describe('PedidosComponent', () => {
  let component: PedidosComponent;
  let fixture: ComponentFixture<PedidosComponent>;
  let PedidoServiceSpy:jasmine.SpyObj<PedidoService>;

  let listapedidos =
  [ {
    "id" : "6",
    "name" : "Hamburguesa doble de pollo",
    "price" : "15",
    "category": "hamburguesas",
    "img" : "https://www.lajoyadelcafe.com/wp-content/uploads/2020/11/32236-emre-gencer-364602-unsplash-1.jpg"

},

{
    "id" : "7",
    "name" : "Papas fritas",
    "price" : "5",
    "category": "acompañamientos",
    "img" : "https://www.tqma.com.ec/images/com_yoorecipe/banner_superior/15075_1.jpg"

}];

  beforeEach(async () => {
    PedidoServiceSpy = jasmine.createSpyObj<PedidoService>('PedidoService',['addOrden','getOrders']);

    await TestBed.configureTestingModule({
      declarations: [ PedidosComponent ],
      providers:[{provide:PedidoService,useValue:PedidoServiceSpy}]

    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Método categorías --> Debe filtrar por categorías', () => {
    expect(component.categorias('acompañamientos', listapedidos)).toEqual(
      [{
      "id" : "7",
      "name" : "Papas fritas",
      "price" : "5",
      "category": "acompañamientos",
      "img" : "https://www.tqma.com.ec/images/com_yoorecipe/banner_superior/15075_1.jpg"
  
  }]);
  });


  it('AgregarCantidad() --> agrega la cantidad de un producto en una orden', () => {

    let arrOrder = [
      {
          "id": "1",
          "nombre": "Café americano",
          "precio": "5",
          "cantidad": 2,
          "subTotal": 10
      }
  ];
    component.agregarCantidad('Café americano');
    expect(arrOrder).toEqual(
      [{
          "id": "1",
          "nombre": "Café americano",
          "precio": "5",
          "cantidad": 2,
          "subTotal": 10
      }
  ]);
  });
});
