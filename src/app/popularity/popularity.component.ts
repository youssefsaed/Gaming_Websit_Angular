import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.scss']
})
export class PopularityComponent implements OnInit {

  games:any[]=[]
  index:number=0
  iconPc:string="fa-brands fa-windows"
  iconBrowser:string="fa-solid fa-window-maximize"
  constructor(private _GamesService:GamesService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','sort-by/popularity')

    this._GamesService.Games('sort-by','popularity').subscribe((response)=>{
      this.games=response.slice(0,this.index+=20)
  })
  }

  moreGames()
  {
    this._GamesService.Games('sort-by','popularity').subscribe((response)=>{
      this.games=response.slice(this.index,this.index+=20)
    })
  }
}
