import { Component } from '@angular/core';
import * as AirportData from '../assets/airports.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cp: number = 1;
  public ItemPerPage: number = 4;
  public Search: string;
  public name: boolean = true;
  public SmallFilter: boolean = false;
  public MediumFilter: boolean = false;
  public LargeFilter: boolean = false;
  public CloseFilter: boolean = false;
  public HeliportFilter: boolean = false;
  public AirportRecord = JSON.parse(JSON.stringify(AirportData)).default;

  public AirportRecordTemp = this.AirportRecord;

  public TypeArray = [];

  public labels: any = {
    previousLabel: '',
    nextLabel: '',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: "You're on page1"
  };



  OnFilter(): void {
    this.TypeArray = []

    if (this.SmallFilter == true) {
      this.TypeArray.push('small')
    }
    if (this.MediumFilter == true) {
      this.TypeArray.push('medium')
    }
    if (this.LargeFilter == true) {
      this.TypeArray.push('large')
    }
    if (this.CloseFilter == true) {
      this.TypeArray.push('closed')
    }
    if (this.HeliportFilter == true) {
      this.TypeArray.push('heliport')
    }

    if (this.TypeArray.length != 0) {
      this.AirportRecord = this.AirportRecordTemp.filter(x => this.TypeArray.includes(x.type))
    }
    else {
      this.AirportRecord = this.AirportRecordTemp
    }

  }

  public OnSearch(): void {
    this.Search = this.Search.toLowerCase();
    this.AirportRecord = this.AirportRecordTemp.filter(x => {
      return JSON.stringify(x).toLowerCase().includes(this.Search)
    })
  }

}
