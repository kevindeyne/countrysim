import { ImplementSliderComponent } from './ui-comp/implement-slider/implement-slider.component';
import { PopulationGroup } from './domain/populationGroup';
import { Country } from './domain/country';
import { Injectable } from '@angular/core';

@Injectable()
export class WorldState {

  static w: WorldState;

  public myCountry;
  public countries = [];
  public turnNumber = 0;

  static getInstance(): WorldState {
    if (this.w === undefined || this.w === null) {
      const worldState = new WorldState();
      worldState.initialSetup();
      this.w = worldState;
      return worldState;
    } else {
      return this.w;
    }
  }

  endTurn() {
    this.myCountry.endTurn();
    for (const c in this.countries) {
      if (this.countries.hasOwnProperty(c)) {
        this.countries[c].endTurn();
      }
    }
  }

  initialSetup() {
    this.myCountry = new Country();
    this.initialCanada();
  }

  // 102% https://tradingeconomics.com/canada/gross-national-expenditure-percent-of-gdp-wb-data.html
  initialCanada() {
    this.myCountry.name = 'Canada';
    this.myCountry.surplus = -1400106060303;
    this.myCountry.gdp = 1790000000000;
    this.myCountry.income = 1575956067383;
    this.myCountry.expenditure = 1571956067383;

    this.myCountry.growthRate = 0.73;

    this.myCountry.population['POOR'] = new PopulationGroup('POOR', 4448041, 30, 10133);
    this.myCountry.population['WORKING_CLASS'] = new PopulationGroup('WORKING_CLASS', 11861443, 40, 22200);
    this.myCountry.population['MIDDLE_CLASS'] = new PopulationGroup('MIDDLE_CLASS', 17792165, 60, 27600);
    this.myCountry.population['UPPER_CLASS'] = new PopulationGroup('UPPER_CLASS', 1853350, 80, 80400);

    const flatRateIndexTax = new ImplementSliderComponent();
    flatRateIndexTax.id = 'flat-rate-income-tax';
    flatRateIndexTax.implemented = true;
    flatRateIndexTax.value = 20;
    this.myCountry.policies['flat-rate-income-tax'] = flatRateIndexTax;


    // 26 --rich

  }
}
