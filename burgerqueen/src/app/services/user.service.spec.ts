import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';

import { UserService } from './user.service';

/* describe('UserService', () => {
  let service: UserService;
  let AuthSpy:jasmine.SpyObj<Auth>;
  beforeEach(() => {
    AuthSpy=jasmine.createSpyObj<Auth>('Auth',['Auth', 'createUserWithEmailAndPassword', 'signInWithEmailAndPassword','signOut']);
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); */