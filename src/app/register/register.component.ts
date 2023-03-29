import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrError:string=''

  constructor(private _AuthService:AuthService, private _Router:Router ) { }
  registryForm=new FormGroup({
    first_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    last_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    email:new FormControl(null,[Validators.pattern('^[a-z0-9._-]+@(yahoo|gmail|outlook)+\.com$'),Validators.required]),
    password:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9]{5,20}$'),Validators.required]),
    age:new FormControl(null,[Validators.min(10),Validators.max(90),Validators.required])
  })

  submitRegistrForm(_registryForm:FormGroup)
  {
    
    this._AuthService.sendFormRegistr(_registryForm.value).subscribe((response)=>
    {
      console.log(response);
      
      if(response.message=='success')
      {
        this._Router.navigate(['login'])
      }
    },(err)=>{
      this.registrError=err.error.message
    })

  }
  ngOnInit(): void {

  }

}
