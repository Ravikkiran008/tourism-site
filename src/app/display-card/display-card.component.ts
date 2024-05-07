import { Component, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {
  @Input() country_name: string;
  searchText: string = "";
  default_destinations = [];
  destinations = [];

  top_destinations = ["Taj Mahal", "MUSEUM OF THE FUTURE", "SAINTE-CHAPELLE", "Millennium Park", "Christ The Redeemer", "Eiffel Tower"]

  show_searchbar = false;
  show_filters = false;

  width;

  // category_filters_applied = [];
  // time_filters_applied = [];

  curr_filter = "";

  constructor(private activatedRoute: ActivatedRoute, private data: DataService) {

  }

  ngOnInit(): void {
    if (this.activatedRoute.routeConfig.path == "country/:name") {
      //this.country_name = this.activatedRoute.snapshot.paramMap.get('name');
      this.default_destinations = this.data.destinations_array.filter(x => this.country_name == x.Country);
      this.show_filters = true;
      this.width = "17.5rem";
    }
    else if (this.activatedRoute.routeConfig.path == "destination") {
      this.default_destinations = this.data.destinations_array;
      window.scrollTo(0, 0);
      this.show_filters = true;
      this.show_searchbar = true;
      this.width = "17.5rem";
    }
    else {
      //this.default_destinations = this.data.destinations_array.filter(x => this.top_destinations.includes(x.Destination));
      this.default_destinations = this.top_destinations.map(dest => {
        return this.data.destinations_array.find(x => x.Destination === dest);
      });
      window.scrollTo(0, 0);
      this.show_searchbar = true;
      this.width = "22rem";
    }
    this.destinations = this.default_destinations;
  }


  searchDestination() {
    if (this.searchText) {
      this.destinations = this.data.destinations_array.filter(x => x.Destination.toLowerCase().includes(this.searchText.toLowerCase()));
      if (this.activatedRoute.routeConfig.path == "destination") {
        this.show_filters = this.destinations.length > 0;
      }
    }
    else
      this.destinations = this.default_destinations;
  }

  //  destionations_array = this.data.destinations_array;

  // filterCategory(category) {
  //   this.time_filters_applied = [];
  //   if(this.category_filters_applied.includes(category)){
  //     this.category_filters_applied = this.category_filters_applied.filter(x=>x!=category);
  //     document.getElementById(category).style.backgroundColor = "#EEEEEE";
  //     document.getElementById(category).style.color = "black";
  //     //alert(this.category_filters_applied)
  //   }
  //   else
  //     this.category_filters_applied.push(category);

  //   if(this.category_filters_applied.length) {
  //     let filtered_destinations = [];
  //     this.category_filters_applied.forEach(category => {
  //       filtered_destinations = filtered_destinations.concat(this.data.destinations_array.filter(x => this.country_name == x.Country && x.category == category));
  //       document.getElementById(category).style.backgroundColor = "black";
  //       document.getElementById(category).style.color = "white";
  //     });
  //     this.destinations = filtered_destinations;
  //   }
  //   else {
  //     //alert(this.category_filters_applied);
  //     this.destinations = this.data.destinations_array.filter(x => this.country_name == x.Country);
  //   }
  // }

  // filterTime(time) {
  //   this.category_filters_applied = [];
  //   if(this.time_filters_applied.includes(time)){
  //     this.time_filters_applied = this.time_filters_applied.filter(x=>x!=time);
  //     document.getElementById(time).style.backgroundColor = "#EEEEEE";
  //     document.getElementById(time).style.color = "black";
  //     //alert(this.time_filters_applied)
  //   }
  //   else
  //     this.time_filters_applied.push(time);

  //   if(this.time_filters_applied.length){
  //     let filtered_destinations = [];
  //     this.time_filters_applied.forEach(time => {
  //       filtered_destinations  = filtered_destinations.concat(this.data.destinations_array.filter(x => this.country_name == x.Country && x.time_to_visit == time));
  //       document.getElementById(time).style.backgroundColor = "black";
  //       document.getElementById(time).style.color = "white";
  //     });
  //     this.destinations = filtered_destinations;
  //   }
  //   else {
  //     //alert(this.category_filters_applied);
  //     this.destinations = this.data.destinations_array.filter(x => this.country_name == x.Country);
  //   }

  // }
  filterCategory(category) {
    if (this.curr_filter) {
      let filt_btn = document.getElementById(this.curr_filter);
      filt_btn.style.backgroundColor = "#EEEEEE";
      filt_btn.style.color = "#000000";
    }
    if (category == this.curr_filter) {
      this.destinations = this.default_destinations;
      this.curr_filter = "";
    }
    else {
      this.destinations = this.default_destinations.filter(x => x.category == category);
      let filt_btn = document.getElementById(category);
      filt_btn.style.backgroundColor = "#000000";
      filt_btn.style.color = "#FFFFFF";
      this.curr_filter = category;
    }
  }

  filterTime(time) {
    if (this.curr_filter) {
      let filt_btn = document.getElementById(this.curr_filter);
      filt_btn.style.backgroundColor = "#EEEEEE";
      filt_btn.style.color = "#000000";
    }
    if (time == this.curr_filter) {
      this.destinations = this.default_destinations;
      this.curr_filter = "";
    }
    else {
      this.destinations = this.default_destinations.filter(x => x.time_to_visit == time);
      let filt_btn = document.getElementById(time);
      filt_btn.style.backgroundColor = "#000000";
      filt_btn.style.color = "#FFFFFF";
      this.curr_filter = time;
    }
  }
}
