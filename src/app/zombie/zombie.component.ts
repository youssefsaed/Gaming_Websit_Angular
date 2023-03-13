import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-zombie',
  templateUrl: './zombie.component.html',
  styleUrls: ['./zombie.component.scss']
})
export class ZombieComponent implements OnInit {

  games:any[]=[]
  iconPc:string="fa-brands fa-windows"
  iconBrowser:string="fa-solid fa-window-maximize"
  constructor(private _GamesService:GamesService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','Categories/zombie')

    this._GamesService.Games('category','zombie').subscribe((response)=>{
      this.games=response
  })
  }

}
