import { Injectable } from '@angular/core';

@Injectable()
export class PopulationGroup {

  public name: string;
  public populationCount = 0;
  public happiness = 0;
  public averageIncome = 0;

}
