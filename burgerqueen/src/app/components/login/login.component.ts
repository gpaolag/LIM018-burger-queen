import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    private userService: UserService
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: any) => console.log(error));
  }

}
