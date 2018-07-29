import { Injectable } from '@angular/core';

@Injectable()
export class PopulationGroup {

  public name: string;
  public populationCount = 0;
  public happiness = 0;
  public averageIncome = 0;

  constructor(name: string, populationCount: int, happiness: int, averageIncomeInAYear: int) {
    this.name = name;
    this.populationCount = populationCount;
    this.happiness = happiness;
    this.averageIncome = averageIncomeInAYear / 12 * 4;
  }

}
