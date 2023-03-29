import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginError: string = ''

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.pattern('^[a-z0-9._-]+@(yahoo|gmail|outlook)+\.com$'), Validators.required]),
    password: new FormControl(null, [Validators.pattern('^[a-zA-Z0-9]{5,20}$'), Validators.required]),
  })

  submitLoginForm(_loginForm: FormGroup) {

    this._AuthService.sendFormLogin(_loginForm.value).subscribe((response) => {
      console.log(response);

      if (response.message == 'success') {
        localStorage.setItem('tokinData', response.token)
        this._AuthService.decodeData()
        this._Router.navigate(['home'])
      }
    }, (err) => {
      this.loginError = err.error.message
    })
  }





  ngOnInit(): void {
  }

}
