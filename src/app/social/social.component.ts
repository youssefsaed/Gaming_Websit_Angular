import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  games:any[]=[]
  iconPc:string="fa-brands fa-windows"
  iconBrowser:string="fa-solid fa-window-maximize"
  constructor(private _GamesService:GamesService) { }

  ngOnInit(): void {
    localStorage.setItem('currentPage','Categories/social')

    this._GamesService.Games('category','social').subscribe((response)=>{
      this.games=response
  })
  }

}
