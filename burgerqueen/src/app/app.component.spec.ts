import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { UserService } from 'src/app/services/user.service';
import { Firestore } from '@angular/fire/firestore';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide: Auth, useValue: UserService},{provide: Firestore, useValue: UserService}],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'burgerqueen'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('burgerqueen');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('burgerqueen app is running!');
  // });
});
