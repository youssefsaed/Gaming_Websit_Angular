import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
login:boolean=false
  constructor(private _AuthService:AuthService , private _Router:Router) { }

  ngOnInit(): void {
    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue()==null)
      {
        this.login=false
      }
      else
      {
        this.login=true
      }
    })

  }

  logOut()
  {
    localStorage.removeItem('tokinData')
    localStorage.removeItem('currentPage')
    this._AuthService.userData.next(null)
    this._Router.navigate(['login'])

  }

}
