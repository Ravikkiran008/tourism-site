import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-single-destination-display',
  templateUrl: './single-destination-display.component.html',
  styleUrls: ['./single-destination-display.component.css'],
  encapsulation: ViewEncapsulation.None
  //  ViewEncapsulation.None

})
export class SingleDestinationDisplayComponent implements OnInit {
  destination_id;
  destination_details;
  formOpened: boolean;

  formStatus(e: boolean) {
    this.formOpened = e;
  }

  constructor(private activatedRoute: ActivatedRoute, private data: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.destination_id = this.activatedRoute.snapshot.paramMap.get('id');
    this.destination_details = this.data.destinations_array.find(x => Number(this.destination_id) == x.id);
  }

  adults: Number = 0;
  children: Number = 0;
  days: Number = 0;
  selectedstay: string;
  price: Number;
  total_cost: Number;

  showprice() {
    this.price = this.destination_details.stays[this.selectedstay];
    this.total_cost = 0;
  }

  calculateValue() {
    //let option = this.selectedstay;
    this.price = this.destination_details.stays[this.selectedstay];
    this.total_cost = (Number(this.price) * Number(this.adults) + 0.5 * Number(this.price) * Number(this.children)) * Number(this.days);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  canExit() {
    if (this.formOpened) {
      return confirm('You have not submitted the form. Do you want to exit?');
    }
    return true;
  }
}
