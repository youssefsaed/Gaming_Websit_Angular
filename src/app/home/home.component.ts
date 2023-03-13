import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  GenshinImpact:any
  Valorant:any
  ApexLegends:any


  constructor(private _GamesService:GamesService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','home')

  this._GamesService.GameIdDetails('475').subscribe((response)=>{
    this.GenshinImpact=response
  })
  this._GamesService.GameIdDetails('466').subscribe((response)=>{
    this.Valorant=response
  })
  this._GamesService.GameIdDetails('23').subscribe((response)=>{
    this.ApexLegends=response
  })


  }

}
