import { Country } from './domain/country';
import { Injectable } from '@angular/core';

@Injectable()
export class WorldState {

  static w: WorldState;

  public myCountry = new Country();
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
    this.initialCanada();
  }

  initialCanada() {
    this.myCountry.name = 'Canada';
    this.myCountry.surplus = -1400106060303;
    this.myCountry.gdp = 1790000000000;
    this.myCountry.income = 1575956067383; // world bank via google
    // 102% https://tradingeconomics.com/canada/gross-national-expenditure-percent-of-gdp-wb-data.html
    this.myCountry.expenditure = 1571956067383;

    this.myCountry.growthRate = 0.73;

    const poorGroup = new Object();
    poorGroup.name = 'POOR';
    poorGroup.populationCount = 4448041; // 12%
    poorGroup.happiness = 30;
    poorGroup.averageIncome = 10133 / 12 * 4;

    const workingClassGroup = new Object();
    workingClassGroup.name = 'WORKING_CLASS';
    workingClassGroup.populationCount = 11861443; // 32%
    workingClassGroup.happiness = 30;
    workingClassGroup.averageIncome = 22200 / 12 * 4;

    const middleClassGroup = new Object();
    middleClassGroup.name = 'MIDDLE_CLASS';
    middleClassGroup.populationCount = 17792165; // 48%
    middleClassGroup.happiness = 30;
    middleClassGroup.averageIncome = 27600 / 12 * 4;

    const upperClassGroup = new Object();
    upperClassGroup.name = 'UPPER_CLASS';
    upperClassGroup.populationCount = 1853350; // 5%
    upperClassGroup.happiness = 30;
    upperClassGroup.averageIncome = 80400 / 12 * 4;

    this.myCountry.population['POOR'] = poorGroup;
    this.myCountry.population['WORKING_CLASS'] = workingClassGroup;
    this.myCountry.population['MIDDLE_CLASS'] = middleClassGroup;
    this.myCountry.population['UPPER_CLASS'] = upperClassGroup;
  }
}
