import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocineroComponent } from './cocinero.component';
import { UserService } from 'src/app/services/user.service';
import { PedidoService } from 'src/app/services/pedido.service';

describe('CocineroComponent', () => {
  let component: CocineroComponent;
  let fixture: ComponentFixture<CocineroComponent>;
  let UserServiceSpy:jasmine.SpyObj<UserService>;
  let PedidoServiceSpy:jasmine.SpyObj<PedidoService>;

  beforeEach(async () => {
    UserServiceSpy = jasmine.createSpyObj<UserService>('UserService',['register','login','signOut']);
    PedidoServiceSpy = jasmine.createSpyObj<PedidoService>('PedidoService',
    ['addOrden','getOrders', 'updateStatusOrder', 'updateStatusEnd','updateStatusDeliver','updateStatusCancel']);
    await TestBed.configureTestingModule({
      declarations: [ CocineroComponent ],
      providers:[
        {provide:UserService,useValue:UserServiceSpy},
        {provide:PedidoService,useValue:PedidoServiceSpy}
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
