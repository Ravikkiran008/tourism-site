import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CountryBarComponent } from './country-bar/country-bar.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { DisplayCountryComponent } from './display-country/display-country.component';
import { SingleDestinationDisplayComponent } from './single-destination-display/single-destination-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExperienceComponent } from './experience/experience.component';
import { CustomerNamePipe } from './experience/customername.pipe';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CountryBarComponent,
    DisplayCardComponent,
    DisplayCountryComponent,
    SingleDestinationDisplayComponent,
    AboutUsComponent,
    ExperienceComponent,
    CustomerNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
