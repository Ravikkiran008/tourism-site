import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-bar',
  templateUrl: './country-bar.component.html',
  styleUrls: ['./country-bar.component.css']
})
export class CountryBarComponent {
  constructor (private data: DataService, private router:Router){

  }
  
 countries:any[] = this.data.country;

 onClickCountry(name){
  this.router.navigate(['/country',name]);
 }
}
