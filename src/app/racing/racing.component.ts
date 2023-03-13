import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-racing',
  templateUrl: './racing.component.html',
  styleUrls: ['./racing.component.scss']
})
export class RacingComponent implements OnInit {

  games:any[]=[]
  iconPc:string="fa-brands fa-windows"
  iconBrowser:string="fa-solid fa-window-maximize"
  constructor(private _GamesService:GamesService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','Categories/racing')

    this._GamesService.Games('category','racing').subscribe((response)=>{
      this.games=response
  })
  }

 

}
