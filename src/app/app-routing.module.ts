import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionRpgComponent } from './action-rpg/action-rpg.component';
import { ActionComponent } from './action/action.component';
import { AllComponent } from './all/all.component';
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import { AuthGuard } from './auth.guard';
import { BattleRoyaleComponent } from './battle-royale/battle-royale.component';
import { BrowserComponent } from './browser/browser.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FlightComponent } from './flight/flight.component';
import { GamedetailsComponent } from './gamedetails/gamedetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OpenWorldComponent } from './open-world/open-world.component';
import { PcComponent } from './pc/pc.component';
import { PopularityComponent } from './popularity/popularity.component';
import { RacingComponent } from './racing/racing.component';
import { RegisterComponent } from './register/register.component';
import { ReleaseDateComponent } from './release-date/release-date.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { ShooterComponent } from './shooter/shooter.component';
import { SocialComponent } from './social/social.component';
import { SportsComponent } from './sports/sports.component';
import { ZombieComponent } from './zombie/zombie.component';


const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  
  
  {path:'home' ,canActivate:[AuthGuard], component:HomeComponent},
  {path:'gameDetails/:id',canActivate:[AuthGuard],component:GamedetailsComponent},
  {path:'all',canActivate:[AuthGuard],component:AllComponent},
  {path:'Platforms/pc',canActivate:[AuthGuard],component:PcComponent},
  {path:'Platforms/browser',canActivate:[AuthGuard],component:BrowserComponent},
  {path:'sort-by/release-date',canActivate:[AuthGuard],component:ReleaseDateComponent},
  {path:'sort-by/popularity',canActivate:[AuthGuard],component:PopularityComponent},
  {path:'sort-by/alphabetical',canActivate:[AuthGuard],component:AlphabeticalComponent},
  {path:'sort-by/relevance',canActivate:[AuthGuard],component:RelevanceComponent},
  {path:'Categories/racing',canActivate:[AuthGuard],component:RacingComponent},
  {path:'Categories/sports',canActivate:[AuthGuard],component:SportsComponent},
  {path:'Categories/social',canActivate:[AuthGuard],component:SocialComponent},
  {path:'Categories/shooter',canActivate:[AuthGuard],component:ShooterComponent},
  {path:'Categories/open-world',canActivate:[AuthGuard],component:OpenWorldComponent},
  {path:'Categories/zombie',canActivate:[AuthGuard],component:ZombieComponent},
  {path:'Categories/fantasy',canActivate:[AuthGuard],component:FantasyComponent},
  {path:'Categories/action-rpg',canActivate:[AuthGuard],component:ActionRpgComponent},
  {path:'Categories/action',canActivate:[AuthGuard],component:ActionComponent},
  {path:'Categories/flight',canActivate:[AuthGuard],component:FlightComponent},
  {path:'Categories/battle-royale',canActivate:[AuthGuard],component:BattleRoyaleComponent},

  {path:'login',component:LoginComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
