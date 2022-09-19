import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let UserServiceSpy:jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    UserServiceSpy = jasmine.createSpyObj<UserService>('UserService',['register','login','signOut']);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers:[{provide:UserService,useValue:UserServiceSpy}]
    })
    .compileComponents();

  });
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente Login', () => {   
    expect(component).toBeTruthy();
  });
});
