import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { CocineroComponent } from './cocinero.component';
import { UserService } from 'src/app/services/user.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { Orden } from '../../pedidos/orden';
import { ThisReceiver } from '@angular/compiler';

describe('CocineroComponent', () => {
  let component: CocineroComponent;
  let fixture: ComponentFixture<CocineroComponent>;
  let UserServiceSpy: jasmine.SpyObj<UserService>;
  let pedidoService : PedidoService;
  // let PedidoServiceSpy:jasmine.SpyObj<PedidoService>;


  class PedidoServiceMock {
    getOrders(): Observable<any[]> {
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
    };
    public valuestatus :string = 'preparando';
    public valuestatus2 :string = 'preparado';
    updateStatusOrder(order: Orden,value: string, begin: string): Promise<any> {
      order.status = this.valuestatus;
      order.beginPreparation = begin;
      component.arrListOrders=[order];
      return new Promise((resolve) => {
        resolve(order);
      })
    };
    updateStatusEnd(order: Orden,value: string, begin: string): Promise<any> {
      order.status = this.valuestatus2;
      order.endPreparation = begin;
      component.arrListOrders=[order];
      return new Promise((resolve) => {
        resolve(order);
      })
    }
  }

  beforeEach(async () => {
    UserServiceSpy = jasmine.createSpyObj<UserService>('UserService', ['register', 'login', 'signOut']);
    // PedidoServiceSpy = jasmine.createSpyObj<PedidoService>('PedidoService',
    // ['addOrden','getOrders', 'updateStatusOrder', 'updateStatusEnd','updateStatusDeliver','updateStatusCancel']);
  
    await TestBed.configureTestingModule({
      declarations: [CocineroComponent],
      providers: [
        { provide: UserService, useValue: UserServiceSpy },
        { provide: PedidoService, useClass: PedidoServiceMock }
      ]

    })
      .compileComponents();

    fixture = TestBed.createComponent(CocineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pedidoService = TestBed.inject(PedidoService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('statusPreparing() --> cambia el status de una orden a preparando', (doneFn)=> {
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
    spyOn(pedidoService, 'updateStatusOrder').and.callThrough();
    component.statusPreparing(ordenPrueba).then(()=>{
      console.log('result',component.arrListOrders);
      
      expect(component.arrPreparing.length).toBe(1);
      doneFn();
    });
  });

  it('statusPrepared() --> cambia el status de una orden a preparado', (doneFn)=> {
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
      status: "preparando",
      id: "babDGzpL81RouWUoDyXA"
    }
    spyOn(pedidoService, 'updateStatusEnd').and.callThrough();
    component.statusPrepared(ordenPrueba).then(()=>{
      console.log('result',component.arrListOrders);
      expect(component.arrListOrders[0].status).toEqual('preparado');
      doneFn();
    });
  });
});
