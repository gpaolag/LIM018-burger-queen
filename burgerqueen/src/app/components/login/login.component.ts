import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
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
        const emailuser : any = response.user.email;
        if (/coffeedream.com/.test(emailuser)){
          this.router.navigate(['productos']);
        }
        else if(/coffeedream2.com/.test(emailuser)){
          this.router.navigate(['pedidos']);
        }
      })
      .catch((error: any) => console.log(error));
  }

}
