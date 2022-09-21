import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { CocineroComponent } from './cocinero.component';
import { UserService } from 'src/app/services/user.service';
import { PedidoService } from 'src/app/services/pedido.service';

describe('CocineroComponent', () => {
  let component: CocineroComponent;
  let fixture: ComponentFixture<CocineroComponent>;
  let UserServiceSpy:jasmine.SpyObj<UserService>;
  // let PedidoServiceSpy:jasmine.SpyObj<PedidoService>;

  
  class PedidoServiceMock {
    getOrders(): Observable<any[]>{
      return of(
        [
          {
              "nameCliente": "Maria",
              "dateCancel": "",
              "timePreparation": "",
              "dateCreation": "8:36:59 - 20/9/2022",
              "endPreparation": "8:38:24 - 20/9/2022",
              "beginPreparation": "8:37:44 - 20/9/2022",
              "dateDeliver": "8:38:55 - 20/9/2022",
              "arrOrder": [
                  {
                      "nombre": "Hamburguesa doble de pollo",
                      "precio": "15",
                      "id": "6",
                      "subTotal": 30,
                      "cantidad": 2
                  },
                  {
                      "id": "13",
                      "nombre": "Hamburguesa doble de Res",
                      "subTotal": 15,
                      "cantidad": 1,
                      "precio": "15"
                  }
              ],
              "totalOrder": 45,
              "status": "entregado",
              "id": "babDGzpL81RouWUoDyXA"
          }
      ]
      )
    }
  }

  beforeEach(async () => {
    UserServiceSpy = jasmine.createSpyObj<UserService>('UserService',['register','login','signOut']);
    // PedidoServiceSpy = jasmine.createSpyObj<PedidoService>('PedidoService',
    // ['addOrden','getOrders', 'updateStatusOrder', 'updateStatusEnd','updateStatusDeliver','updateStatusCancel']);
  
    await TestBed.configureTestingModule({
      declarations: [ CocineroComponent ],
      providers:[
        {provide:UserService,useValue:UserServiceSpy},
        {provide:PedidoService,  useClass:  PedidoServiceMock} 
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(CocineroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
