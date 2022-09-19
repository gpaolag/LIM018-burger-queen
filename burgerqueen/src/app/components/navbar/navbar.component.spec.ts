import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { UserService } from 'src/app/services/user.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let UserServiceSpy:jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    UserServiceSpy = jasmine.createSpyObj<UserService>('UserService',['register','login','signOut']);
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers:[{provide:UserService,useValue:UserServiceSpy}]

    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
