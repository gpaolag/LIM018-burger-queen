import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoService } from 'src/app/services/pedido.service';
import { Observable, of } from 'rxjs';

import { ControlPedidosComponent } from './control-pedidos.component';
import { Orden } from '../pedidos/orden';

describe('ControlPedidosComponent', () => {
  let component: ControlPedidosComponent;
  let fixture: ComponentFixture<ControlPedidosComponent>;
  // let PedidoServiceSpy:jasmine.SpyObj<PedidoService>;
  let pedidoService : PedidoService;


  class PedidoServiceMock {
    getOrders(): Observable<any[]>{
      return of(
        [
          {
            nameCliente: "Maria",
            dateCancel: "",
            timePreparation: "",
            dateCreation: "8:36:59 - 20/9/2022",
            endPreparation: "",
            beginPreparation: "",
            dateDeliver: "",
            arrOrder: [
              {
                nombre: "Hamburguesa doble de pollo",
                precio: "15",
                id: "6",
                subTotal: 30,
                cantidad: 2
              },
              {
                id: "13",
                nombre: "Hamburguesa doble de Res",
                subTotal: 15,
                cantidad: 1,
                precio: "15"
              }
            ],
            totalOrder: 45,
            status: "pendiente",
            id: "babDGzpL81RouWUoDyXA"
          }
        ]
      )
    }

    public valuestatus :string = 'cancelado';
    updateStatusCancel(order: Orden,value: string, begin: string): Promise<any> {
      order.status = this.valuestatus;
      order.beginPreparation = begin;
      component.arrListOrders=[order];
      return new Promise((resolve) => {
        resolve(order);
      })
    };

    public valuestatus2 :string = 'entregado';
    updateStatusDeliver(order: Orden,value: string, begin: string): Promise<any> {
      order.status = this.valuestatus2;
      order.beginPreparation = begin;
      component.arrListOrders=[order];
      return new Promise((resolve) => {
        resolve(order);
      })
    };
  }

  beforeEach(async () => {
    // PedidoServiceSpy = jasmine.createSpyObj<PedidoService>('PedidoService',
    // ['addOrden','getOrders', 'updateStatusOrder', 'updateStatusEnd','updateStatusDeliver','updateStatusCancel']);
    
    await TestBed.configureTestingModule({
      declarations: [ ControlPedidosComponent ],
      providers:[{provide:PedidoService,   useClass:PedidoServiceMock}]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pedidoService = TestBed.inject(PedidoService)

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('statusCancel() --> cambia el status de una orden a cancelado', (doneFn)=> {
    let ordenPrueba: Orden =
    {
      nameCliente: "Maria",
      dateCancel: "",
      timePreparation: "",
      dateCreation: "8:36:59 - 20/9/2022",
      endPreparation: "",
      beginPreparation: "",
      dateDeliver: "",
      arrOrder: [
        {
          nombre: "Hamburguesa doble de pollo",
          precio: "15",
          id: "6",
          subTotal: 30,
          cantidad: 2
        },
        {
          id: "13",
          nombre: "Hamburguesa doble de Res",
          subTotal: 15,
          cantidad: 1,
          precio: "15"
        }
      ],
      totalOrder: 45,
      status: "pendiente",
      id: "babDGzpL81RouWUoDyXA"
    }
    spyOn(pedidoService, 'updateStatusCancel').and.callThrough();
    component.statusCancel(ordenPrueba).then(()=>{      
      expect(component.arrCancel.length).toBe(1);
      doneFn();
    });
  });

  it('statusCancel() --> cambia el status de una orden a entregado', (doneFn)=> {
    let ordenPrueba: Orden =
    {
      nameCliente: "Maria",
      dateCancel: "",
      timePreparation: "",
      dateCreation: "8:36:59 - 20/9/2022",
      endPreparation: "",
      beginPreparation: "",
      dateDeliver: "",
      arrOrder: [
        {
          nombre: "Hamburguesa doble de pollo",
          precio: "15",
          id: "6",
          subTotal: 30,
          cantidad: 2
        },
        {
          id: "13",
          nombre: "Hamburguesa doble de Res",
          subTotal: 15,
          cantidad: 1,
          precio: "15"
        }
      ],
      totalOrder: 45,
      status: "preparado",
      id: "babDGzpL81RouWUoDyXA"
    }
    spyOn(pedidoService, 'updateStatusDeliver').and.callThrough();
    component.statusDeliver(ordenPrueba).then(()=>{      
      expect(component.arrDeliver.length).toBe(1);
      doneFn();
    });
  });
});
