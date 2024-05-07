import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-country',
  templateUrl: './display-country.component.html',
  styleUrls: ['./display-country.component.css']
})
export class DisplayCountryComponent {

  country_name: string;
  country;


  constructor(private activatedRoute: ActivatedRoute, private data: DataService) {

  }


  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.country_name = this.activatedRoute.snapshot.paramMap.get('name');
    this.country = this.data.country.find(x=>this.country_name==x.Name);
  }

}



// this.activatedRoute.params.subscribe(res=>{
//   this.country_name=res.name;
// })
// this.country_destinations=this.data.destinations_array.filter(x=>this.country_name==x.Country);