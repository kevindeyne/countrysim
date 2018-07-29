import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss'],
})
export class EnergyComponent implements OnInit {
  // https://www.nrcan.gc.ca/energy/facts/energy-economy/20062
  listings = [{
    id: 'flat-rate-income-tax',
    title: 'Flat rate income tax'
  }];

  constructor() { }

  ngOnInit() {
  }

}
