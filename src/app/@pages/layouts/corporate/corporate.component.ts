import { Changes } from './../../../changes';
import { WorldState } from './../../../worldstate';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { RootLayout } from '../root/root.component';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'corporate-layout',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CorporateLayoutComponent extends RootLayout implements OnInit {
  menuLinks = [
      {
        label: 'Dashboard',
        details: 'New updates',
        routerLink: '/dashboard',
        iconType: 'pg',
        iconName: 'home',
        thumbNailClass: 'text-white'
      },
      {
          label: 'Cabinet',
          routerLink: '/cabinet',
          iconType: 'fa',
          iconName: 'university'
      },
      {
        label: 'Policies',
        iconType: 'fa',
        iconName: 'bar-chart-o',
        toggle: 'open',
        submenu: [
          {
            label: 'Arts & Sciences',
            routerLink: '/arts-sciences',
            iconType: 'fa',
            iconName: 'cog',
          },
          {
            label: 'Agriculture',
            routerLink: '/agriculture',
            iconType: 'fa',
            iconName: 'leaf',
          },
          {
            label: 'Taxes',
            routerLink: '/taxes',
            iconType: 'fa',
            iconName: 'sort-numeric-desc',
          },
          {
            label: 'Energy',
            routerLink: '/energy',
            iconType: 'fa',
            iconName: 'flash',
          },
          {
            label: 'Law & Order',
            routerLink: '/law-order',
            iconType: 'fa',
            iconName: 'legal'
          },
          {
            label: 'Labor',
            routerLink: '/labor',
            iconType: 'fa',
            iconName: 'coffee',
          },
          {
            label: 'Infrastructure',
            routerLink: '/infrastructure',
            iconType: 'fa',
            iconName: 'truck',
          },
          {
            label: 'Health',
            routerLink: '/health',
            iconType: 'fa',
            iconName: 'medkit',
          },
          {
            label: 'Children & Family',
            routerLink: '/family',
            iconType: 'fa',
            iconName: 'child',
          },
          {
            label: 'Defense',
            routerLink: '/defense',
            iconType: 'fa',
            iconName: 'shield',
          }
        ]
    },
    {
      label: 'International',
      routerLink: '/international',
      iconType: 'fa',
      iconName: 'globe'
  },
  {
    label: 'Blocks',
    routerLink: '/blocks',
    iconType: 'fa',
    iconName: 'share-alt'
  }
  ];

  @ViewChild('mdStickUp') mdStickUp: ModalDirective;

  // actual data
  private countryName = '';
  public turnNumber = 14;
  public incomeCost = 266.36;
  public expenditureCost = 258.10;
  public debtCost = 854.36;

  // visualize
  public income = '$266.36 Bn';
  public expenditure = '-$258.10 Bn';
  public debt = '$854.36 Bn';

  ngOnInit() {
    this.changeLayout('menu-pin');
    this.changeLayout('menu-behind');
    // Will sidebar close on screens below 1024
    this.autoHideMenuPin();

    this.countryName = WorldState.getInstance().myCountry.name;
    this.recalculateIncome();
  }

  endTurnLoading() {
    const self = this;
    this.mdStickUp.show();

    setTimeout(function(){
      self.turnNumber++;
      WorldState.getInstance().turnNumber = self.turnNumber;
      Changes.getInstance().onEndTurn();
      self.recalculateIncome();
      self.mdStickUp.hide();
    }, 1000);
  }

  recalculateIncome() {
    this.incomeCost = WorldState.getInstance().myCountry.income;
    this.expenditureCost = WorldState.getInstance().myCountry.expenditure;
    this.debtCost = -WorldState.getInstance().myCountry.surplus;

    this.income = Changes.visualizeMoney(this.incomeCost);
    this.expenditure = Changes.visualizeMoney(this.expenditureCost);
    this.debt = Changes.visualizeMoney(this.debtCost);
  }

}
