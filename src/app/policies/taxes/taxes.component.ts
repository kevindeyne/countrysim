import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss'],
})
export class TaxesComponent implements OnInit {

  listings = [{
    id: 'flat-rate-income-tax',
    title: 'Flat rate income tax',
    implemented: true,
    value: 20
  }, {
    id: 'carbon-tax',
    title: 'Carbon tax'
  }, {
    id: 'capital-gains-tax',
    title: 'Capital gains and dividends tax'
  }, {
    id: 'fin-transactions-tax',
    title: 'Tax on financial transactions'
  }, {
    id: 'buffet-tax',
    title: 'Tax on millionaires'
  }, {
    id: 'corporate-tax',
    title: 'Corporate taxes'
  }, {
    id: 'cigarette-tax',
    title: 'Cigarette tax'
  }, {
    id: 'sugar-drinks-tax',
    title: 'Sugar drink tax'
  }, {
    id: 'value-added-tax',
    title: 'Value added tax'
  }, {
    id: 'estate-tax',
    title: 'Estate tax'
  }, {
    id: 'gas-tax',
    title: 'Gas tax'
  }];

  constructor() { }

  ngOnInit() {
  }

}
