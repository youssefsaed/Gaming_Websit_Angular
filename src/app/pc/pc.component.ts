import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.scss']
})
export class PcComponent implements OnInit {
  games:any[]=[]
  index:number=0
  iconPc:string="fa-brands fa-windows"
  iconBrowser:string="fa-solid fa-window-maximize"
  constructor(private _GamesService:GamesService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','Platforms/pc')

    this._GamesService.Games('platform','pc').subscribe((response)=>{
      this.games=response.slice(0,this.index+=20)
  })
  }

  moreGames()
  {
    this._GamesService.Games('platform','pc').subscribe((response)=>{
      this.games=response.slice(this.index,this.index+=20)
    })
  }
  

}
