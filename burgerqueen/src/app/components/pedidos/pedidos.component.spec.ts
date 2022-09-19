import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoService } from 'src/app/services/pedido.service';

import { PedidosComponent } from './pedidos.component';

describe('PedidosComponent', () => {
  let component: PedidosComponent;
  let fixture: ComponentFixture<PedidosComponent>;
  let PedidoServiceSpy:jasmine.SpyObj<PedidoService>;

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
});
