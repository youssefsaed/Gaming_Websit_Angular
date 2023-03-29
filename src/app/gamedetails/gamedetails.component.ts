import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GamesService } from '../games.service';




@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.scss']
})
export class GamedetailsComponent implements OnInit {
  gameId: string | null = ''
  storage: string = ''
  processor: string = ''
  os: string = ''
  memory: string = ''
  graphics: string = ''
  gameDetails: any
  screen: any
  constructor(private _ActivatedRoute: ActivatedRoute, private _GamesService: GamesService) { }

  ngOnInit(): void {
    this.gameId = this._ActivatedRoute.snapshot.paramMap.get('id')

    this._GamesService.GameIdDetails(this.gameId).subscribe((response) => {

      this.gameDetails = response
      this.screen = response.screenshots



      this.storage = response.minimum_system_requirements.storage
      this.processor = response.minimum_system_requirements.processor
      this.os = response.minimum_system_requirements.os
      this.memory = response.minimum_system_requirements.memory
      this.graphics = response.minimum_system_requirements.graphics



    })


  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    navSpeed: 700,

    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: false
  }

}
