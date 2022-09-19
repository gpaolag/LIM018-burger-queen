import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { UserService } from 'src/app/services/user.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let UserServiceSpy:jasmine.SpyObj<UserService>;



  beforeEach(async () => {
    UserServiceSpy = jasmine.createSpyObj<UserService>('UserService',['register','login','signOut']);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,        
      ],
      // provider: el real, useValue: el mock o spy
      providers:[{provide:UserService,useValue:UserServiceSpy}]    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente Login', () => {   
    expect(component).toBeTruthy();
  });
});
