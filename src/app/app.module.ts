import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllComponent } from './all/all.component';
import { SlicetitlePipe } from './slicetitle.pipe';
import { SliceDescriptionPipe } from './slice-description.pipe';
import { IconPlatformPipe } from './icon-platform.pipe';
import { GamedetailsComponent } from './gamedetails/gamedetails.component';
import { PcComponent } from './pc/pc.component';
import { BrowserComponent } from './browser/browser.component';
import { ReleaseDateComponent } from './release-date/release-date.component';
import { PopularityComponent } from './popularity/popularity.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { RacingComponent } from './racing/racing.component';
import { SportsComponent } from './sports/sports.component';
import { SocialComponent } from './social/social.component';
import { ShooterComponent } from './shooter/shooter.component';
import { OpenWorldComponent } from './open-world/open-world.component';
import { ZombieComponent } from './zombie/zombie.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { ActionRpgComponent } from './action-rpg/action-rpg.component';
import { ActionComponent } from './action/action.component';
import { FlightComponent } from './flight/flight.component';
import { BattleRoyaleComponent } from './battle-royale/battle-royale.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
 





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    HomeComponent,
    NotfoundComponent,
    AllComponent,
    SlicetitlePipe,
    SliceDescriptionPipe,
    IconPlatformPipe,
    GamedetailsComponent,
    PcComponent,
    BrowserComponent,
    ReleaseDateComponent,
    PopularityComponent,
    AlphabeticalComponent,
    RelevanceComponent,
    RacingComponent,
    SportsComponent,
    SocialComponent,
    ShooterComponent,
    OpenWorldComponent,
    ZombieComponent,
    FantasyComponent,
    ActionRpgComponent,
    ActionComponent,
    FlightComponent,
    BattleRoyaleComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,RouterModule ,BrowserAnimationsModule,CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
