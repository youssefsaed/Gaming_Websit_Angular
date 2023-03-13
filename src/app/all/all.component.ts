import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
games:any[]=[]
index:number=0
iconPc:string="fa-brands fa-windows"
iconBrowser:string="fa-solid fa-window-maximize"

  constructor(private _GamesService:GamesService) { }
icn:string=''
  ngOnInit(): void {
    localStorage.setItem('currentPage','all')

    this._GamesService.getGames().subscribe((response)=>
    {
      this.games=response.slice(0,this.index+=20)
    })


  }

  moreGames()
  {
    this._GamesService.getGames().subscribe((response)=>{
      this.games=response.slice(this.index,this.index+=20)
    })
    
  }

  // back()
  // {
  //   this._GamesService.getGames().subscribe((response)=>{
  //     this.games=response.slice(this.index-=20,this.index)
  //     console.log(this.index);
      
  //   })
  // }


}
