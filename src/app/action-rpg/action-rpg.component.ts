import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-action-rpg',
  templateUrl: './action-rpg.component.html',
  styleUrls: ['./action-rpg.component.scss']
})
export class ActionRpgComponent implements OnInit {

  games:any[]=[]
  index:number=0
  iconPc:string="fa-brands fa-windows"
  iconBrowser:string="fa-solid fa-window-maximize"
  constructor(private _GamesService:GamesService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','Categories/action-rpg')

    this._GamesService.Games('category','action-rpg').subscribe((response)=>{
      this.games=response.slice(0,this.index+=20)
  })
  }

  moreGames()
  {
    this._GamesService.Games('category','action-rpg').subscribe((response)=>{
      this.games=response.slice(this.index,this.index+=20)
    })
  }
}
