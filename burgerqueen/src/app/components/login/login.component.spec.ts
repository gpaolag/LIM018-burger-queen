import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let UserServiceSpy:jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    UserServiceSpy=jasmine.createSpyObj<UserService>('UserService',['register','login','signOut']);
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
