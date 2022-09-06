import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPedidosComponent } from './control-pedidos.component';

describe('ControlPedidosComponent', () => {
  let component: ControlPedidosComponent;
  let fixture: ComponentFixture<ControlPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPedidosComponent ]
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
