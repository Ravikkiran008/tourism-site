import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { CountryBarComponent } from './country-bar/country-bar.component';
// import { DisplayCardComponent } from './display-card/display-card.component';
import { DisplayCountryComponent } from './display-country/display-country.component';
import { SingleDestinationDisplayComponent } from './single-destination-display/single-destination-display.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DisplayCardComponent } from './display-card/display-card.component';

export interface CanComponentDeactivateGuard {
  canExit: () => boolean;
}

const appRoute:Routes=[
  {path:'country/:name',component:DisplayCountryComponent},
  {path:'destination/:id',component:SingleDestinationDisplayComponent,
  canDeactivate: [
    (component: CanComponentDeactivateGuard) => {
      return component.canExit ? component.canExit() : true;
    }
  ]},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'destination',component:DisplayCardComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
