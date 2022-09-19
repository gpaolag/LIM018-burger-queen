import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoService } from 'src/app/services/pedido.service';

import { ControlPedidosComponent } from './control-pedidos.component';

describe('ControlPedidosComponent', () => {
  let component: ControlPedidosComponent;
  let fixture: ComponentFixture<ControlPedidosComponent>;
  let PedidoServiceSpy:jasmine.SpyObj<PedidoService>;

  beforeEach(async () => {
    PedidoServiceSpy = jasmine.createSpyObj<PedidoService>('PedidoService',
    ['addOrden','getOrders', 'updateStatusOrder', 'updateStatusEnd','updateStatusDeliver','updateStatusCancel']);
    
    await TestBed.configureTestingModule({
      declarations: [ ControlPedidosComponent ],
      providers:[{provide:PedidoService,useValue:PedidoServiceSpy}]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
